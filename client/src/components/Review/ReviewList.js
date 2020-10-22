import React from 'react';

import Divider from '@material-ui/core/Divider';
import Review from './Review';

export default function ReviewList(){
    return(
        <div>
            <Review />
            <Divider variant="inset" component="li" />
            <Review />
            <Divider variant="inset" component="li" />
            <Review />
        </div>
    )
}