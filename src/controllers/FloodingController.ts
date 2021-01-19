import { Request, Response } from 'express';
import User from '../models/User';
import { getMongoRepository } from 'typeorm';
import * as Yup from 'yup';

import Floodings from '../models/Floodings';
import floodingsView from '../views/floodings_view';

export default {
  async index(_req: Request, res: Response) {
    const floodingsRepository = getMongoRepository(Floodings);

    const floodings = await floodingsRepository.find();

    return res.json(floodingsView.renderMany(floodings));
  },

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const floodingsRepository = getMongoRepository(Floodings);

    const floodings = await floodingsRepository.findOneOrFail(id);

    return res.json(floodingsView.render(floodings));
  },

  async create(req: Request, res: Response) {
    const floodingsRepository = getMongoRepository(Floodings);
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        latitude: Yup.number().required(),
        longitude: Yup.number().required(),
        note: Yup.string(),
        user: Yup.string().required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      const floodings: any = floodingsRepository.create(req.body);

      await floodingsRepository.save(floodings);
      return res.status(201).json(floodings);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
};
