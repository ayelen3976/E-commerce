import React from 'react';
import Divider from '@material-ui/core/Divider';
import Review from './Review';
import  './style.css'
 function ReviewList({reviewData}){
  
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
                Aun no tenemos criticas sobre este producto. ¿Quieres dejar uno?
            </div>
        )
    }
}
export default ReviewList;