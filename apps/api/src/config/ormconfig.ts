import { join } from 'path';

import {DataSource} from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'password',
  database: 'meetingpackage',
  synchronize: false,
  logging: false,
  entities: [join(__dirname, '/../orm-entities/*.ormEntity{.ts,.js}')],
  subscribers: [],
  migrations: [],
})
