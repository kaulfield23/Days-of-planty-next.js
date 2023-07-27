import { Schema } from 'mongoose';

interface ImageSchemaProps {
  image: { type: Buffer; required: true };
  contentType: { type: String; required: true };
  filename: { type: String; required: true };
}
export const imageSchema = new Schema<ImageSchemaProps>({
  image: Buffer,
  contentType: String,
  filename: String,
});
