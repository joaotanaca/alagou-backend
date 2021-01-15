import { Router } from 'express';

import FloodingController from './controllers/FloodingController';
import UserController from './controllers/UserController';

const routes = Router();

routes.get('/floodings', FloodingController.index);
routes.get('/floodings/:id', FloodingController.show);
routes.post('/floodings', FloodingController.create);
routes.get('/floodings/:id', UserController.show);
routes.post('/user/create', UserController.create);

export default routes;
