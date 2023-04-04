import { Module } from '@nestjs/common';
import {BookingsAdapterService} from './bookingsAdapter.service';

@Module({
    imports: [],
    controllers: [],
    providers: [BookingsAdapterService],
    exports: [BookingsAdapterService]
})
export class BookingsModule {}
