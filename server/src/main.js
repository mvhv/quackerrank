import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';

import apiRoutes from './api/routes.js';

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
server.use('/public', express.static(path.resolve('../app/dist/')));
server.use('/api', apiRoutes);
server.get('/', (req, res) => res.sendFile(path.resolve('../app/dist/main.html')));

// start serving
server.listen(config.node.port, () => {
    console.log(`Server is running on port: ${config.node.port}`);
});