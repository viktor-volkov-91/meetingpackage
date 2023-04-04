import {SignInCommand} from '../ports/in/signIn.command';
import {BookerEmail} from '../entities/booker.entity';

export class SignInService implements SignInCommand {
    async signIn(email: BookerEmail): Promise<boolean> {
        return true;
    }
}
