import { Schema } from 'mongoose';

interface ImageSchemaProps {
  image: { type: Buffer; required: true };
  contentType: { type: String; required: true };
  filename: { type: String; required: true };
}
interface CommentSchemaProps {
  name: { type: String; required: true; unique: true };
  comment: { type: String; required: true };
  date: { type: Date; required: true };
}
export const imageSchema = new Schema<ImageSchemaProps>({
  image: Buffer,
  contentType: String,
  filename: String,
});

export const commentSchema = new Schema<CommentSchemaProps>({
  name: String,
  comment: String,
  date: Date,
});
