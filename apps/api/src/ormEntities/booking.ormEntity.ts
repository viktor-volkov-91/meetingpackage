import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import {CustomerOrmEntity} from './customer.ormEntity';
import {VenueOrmEntity} from './venue.ormEntity';

@Entity('Bookings')
export class BookingOrmEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(_ => CustomerOrmEntity)
    @JoinColumn({ name: 'customerId' })
    customer: CustomerOrmEntity;

    @Column({ type: 'uuid' })
    customerId: string;

    @ManyToOne(_ => VenueOrmEntity)
    @JoinColumn({ name: 'venueId' })
    venue: VenueOrmEntity;

    @Column({ type: 'uuid' })
    venueId: string;

    @Column({ type: 'timestamp', nullable: false })
    startedAt: Date;

    @Column({ type: 'timestamp', nullable: false })
    endedAt: Date;

    @Column({ type: 'int', nullable: false })
    price: number;

    @CreateDateColumn({ type: 'timestamp', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: false })
    updatedAt: Date;
}
