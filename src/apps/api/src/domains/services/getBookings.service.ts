import {GetBookingsQuery} from '../ports/in/getBookings.query';
import {LoadBookingsPort} from '../ports/out/loadBookings.port';
import {BookerEmail} from '../entries/booker.entity';
import {BookingEntity} from '../entries/booking.entity';

export class GetBookingsService implements GetBookingsQuery {
    constructor(private readonly _loadBookingsPort: LoadBookingsPort) {
    }

    async getBookings(bookerEmail: BookerEmail): Promise<BookingEntity[]> {
        return this._loadBookingsPort.loadBookings(bookerEmail)
    }
}
