import {Injectable, UnauthorizedException} from '@nestjs/common';
import {SignInService} from '../../domains/services/signIn.service';
import {BookerEmail} from '../../domains/entities/booker.entity';
import {JwtService} from '@nestjs/jwt';

export type SignInResult = {
    access_token: string;
}

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService
    ) {}

    async signIn(email: BookerEmail): Promise<SignInResult> {
        const signInService = new SignInService();

        if (!await signInService.signIn(email)) {
            throw new UnauthorizedException();
        }

        const payload = {email, sub: email};

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
