import React,{useState, useEffect}from 'react';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Stars from './stars';
import axios from 'axios';
import { connect} from 'react-redux';

const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'inline',
    },
}));
function Review({review}) {
 
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
                            {review.user.firstName}
                            
                            
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


export default Review;