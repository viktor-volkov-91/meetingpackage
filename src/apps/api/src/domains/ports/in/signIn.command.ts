import {BookerEmail} from '../../entries/booker.entity';

export interface SignInCommand {
    signIn(email: BookerEmail): Promise<boolean>;
}
