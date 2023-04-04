import {BookerEmail} from '../../entities/booker.entity';

export interface SignInCommand {
    signIn(email: BookerEmail): Promise<boolean>;
}
