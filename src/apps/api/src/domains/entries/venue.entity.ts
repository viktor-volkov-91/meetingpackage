type VenueId = string;

export class VenueEntity {
    constructor(
        private readonly _id: VenueId,
        private readonly _name: string
    ) {
    }

    get name() {
        return this._name;
    }
}
