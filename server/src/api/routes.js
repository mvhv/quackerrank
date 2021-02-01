import express from 'express';
import path from 'path';

import apiRoutes from './api.js';

const routes = express.Router();
routes.use('/public', express.static(path.resolve('../app/dist/')));
routes.use('/api', apiRoutes);
routes.get('/', (req, res) => res.sendFile(path.resolve('../app/dist/main.html')));

export default routes;