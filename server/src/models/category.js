import { Schema } from 'mongoose';

const Category = new Schema({
    name: { type: String },
    superlative: { type: String}
},
{
    timestamps: true
});

export default Category;