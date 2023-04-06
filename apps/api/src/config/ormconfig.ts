import { join } from 'path';

import {DataSource, DataSourceOptions} from 'typeorm';

export const dataSourceOptions: DataSourceOptions= {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'password',
  database: 'meetingpackage',
  synchronize: false,
  logging: true,
  entities: [join(__dirname, '/../ormEntities/*.ormEntity{.ts,.js}')],
  subscribers: [],
  migrations: []
}

export default new DataSource(dataSourceOptions);
