import { Module } from '@nestjs/common';
import {BookingsAdapterService} from './bookingsAdapter.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {BookingOrmEntity} from '../../ormEntities/booking.ormEntity';

@Module({
    imports: [TypeOrmModule.forFeature([BookingOrmEntity])],
    controllers: [],
    providers: [BookingsAdapterService],
    exports: [BookingsAdapterService]
})
export class BookingsModule {}
