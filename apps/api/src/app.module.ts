import { Module } from '@nestjs/common';
import {EndpointsModule} from './modules/endpoints/endpoints.module';
import {AuthModule} from './modules/auth/auth.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {dataSourceOptions} from './config/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    AuthModule,
    EndpointsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
