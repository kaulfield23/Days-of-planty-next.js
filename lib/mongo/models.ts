import { model, models } from 'mongoose';
import { commentSchema, imageSchema } from './shcema';

const plantImages = models.plantImages || model('plantImages', imageSchema);

const plantComments =
  models.plantComments || model('plantComments', commentSchema);

export { plantImages, plantComments };
