module.exports = {
  type: 'mongodb',
  url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zhrfm.gcp.mongodb.net/alagou?retryWrites=true&w=majority`,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  synchronize: true,
  logging: true,
  migrations: ['./src/database/migrations/*.ts'],
  entities: ['./src/models/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};
