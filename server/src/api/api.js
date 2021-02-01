import express from 'express';

import authRoutes from './auth.js';
import birdRoutes from './bird.js';
import userRoutes from './user.js';
import voteRoutes from './vote.js';

const apiRoutes = express.Router();

apiRoutes.use('/auth', authRoutes);
apiRoutes.use('/bird', birdRoutes);
apiRoutes.use('/user', userRoutes);
apiRoutes.use('/vote', voteRoutes);

export default apiRoutes;