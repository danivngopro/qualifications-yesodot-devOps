import * as dotenv from 'dotenv';
import * as env from 'env-var';



export const config = {
  server: {
    name: 'primes-crud',
    port: env.get('APPLICATION_PORT')
    .default(1234)
    .asString()
  },
};

dotenv.config();
