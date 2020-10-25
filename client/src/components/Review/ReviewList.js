import React from 'react';

import Divider from '@material-ui/core/Divider';
import Review from './Review';
import  './style.css'
export default function ReviewList({reviewData}){
    console.log(reviewData)
    if(reviewData){
        return(
            <div className="divOne">
                {
                   reviewData.map(review =>{
                       return(
                           <div>
                               <Divider variant="inset"/>
                               <Review key={review.id} review={review}/>
                           </div>
                       )
                   })
                }
            </div>
        )
    }else {
        return(
            <div>
                Error 404
            </div>
        )
    }
}