import User from '../models/User';
import floodings_view from './floodings_view';

export default {
  render(user: User): any {
    const { id, email, name, floodings } = user;
    return {
      id,
      email,
      name,
      floodings: floodings_view.renderMany(floodings),
    };
  },

  renderMany(user: User[]) {
    return user.map((user) => this.render(user));
  },
};
