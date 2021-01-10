import Floodings from '../models/Floodings';
import imagesView from './images_view';

export default {
  render(floodings: Floodings) {
    return {
      id: floodings.id,
      name: floodings.name,
      latitude: floodings.latitude,
      longitude: floodings.longitude,
      about: floodings.about,
      instructions: floodings.instructions,
      opening_hours: floodings.opening_hours,
      open_on_weekends: floodings.open_on_weekends,
      images: imagesView.renderMany(floodings.images),
    };
  },

  renderMany(floodings: Floodings[]) {
    return floodings.map((flooding) => this.render(flooding));
  },
};
