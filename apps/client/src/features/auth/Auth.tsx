import { styled, alpha } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';
import InputBase from '@mui/material/InputBase';
import {useState} from 'react';
import {apiClient, updateAccessToken} from '../../api';

const SignInForm = styled('form')(({ theme }) => ({
    display: 'flex'
}));

const SignInEmailWrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SignInEmailInput = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 1),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const SignInFormButton = styled(Button)(({ theme }) => ({
    marginLeft: theme.spacing(1),
    color: 'inherit',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.04),
    }
}));

type AuthProps = {
    email: string | null;
    onChange: (email: string) => void;
    onSubmit: () => void;
}

export const Auth = ({email, onChange, onSubmit}: AuthProps) => {
    const [isLoaded, setIsLoaded] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            return;
        }

        setIsLoaded(false);
        apiClient.api.signIn({
            email
        }).then(response => {
            const {data} = response;
            const {accessToken} = data;

            updateAccessToken(accessToken);
            setIsLoaded(true);
            onSubmit()
        })
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Bookings
                </Typography>
                <SignInForm onSubmit={handleSubmit}>
                    <SignInEmailWrapper>
                        <SignInEmailInput disabled={!isLoaded} value={email} placeholder="Email" onChange={e => onChange(e.target.value)} />
                    </SignInEmailWrapper>
                    <SignInFormButton type='submit' disabled={!isLoaded} endIcon={<LoginIcon />}>
                        Sign in
                    </SignInFormButton>
                </SignInForm>
            </Toolbar>
        </AppBar>
    )
}
