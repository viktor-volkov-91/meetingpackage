import {BookingDto} from './booking.dto';

export class GetBookingsResponseDto {
    bookings: BookingDto[];
    page: number;
}
