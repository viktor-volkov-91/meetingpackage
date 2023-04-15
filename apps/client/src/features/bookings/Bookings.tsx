import {BookingDto} from '@meetingpackage/api-client';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import {Fragment} from 'react';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

type BookingsProps = {
    bookings: BookingDto[];
}

const formatDate = (date: string) => new Date(Date.parse(date)).toISOString().slice(0, 10)

export const Bookings = ({bookings}: BookingsProps) => {
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
        </List>
    )
}
