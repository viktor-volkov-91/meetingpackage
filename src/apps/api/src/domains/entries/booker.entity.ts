export type BookerEmail = string;

export class BookerEntity {
    constructor(
        private readonly _email: BookerEmail
    ) {}

    get email() {
        return this._email
    }
}
