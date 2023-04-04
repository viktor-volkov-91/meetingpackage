import {Injectable} from '@nestjs/common';
import {LoadBookingsPort} from '../../domains/ports/out/loadBookings.port';
import {BookerEmail, BookerEntity} from '../../domains/entities/booker.entity';
import {BookingEntity} from '../../domains/entities/booking.entity';
import {VenueEntity} from '../../domains/entities/venue.entity';

@Injectable()
export class BookingsAdapterService implements LoadBookingsPort{
    async loadBookings(bookerEmail: BookerEmail): Promise<BookingEntity[]> {
        return [
            new BookingEntity(
                '1',
                new BookerEntity(bookerEmail),
                new VenueEntity('12', 'venue'),
                new Date(),
                new Date(),
                new Date(),
                1000
            )
        ]
    }
}
