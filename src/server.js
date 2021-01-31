import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import apiRoutes from './api/routes';
import appRoutes from './app/routes';

const config = require('config/server.json');

// database setup
config.mongo.path = `mongodb://${config.mongo.server}:${config.mongo.port}/${config.mongo.database}`;
mongoose.connect(config.mongo.path, { useNewUrlParser: True });
const connect = mongoose.connection;

connection.once('open', () => {
    console.log(`MongoDB database connection established successfully on:\n\t${config.mongo.path}`);
});

const server = express()

// middleware
server.use(cors());
server.use(express.json());

// routes
server.use('/api', apiRoutes);
server.use('/app', appRoutes);
server.get('*', (req, res) => res.redirect('/app'));

// start
server.listen(config.node.port, () => {
    console.log(`Server is running on port: ${config.node.port}`);
});