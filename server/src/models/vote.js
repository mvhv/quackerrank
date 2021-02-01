import { Schema } from 'mongoose';

const id = Schema.Types.ObjectId;

const Vote = new Schema({
    user: { type: id, ref: 'User'},
    winner: { type: id, ref: 'Bird'},
    loser: { type: id, ref: 'User'},
    category: { type: id, ref: 'Category'}
},
{
    timestamps: true
});

export default Vote;