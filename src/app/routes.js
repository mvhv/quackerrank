import express from 'express';
import path from 'path';

const appRoutes = express.Router();

appRoutes.route('/').get((req, res) => {
    res.sendFile(path.resolve('/../../public/index.html'));
});

export default appRoutes;