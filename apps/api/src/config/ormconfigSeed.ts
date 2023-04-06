import {DataSource} from 'typeorm';
import {dataSourceOptions} from './ormconfig';
import {join} from 'path';

export default new DataSource({...dataSourceOptions, migrations: [join(__dirname, '/../tools/seedMigrations/*{.ts,.js}')], migrationsTableName: 'seeds'});
