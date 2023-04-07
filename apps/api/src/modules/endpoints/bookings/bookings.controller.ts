import {Controller, Get, UseGuards, Request, Query} from '@nestjs/common';
import {AuthGuard} from '../../auth/auth.guard';
import {toGetBookingsDtoPresenter} from './presenters/toGetBookingsDto.presenter';
import {BookingsAdapterService} from '../../bookings/bookingsAdapter.service';

@Controller('/api/bookings')
export class BookingsController {

    constructor(private readonly bookingsAdapterService: BookingsAdapterService) {
    }

    @UseGuards(AuthGuard)
    @Get()
    async getBookings(
        @Request()
        {email}: any,
        @Query('page')
        page = 1
    ) {
        return toGetBookingsDtoPresenter(await this.bookingsAdapterService.loadBookings(email, page))
    }
}
