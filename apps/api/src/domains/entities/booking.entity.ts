import {VenueEntity} from './venue.entity';
import {BookerEntity} from './booker.entity';

type BookingId = string;

export class BookingEntity {
    constructor(
        private readonly _id: BookingId,
        private readonly _booker: BookerEntity,
        private readonly _venue: VenueEntity,
        private _createdDate: Date,
        private _startedDate: Date,
        private _endedDate: Date,
        private _price: number
    ) {
    }

    get id() {
        return this._id;
    }

    get booker() {
        return this._booker;
    }

    get venue() {
        return this._venue;
    }

    get createdDate() {
        return this._createdDate;
    }

    get startedDate() {
        return this._startedDate;
    }

    get endedDate() {
        return this._endedDate;
    }

    get price() {
        return this._price;
    }
}
