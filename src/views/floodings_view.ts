import Floodings from '../models/Floodings';

export default {
  render(floodings: Floodings) {
    const { _id, name, latitude, longitude, note, createAt, user } = floodings;
    return {
      _id,
      name,
      latitude,
      longitude,
      note,
      createAt,
      user,
    };
  },

  renderMany(floodings: Floodings[]) {
    return floodings.map((flooding) => this.render(flooding));
  },
};
