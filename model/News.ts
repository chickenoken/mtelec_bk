import mongoose, { Schema as MongooseSchema, Document } from 'mongoose';

const NewsSchema: MongooseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
  },
  content: {
    type: String
  },
},{timestamps: true});

interface INews extends Document {
  title: string;
  content: String;
  type: string;
}

const News = mongoose.models.News || mongoose.model<INews>('News', NewsSchema);

export default News;