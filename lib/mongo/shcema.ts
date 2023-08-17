import { Schema } from 'mongoose';

interface ImageSchemaProps {
  image: { type: Buffer; required: true };
  contentType: { type: String; required: true };
  filename: { type: String; required: true };
}
interface DiarySchemaProps {
  name: { type: String; required: true; unique: true };
  content: { type: String; required: true };
  date: { type: Date; required: true };
  plantId: { type: String };
}
export const imageSchema = new Schema<ImageSchemaProps>({
  image: Buffer,
  contentType: String,
  filename: String,
});

export const diarySchema = new Schema<DiarySchemaProps>({
  name: String,
  date: Date,
  content: String,
  plantId: String,
});
