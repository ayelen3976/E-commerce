import React from 'react';

import Divider from '@material-ui/core/Divider';
import Review from './Review';

export default function ReviewList({reviewData}){
    console.log(reviewData)
    if(reviewData){
        return(
            <div>
                {
                   reviewData.map(review =>{
                       return(
                           <div>
                               <Divider variant="inset" component="li" />
                               <Review key={review.id} review={review}/>
                               <Divider variant="inset" component="li" />
                           </div>
                       )
                   })
                }
            </div>
        )
    }else {
        return(
            <div>
                Hola
            </div>
        )
    }
}