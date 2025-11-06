import path from 'path';

export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'mysql'); // default till mysql istället för sqlite

  const connections = {
    mysql: {
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'shop_db'),
        user: env('DATABASE_USERNAME', 'shop_user'),
        password: env('DATABASE_PASSWORD', 'hemligt'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      pool: { min: 2, max: 10 },
    },
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: 60000,
    },
  };
};
