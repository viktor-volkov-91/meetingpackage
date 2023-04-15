import Box from '@mui/material/Box';
import {Auth} from '../features/auth/Auth';
import {useEffect, useState} from 'react';
import {apiClient} from '../api';
import {BookingDto} from '@meetingpackage/api-client';
import {Bookings} from '../features/bookings/Bookings';

export const BookingsPage = () => {
    const [email, setEmail] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [bookings, setBookings] = useState<BookingDto[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (isAuthorized) {
            return;
        }

        let ignore = false;

        async function load() {
            setIsAuthorized(false);
            try {
                const result = await apiClient.api.me();
                if (!ignore) {
                    setEmail(result.data.email);
                    setIsAuthorized(true);
                }
            }
            catch {
                if (!ignore) {
                    setEmail('');
                }
            }
        }

        ignore = false;
        load();

        return () => {
            ignore = true;
        }
    }, [isAuthorized])

    useEffect(() => {
        if (!email || !isAuthorized) {
            return;
        }

        let ignore = false;

        async function load() {
            const result = await apiClient.api.getBookings({page});
            if (!ignore) {
                setBookings(bookings => [...bookings, ...result.data.bookings]);
            }
        }

        ignore = false;
        load();

        return () => {
            ignore = true;
        }
    }, [email, page, isAuthorized])

    const auth = async () => {
        setIsAuthorized(true);
    }

    const loadPortion = () => {
        setPage(page => page + 1);
    }

    return (
        <Box>
            <Auth email={email} onChange={email => setEmail(email)} onSubmit={auth} />
            {bookings.length > 0 && (
                <Bookings bookings={bookings} onLoadPortion={loadPortion} />
            )}
        </Box>
    )
}
