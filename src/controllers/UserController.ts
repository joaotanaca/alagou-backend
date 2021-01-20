import { Request, Response } from 'express';
import { getMongoRepository } from 'typeorm';
import * as Yup from 'yup';
import bcrypt from 'bcrypt';
import User from '../models/User';
import user_view from '../views/user_view';

export default {
  async index(_req: Request, res: Response) {
    const userRepository = getMongoRepository(User);

    const user = await userRepository.find();

    return res.json(user_view.renderMany(user));
  },

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const userRepository = getMongoRepository(User);

    const user = await userRepository.findOneOrFail(id);

    return res.json(user_view.render(user));
  },

  async create(req: Request, res: Response) {
    const userRepository = getMongoRepository(User);
    const verifyEmail = await userRepository.findOne({ email: req.body.email });
    if (!verifyEmail) {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          email: Yup.string().email().required(),
          phone: Yup.string()
            .matches(
              /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
              'Telefone invalido'
            )
            .required(),
          password: Yup.string().required(),
        });

        await schema.validate(req.body, { abortEarly: false });
        const user = userRepository.create({
          ...req.body,
          password: await bcrypt.hash(req.body.password, 10),
          floodings: [],
        });
        await userRepository.save(user);

        return res.status(201).json(user);
      } catch (errors: any) {
        return res.status(400).json(errors);
      }
    } else {
      return res.status(400).json({
        errors: ['Email registrado'],
        inner: [
          {
            message: 'Email registrado',
            path: 'name',
            type: 'required',
            value: '',
          },
        ],
      });
    }
  },
  async login(req: Request, res: Response) {
    const userRepository = getMongoRepository(User);
    const user = await userRepository.findOne({ email: req.body.email });
    const error = res.status(400).json({ message: 'Email ou senha incorreta' });
    let _return;

    if (user?.email) {
      bcrypt.compare(req.body.password, user.password, (result) => {
        if (result)
          _return = res
            .status(200)
            .json({ name: user.name, phone: user.phone, email: user.email });
        else _return = error;
      });
    } else {
      _return = error;
    }

    return _return;
  },
};
