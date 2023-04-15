import {Controller, Get, UseGuards, Request, Query} from '@nestjs/common';
import {AuthGuard} from '../../auth/auth.guard';
import {toGetBookingsResponseDtoPresenter} from './presenters/toGetBookingsDto.presenter';
import {BookingsAdapterService} from '../../bookings/bookingsAdapter.service';
import {ApiQuery} from '@nestjs/swagger';

@Controller('/api/bookings')
export class BookingsController {

    constructor(
        private readonly bookingsAdapterService: BookingsAdapterService) {
    }

    @UseGuards(AuthGuard)
    @Get()
    @ApiQuery({ name: 'page', type: 'number'})
    async getBookings(
        @Request()
        {email}: any,
        @Query('page')
        page = 1
    ) {
        return toGetBookingsResponseDtoPresenter({
            bookings: await this.bookingsAdapterService.loadBookings(email, page),
            page
        })
    }
}
