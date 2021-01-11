import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Floodings from '../models/Floodings';
import floodingsView from '../views/floodings_view';

export default {
  async index(_req: Request, res: Response) {
    const floodingsRepository = getRepository(Floodings);

    const floodings = await floodingsRepository.find();
    //   {
    //   relations: ['images'],
    // }

    return res.json(floodingsView.renderMany(floodings));
  },

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const floodingsRepository = getRepository(Floodings);

    const floodings = await floodingsRepository.findOneOrFail(
      id
      //   {
      //   relations: ['images'],
      // }
    );

    return res.json(floodingsView.render(floodings));
  },

  async create(req: Request, res: Response) {
    const floodingsRepository = getRepository(Floodings);

    // const requestImages = req.files as Express.Multer.File[];

    // const images = requestImages.map((image) => {
    //   return { path: image.filename };
    // });

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      note: Yup.string().required().max(300),
      // instructions: Yup.string().required(),
      // opening_hours: Yup.string().required(),
      // open_on_weekends: Yup.boolean().required(),
      // images: Yup.array(
      //   Yup.object().shape({
      //     path: Yup.string().required(),
      //   })
      // ),
    });

    // let { open_on_weekends } = req.body;
    // open_on_weekends = open_on_weekends.toLowerCase() === 'true';

    await schema.validate(
      {
        ...req.body,
        // open_on_weekends, images
      },
      { abortEarly: false }
    );

    const floodings = floodingsRepository.create({
      ...req.body,
      // open_on_weekends,
      // images,
    });

    await floodingsRepository.save(floodings);

    return res.status(201).json(floodings);
  },
};
