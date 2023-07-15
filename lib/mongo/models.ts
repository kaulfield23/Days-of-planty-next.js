import { model, models } from 'mongoose';
import { imageSchema } from './shcema';

const plantImages = models.plantImages || model('plantImages', imageSchema);

export { plantImages };
