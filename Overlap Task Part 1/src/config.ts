import * as dotenv from 'dotenv';
import * as env from 'env-var';

dotenv.config();

export const config = {
  server: {
    name: 'persons-crud',
    port: env.get('APPLICATION_PORT').default(3001).asPortNumber(),
  },
  db: {
    connectionString: env.get('DB_CONNECTION_URL')
      .default('mongodb://localhost:27017')
      .asString(),
    dbName: env.get('PERSON_DB_NAME')
      .default('persons-crud')
      .asString(),
  },
};
