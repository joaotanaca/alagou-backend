import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import FloodingController from './controllers/FloodingController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/floodings', FloodingController.index);
routes.get('/floodings/:id', FloodingController.show);
routes.post('/floodings', upload.array('images'), FloodingController.create);

export default routes;
