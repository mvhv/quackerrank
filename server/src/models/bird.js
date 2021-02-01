import { Schema } from 'mongoose';

const id = Schema.Types.ObjectId;

const Bird = new Schema({
    name: { type: String },
    submittedBy: { type: id },
    approvedBy: { type: id }
},
{
    timestamps: true
});

export default Bird;