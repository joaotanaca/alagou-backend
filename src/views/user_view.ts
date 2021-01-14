import User from '../models/User';

export default {
  render(user: User) {
    const { id, email, name, floodings } = user;
    return {
      id,
      email,
      name,
      floodings,
    };
  },

  renderMany(user: User[]) {
    return user.map((user) => this.render(user));
  },
};
