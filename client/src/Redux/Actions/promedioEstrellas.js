import {PROMEDIO_ESTRELLAS} from './actiontypes';

 export default function promedioEstrellas(coments){
    
    return (dispatch)=>{
        

        new Promise((resolve,reject)=>{
            const rating = coments.map(coment => coment.stars)
            const people = rating.length
            resolve({
                rating:rating,
                people:people
            })
        }).then((res)=>{
            let sum = 0
            res.rating.forEach(number => sum += number)
            return({sum:sum,people:res.people})
            
        }).then((respuesta)=>{
            let result = Math.round(respuesta.sum/respuesta.people)
            return result

        }).then((res)=>{
            console.log(res)
            dispatch({
                type: PROMEDIO_ESTRELLAS,
                number: res
              })
        })

    }
}


    

