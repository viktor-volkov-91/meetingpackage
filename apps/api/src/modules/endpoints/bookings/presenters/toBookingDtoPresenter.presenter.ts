import {BookingEntity} from '../../../../domains/entities/booking.entity';
import {BookingDto} from '../dto/booking.dto';

export const toBookingDtoPresenterPresenter = ({id, booker, venue, createdDate, startedDate, endedDate, price}: BookingEntity): BookingDto => {
    return {
        id,
        email: booker.email,
        venueName: venue.name,
        createdDate,
        startedDate,
        endedDate,
        price
    }
}
