import React from 'react';
import CardNosotros from './CardNosotros';
import styles from './Nosotros.module.css';
import Nav from '../../Components/Nav/Nav'

function Nosotros (){
    const informacion =[{
        name:'Aye One',
        foto:'https://eslamoda.com/wp-content/uploads/sites/2/2017/08/pose-tumblr-mujer.jpg',
        description: 'se la pasó llorando el 80% del Ecommerce, el otro 20% entró en depresión ',
        frase: 'FUNCIONA PERROO'
    },{

    }]


    return(
        <div>
            < Nav/>

        
        <div className={styles.general}>
            <div className={styles.contenedor}>
                <div className={styles.presentacion}>
                    <p className={styles.texto}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                </div>
                <div className={styles.contenedorCard}>
                    <div className={styles.card}>
                        <CardNosotros
                            name={'Aye One'} 
                            description={'Se la pasó llorando el 80% del Ecommerce, el otro 20% entró en depresión'}
                            foto = {'https://eslamoda.com/wp-content/uploads/sites/2/2017/08/pose-tumblr-mujer.jpg'}
                            frase={ 'FUNCIONA PERROO' }
                        />

                    </div>
                    <div className={styles.card}>
                        <CardNosotros
                            name={'Juani'} 
                            description={'Una persona alegre y optimistra.La última semana quizo quemar su PC'}
                            foto = {'https://eslamoda.com/wp-content/uploads/sites/2/2017/08/pose-tumblr-mujer.jpg'}
                            frase={ 'Pido disculpas... Oído mi chef...' }
                        />

                    </div>
                       
                    <div className={styles.card}>
                        <CardNosotros
                            name={'Aye Two'} 
                            description={'Mejor conocida como la esquivadora de balas.Una persona de pocas palabras'}
                            foto = {'https://eslamoda.com/wp-content/uploads/sites/2/2017/08/pose-tumblr-mujer.jpg'}
                            frase={ '...' }
                        />

                    </div>
                       
                       
               

                </div>
                <div>

                </div>
            </div>
        </div>
        </div>
    )
}
export default Nosotros;

