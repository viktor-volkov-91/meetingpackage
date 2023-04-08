import {BookingEntity} from '../../../../domains/entities/booking.entity';
import {toBookingDtoPresenterPresenter} from './toBookingDtoPresenter.presenter';
import {GetBookingsResponseDto} from '../dto/getBookings.dto';

export const toGetBookingsResponseDtoPresenter = ({bookings, page}: {
    bookings: BookingEntity[];
    page: number;
}): GetBookingsResponseDto => (
    {
        bookings: bookings.map(toBookingDtoPresenterPresenter),
        page
    }
)
