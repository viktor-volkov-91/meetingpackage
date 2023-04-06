import {Injectable} from '@nestjs/common';
import {LoadBookingsPort} from '../../domains/ports/out/loadBookings.port';
import {BookerEmail} from '../../domains/entities/booker.entity';
import {BookingEntity} from '../../domains/entities/booking.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {BookingOrmEntity} from '../../ormEntities/booking.ormEntity';
import {Repository} from 'typeorm';
import {BookingMapper} from './booking.mapper';

@Injectable()
export class BookingsAdapterService implements LoadBookingsPort{

    constructor(
        @InjectRepository(BookingOrmEntity)
        private readonly bookingRepository: Repository<BookingOrmEntity>,
    ) {
    }

    async loadBookings(bookerEmail: BookerEmail): Promise<BookingEntity[]> {
        const result = await this.bookingRepository
            .createQueryBuilder('booking')
            .leftJoinAndSelect('booking.customer', 'customer')
            .leftJoinAndSelect('booking.venue', 'venue')
            .where({ customer: {email: bookerEmail} })
            .orderBy('booking.createdAt')
            .getMany();

        return result.map(BookingMapper.mapToDomain)
    }
}
