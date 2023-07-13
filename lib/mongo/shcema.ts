import { Schema } from 'mongoose';

interface ImageSchemaProps {
  image: Buffer;
}
export const imageSchema = new Schema<ImageSchemaProps>({
  image: Buffer,
});
