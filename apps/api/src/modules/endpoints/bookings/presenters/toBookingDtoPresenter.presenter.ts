import {BookingEntity} from '../../../../domains/entities/booking.entity';
import {BookingDto} from '../dto/booking.dto';

export const toBookingDtoPresenterPresenter = ({booker, venue, createdDate, startedDate, endedDate, price}: BookingEntity): BookingDto => {
    return {
        email: booker.email,
        venueName: venue.name,
        createdDate,
        startedDate,
        endedDate,
        price
    }
}
