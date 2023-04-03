import { Module } from '@nestjs/common';
import {jwtConstants} from './constants';
import {JwtModule} from '@nestjs/jwt';
import {AuthService} from './auth.service';

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '2 days' },
        }),
    ],
    controllers: [],
    providers: [AuthService],
    exports: [AuthService]
})
export class AuthModule {}
