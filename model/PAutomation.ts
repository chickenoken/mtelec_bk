import mongoose, { Schema as MongooseSchema, Document } from 'mongoose';

const PAutomationSchema: MongooseSchema = new mongoose.Schema({
  image1: { type: String },
  image2: { type: String },
  name3: { type: String },
  image3: { type: String },
  name4: { type: String },
  image4: { type: String },
  name5: { type: String },
  image5: { type: String },
  name6: { type: String },
  image6: { type: String },
  name7: { type: String },
  image7: { type: String },
  name8: { type: String },
  image8: { type: String },
}, { timestamps: true });

interface IPAutomation extends Document {
  image1: string;
  image2: string;
  name3: string;
  image3: string;
  name4: string;
  image4: string;
  name5: string;
  image5: string;
  name6: string;
  image6: string;
  name7: string;
  image7: string;
  name8: string;
  image8: string;
}

const PAutomation = mongoose.models.PAutomation || mongoose.model<IPAutomation>('PAutomation', PAutomationSchema);

export default PAutomation;
