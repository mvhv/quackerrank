import express from 'express';

import apiRoutes from './api.js';
import appRoutes from './app.js';

const routes = express.Router();

routes.use('/api', apiRoutes);
routes.use('/', appRoutes);

export default routes;