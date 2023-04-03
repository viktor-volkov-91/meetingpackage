import type {BookerEmail} from '../../entries/booker.entity';
import {BookingEntity} from '../../entries/booking.entity';

export interface GetBookingsQuery {
    getBookings(bookerEmail: BookerEmail): Promise<BookingEntity[]>;
}
