import {BookingEntity} from '../../domains/entities/booking.entity';
import {BookingOrmEntity} from '../../ormEntities/booking.ormEntity';
import {CustomerOrmEntity} from '../../ormEntities/customer.ormEntity';
import {BookerEntity} from '../../domains/entities/booker.entity';
import {VenueOrmEntity} from '../../ormEntities/venue.ormEntity';
import {VenueEntity} from '../../domains/entities/venue.entity';

export class BookingMapper {
    static mapToDomain({id, customer, venue, createdAt, startedAt, endedAt, price }: BookingOrmEntity): BookingEntity {
        return new BookingEntity(
            id,
            BookingMapper.mapCustomerToDomain(customer),
            BookingMapper.mapVenueToDomain(venue),
            createdAt,
            startedAt,
            endedAt,
            price
        )
    }

    static mapCustomerToDomain({email}: CustomerOrmEntity): BookerEntity {
        return new BookerEntity(email);
    }

    static mapVenueToDomain({id, name}: VenueOrmEntity): VenueEntity {
        return new VenueEntity(id, name);
    }

}
