import { Module } from '@nestjs/common';
import {AuthController} from './auth/auth.controller';
import {BookingsController} from './bookings/bookings.controller';
import {AuthModule} from '../auth/auth.module';
import {BookingsModule} from '../bookings/bookings.module';

@Module({
    imports: [AuthModule, BookingsModule],
    controllers: [AuthController, BookingsController],
    providers: [],
})
export class EndpointsModule {}
