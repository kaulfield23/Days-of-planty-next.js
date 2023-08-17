import { model, models } from 'mongoose';
import { diarySchema, imageSchema } from './shcema';

const plantImages = models.plantImages || model('plantImages', imageSchema);

const plantDiary = models.plantDiary || model('plantDiary', diarySchema);

export { plantImages, plantDiary };
