import {Injectable} from '@nestjs/common';
import {LoadBookingsPort} from '../../domains/ports/out/loadBookings.port';
import {BookerEmail, BookerEntity} from '../../domains/entries/booker.entity';
import {BookingEntity} from '../../domains/entries/booking.entity';
import {VenueEntity} from '../../domains/entries/venue.entity';

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
