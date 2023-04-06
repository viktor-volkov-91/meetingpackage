import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity('Venues')
export class VenueOrmEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string

    @CreateDateColumn({ type: 'timestamp', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: false })
    updatedAt: Date;
}
