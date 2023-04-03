import {Body, Controller, Post} from '@nestjs/common';
import {SignInRequestDto} from './dto/signInRequest.dto';
import {AuthService} from '../../auth/auth.service';
import {SignInResponseDto} from './dto/signInResponse.dto';
import {toSignInResponseDtoPresenter} from './presenters/toSignInResponseDto.presenter';

@Controller('/api/auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signin')
    async signIn(@Body() {email}: SignInRequestDto): Promise<SignInResponseDto> {
        return toSignInResponseDtoPresenter(await this.authService.signIn(email))
    }
}
