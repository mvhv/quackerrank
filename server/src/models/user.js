import { Schema } from 'mongoose';

const User = new Schema({
    username: { type: String },
    emailAddress: { type: String },
    credentials: {
        hash: { type: String }
    },
    roles: {
        type: [String],
        default: ["user"]
    }
},
{
    timestamps: true
});

export default User;
