import { Router } from 'express';

import FloodingController from './controllers/FloodingController';

const routes = Router();

routes.get('/floodings', FloodingController.index);
routes.get('/floodings/:id', FloodingController.show);
routes.post('/floodings', FloodingController.create);

export default routes;
