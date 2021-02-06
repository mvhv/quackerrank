import bcrypt from 'bcrypt';

import User from 'models/user.js'
import config from 'config/server.js';

const saltRounds = config.bcrypt.saltRounds;

// exprimenting with asyncs, the mixed promise and callback styles should be fixed
async function setPassword(userId, plaintext) {
    // use Promise.all to run hash and query in parallel
    const [hash, user] = await Promise.all([
        bcrypt.hash(plaintext, saltRounds),
        User.findById(userId).exec()
    ])

    user.credentials.hash = hash;
    return user.save();
}

async function checkPassword(userId, plaintext) {
    const user = await User.findById(userId).exec();
    return bcrypt.compare(plaintext, user.credentials.hash);
}