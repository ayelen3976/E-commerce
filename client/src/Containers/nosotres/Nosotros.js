import React from 'react';
import CardNosotros from './CardNosotros';
import styles from './Nosotros.module.css';
import Nav from '../../Components/Nav/Nav'

function Nosotros (){
  
    return(
        <div>
            < Nav/>

        
        <div className={styles.general}>
            <div className={styles.contenedor}>
                <div className={styles.presentacion}>
                    <p className={styles.texto}>"Somos el grupo N°11, integrado por Juan Fernández jubin, Ayelen Fernández y Ayelen villarruel.Estas 4 semanas fue una mezcla de experiencias , desde sentirse frustrado porque no te sale algo, a saltar de felicidad cuando finalmente funciona el código y te muestra en consola lo que debería llegar, inclusive hubo muchas lagrimas y estrés,  empezando  porque éramos 7 personas al comienzo, pero en las dos primeras semanas 4 se bajaron del proyecto, quedándonos solo 3 personas haciendo el ecommerce. Tuvimos muchas dificultades para concluir el proyecto pero gracias a lo que aprendimos y a nuestro TL Marcos Costa pudimos salir adelante y estamos más que orgullosos de lo que pudimos lograr. Quizá no es lo suficiente, ya que faltan algunas cosas,pero estamos seguros que dimos nuestro 100% y estamos muy felices por eso."</p>

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
                            foto = {`https://eslamoda.com/wp-content/uploads/sites/2/2017/08/pose-tumblr-mujer.jpg`}
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

