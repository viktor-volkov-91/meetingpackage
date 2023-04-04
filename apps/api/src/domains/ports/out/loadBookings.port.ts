import {BookerEmail} from '../../entities/booker.entity';
import {BookingEntity} from '../../entities/booking.entity';

export interface LoadBookingsPort {
    loadBookings(bookerEmail: BookerEmail): Promise<BookingEntity[]>;
}
