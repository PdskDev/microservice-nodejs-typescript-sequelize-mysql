export const config = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'P@ssword01',
  DB: 'nodejs_api_db',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export const dialect = 'mysql';
