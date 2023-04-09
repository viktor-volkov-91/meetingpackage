import Box from '@mui/material/Box';
import {Auth} from "../features/auth/Auth.tsx";
import {useEffect, useState} from "react";
import {apiClient} from "../api.ts";

export const BookingsPage = () => {
    const [email, setEmail] = useState<string | null>(null)

    useEffect(() => {
        apiClient.api.me()
            .then(result => {
                setEmail(result.data.email);
            });

    }, []);

    return (
        <Box sx={{ display: 'flex' }}>
            <Auth email={email}/>
            <Box component="main">
                TEST
            </Box>
        </Box>
    )
}
