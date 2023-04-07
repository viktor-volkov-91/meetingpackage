import { MigrationInterface, QueryRunner } from 'typeorm'
import {CustomerOrmEntity} from '../../ormEntities/customer.ormEntity';
import {faker} from '@faker-js/faker';
import {VenueOrmEntity} from '../../ormEntities/venue.ormEntity';
import {BookingOrmEntity} from '../../ormEntities/booking.ormEntity';

const createCustomer = () => {
    const customer = new CustomerOrmEntity();

    customer.email = faker.internet.email();

    return customer;
}

const createVenue = () => {
    const venue = new VenueOrmEntity();

    venue.name = faker.company.name();

    return venue;
}

const createBooking = ({
    venues,
    customers
}: {
    venues: VenueOrmEntity[];
    customers: CustomerOrmEntity[];
}) => {
    const {id: venueId} = venues[Math.floor(Math.random() * venues.length)];
    const {id: customerId} = customers[Math.floor(Math.random() * customers.length)];

    const booking = new BookingOrmEntity();

    booking.venueId = venueId;
    booking.customerId = customerId;
    booking.price = Number(faker.finance.amount(1, 10000, 0));
    booking.endedAt = faker.date.recent(100);
    booking.startedAt = faker.date.recent(100, booking.endedAt);
    booking.createdAt = faker.date.recent(100, booking.startedAt);


    return booking;
}

function* generator<T>(n: number, fabric: (i: number) => T) {
    for (let i = 0; i < n; i++) {
        yield fabric(i);
    }
}

function generate<T>(n: number, fabric: (i: number) => T) {
    const result = [];

    for (const value of generator(n, fabric)) {
        result.push(value);
    }

    return result;
}

export class seeds1680802411554 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const customerRepository = queryRunner.connection.getRepository(CustomerOrmEntity);
        const customers = await customerRepository.save(generate(100, createCustomer));

        const venueRepository = queryRunner.connection.getRepository(VenueOrmEntity);
        const venues = await venueRepository.save(generate(100, createVenue));

        const bookingRepository = queryRunner.connection.getRepository(BookingOrmEntity);
        const createBookingWithData = createBooking.bind(null, {
            venues,
            customers
        });

        const bookingPromises = []
        // for (let i = 0; i < 100; i++) {
            bookingPromises.push(bookingRepository.save(generate(10000, createBookingWithData)));
        // }
        await Promise.all(bookingPromises);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return;
    }

}
