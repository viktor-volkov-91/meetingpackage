import {BookerEmail} from '../../entries/booker.entity';
import {BookingEntity} from '../../entries/booking.entity';

export interface LoadBookingsPort {
    loadBookings(bookerEmail: BookerEmail): Promise<BookingEntity[]>;
}
