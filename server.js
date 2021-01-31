import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';

import apiRoutes from './src/api/routes.js';
import appRoutes from './src/app/routes.js';

import config from './config/server.js';

// connect to mongodb
config.mongo.path = `mongodb://${config.mongo.server}:${config.mongo.port}/${config.mongo.database}`;
mongoose.connect(config.mongo.path, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log(`MongoDB database connection established successfully on:\n\t${config.mongo.path}`);
});

// init express server
const server = express()

// middleware
server.use(cors());
server.use(express.json());

// routes
server.use('/public', express.static('public'))
server.use('/api', apiRoutes);
server.use('/app', appRoutes);

// start serving
server.listen(config.node.port, () => {
    console.log(`Server is running on port: ${config.node.port}`);
});