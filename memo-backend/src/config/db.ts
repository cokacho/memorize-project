const configs = {
  development: {
    dialect: 'postgres',
    database: process.env.POSTGRES_DB_NAME || 'dev_memo_game',
    username: process.env.POSTGRES_DB_USERNAME || 'postgres',
    password: process.env.POSTGRES_DB_PASSWORD || 'postgres',
    host: process.env.POSTGRES_DB_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_DB_PORT || '5455'),
  },
  test: {
    dialect: 'postgres',
    database: process.env.POSTGRES_DB_NAME || 'test_memo_game',
    username: process.env.POSTGRES_DB_USERNAME || 'postgres',
    password: process.env.POSTGRES_DB_PASSWORD || 'postgres',
    host: process.env.POSTGRES_DB_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_DB_PORT || '5432'),
  },
  production: {
    dialect: 'postgres',
    database: process.env.POSTGRES_DB_NAME,
    username: process.env.POSTGRES_DB_USERNAME,
    password: process.env.POSTGRES_DB_PASSWORD,
    host: process.env.POSTGRES_DB_HOST,
    port: parseInt(process.env.POSTGRES_DB_PORT),
  },
};
export default configs;
