import bcrypt from 'bcrypt';

import User from 'models/user.js'
import config from 'config/server.js';

const saltRounds = config.bcrypt.saltRounds;

function setPassword(userId, plaintext) {
    bcrypt.hash(plaintext, saltRounds, (err, hash) => {
        User.findById(userId, (err, user) => {
            if (!todo) {
                throw 'User does not exist';
            } else {
                user.credentials.hash = hash;
                user.save().then(user => {
                    console.log(`Password updated for user with ID: ${userId}`);
                })
                .catch(err => {
                    console.log(err)
                });
            }
            
        });
    });
}