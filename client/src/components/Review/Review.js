import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Stars from './stars';

const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'inline',
    },
}));

export default function Review({review}) {
    console.log(review)
    const classes = useStyles();

    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="" />
            </ListItemAvatar>
            <ListItemText
                primary={<Stars stars={review.stars}/>}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {review.userId}
                        </Typography>
                        <Typography>
                        {review.description}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}