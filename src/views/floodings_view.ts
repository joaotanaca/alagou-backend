import Floodings from '../models/Floodings';
import userView from './user_view';

export default {
  render(floodings: Floodings) {
    const { id, name, latitude, longitude, note, createAt, user } = floodings;
    return {
      id,
      name,
      latitude,
      longitude,
      note,
      createAt,
      user: userView.render(user),
    };
  },

  renderMany(floodings: Floodings[]) {
    return floodings.map((flooding) => this.render(flooding));
  },
};
