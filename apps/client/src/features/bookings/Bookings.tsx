import {BookingDto} from '@meetingpackage/api-client';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import {Fragment, useEffect, useRef} from 'react';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

type BookingsProps = {
    bookings: BookingDto[];
    onLoadPortion: () => void;
}

const formatDate = (date: string) => new Date(Date.parse(date)).toISOString().slice(0, 10)

export const Bookings = ({bookings, onLoadPortion}: BookingsProps) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const [entry] = entries;

            if (entry.isIntersecting) {
                onLoadPortion();
            }
        }, {
            threshold: 0.5
        });

        observer.observe(ref.current as Element);
        return () => {
            observer.unobserve(ref.current as Element);
        }
    }, []);

    return (
        <List>
            {bookings.map(booking => (
                <ListItem key={booking.id}>
                    <ListItemText
                        primary={(
                            <Typography>
                                Venue: {booking.venueName}
                            </Typography>
                        )}
                        secondary={
                            <Fragment>
                                <Typography>
                                    Email: {booking.email}
                                </Typography>
                                <Typography>
                                    Created: {formatDate(booking.createdDate)}
                                </Typography>
                                <Typography>
                                    Started: {formatDate(booking.startedDate)}
                                </Typography>
                                <Typography>
                                    Ended: {formatDate(booking.endedDate)}
                                </Typography>
                                <Typography>
                                    Price: {booking.price}
                                </Typography>
                            </Fragment>
                        }
                    />
                </ListItem>
            ))}
            <div ref={ref}></div>
        </List>
    )
}
