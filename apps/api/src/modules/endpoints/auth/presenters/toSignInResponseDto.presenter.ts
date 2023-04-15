import {SignInResult} from '../../../auth/auth.service';

export const toSignInResponseDtoPresenter = ({accessToken, email}: SignInResult) => ({
    accessToken,
    email
})
