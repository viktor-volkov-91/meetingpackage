import {SignInResult} from '../../../auth/auth.service';

export const toSignInResponseDtoPresenter = ({access_token}: SignInResult) => ({
    access_token
})
