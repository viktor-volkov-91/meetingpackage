import type {BookerEmail} from '../../entities/booker.entity';
import {BookingEntity} from '../../entities/booking.entity';

export interface GetBookingsQuery {
    getBookings(bookerEmail: BookerEmail): Promise<BookingEntity[]>;
}
