import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import routes from './api/routes.js';
import config from './config/server.js';

// connect to mongodb
config.mongo.path = `mongodb://${config.mongo.server}:${config.mongo.port}/${config.mongo.database}`;
mongoose.connect(config.mongo.path, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log(`MongoDB database connection established successfully on:\n\t${config.mongo.path}`);
});

// init express server
const app = express()

// middleware
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(config.node.port, () => {
    console.log(`Server is running on:\n\t${config.node.server}:${config.node.port}`);
});