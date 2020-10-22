import React, { useEffect } from 'react';
import {connect} from 'react-redux';

//Components y states
import ReviewList from './ReviewList';
import {getReviews} from '../../Redux/Actions/reviewActions';

//Material Ui
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '90ch',
        backgroundColor: theme.palette.background.paper,
    }
}));

function ReviewContainer({reviewData ,getReviews}) {
    const classes = useStyles();
    
    useEffect(()=> {
        getReviews()
    },[])

    return (
        <List className={classes.root}>
            <ReviewList />
        </List>
    );
}

const mapStateToProps = state => {
    return {
        reviewData: state.reviewsP,
    }
}

const mapDispatchToProps = {
    getReviews,
}

export default connect(mapStateToProps,mapDispatchToProps)(ReviewContainer);