import express from 'express';
import path from 'path';

const appRoutes = express.Router();

function sendApp (req, res) {
    res.sendFile(path.resolve('../app/dist/main.html'));
}

appRoutes.use('/public', express.static(path.resolve('../app/dist/')));
console.log(path.resolve('../app/dist/main.html'))
appRoutes.get('*', sendApp);

export default appRoutes;