import { Schema } from 'mongoose';

interface ImageSchemaProps {
  image: Buffer;
  contentType: String;
}
export const imageSchema = new Schema<ImageSchemaProps>({
  image: Buffer,
  contentType: String,
});
