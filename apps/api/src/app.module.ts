import { Module } from '@nestjs/common';
import {EndpointsModule} from './modules/endpoints/endpoints.module';
import {AuthModule} from './modules/auth/auth.module';

@Module({
  imports: [AuthModule, EndpointsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
