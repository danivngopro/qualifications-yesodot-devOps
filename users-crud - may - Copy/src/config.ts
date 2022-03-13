import * as dotenv from 'dotenv';
import * as env from 'env-var';



export const config = {
  server: {
    name: 'users-crud',
    port: env.get('APPLICATION_PORT')
    .default(1234)
    .asString()
  },
  db: {
    connectionString: env.get('DB_CONNECTION_URL')
      .default('mongodb://localhost:27017')
      .asString(),
    dbName: env.get('USER_DB_NAME')
      .default('users-crud')
      .asString(),
  },
};

dotenv.config();
