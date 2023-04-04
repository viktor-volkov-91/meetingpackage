import {BookingEntity} from '../../../../domains/entities/booking.entity';
import {toBookingDtoPresenterPresenter} from './toBookingDtoPresenter.presenter';
import {GetBookingsDto} from '../dto/getBookings.dto';

export const toGetBookingsDtoPresenter = (entities: BookingEntity[]): GetBookingsDto => {
    return {
        bookings: entities.map(toBookingDtoPresenterPresenter)
    }
}
