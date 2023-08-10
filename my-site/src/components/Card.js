import style from './Card.module.css'

function Card() {
    return (
        <div className={styles.cards}>
            <div className={styles.cardCategory} style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/breakfast.jpg)",}}>
            Tratamento 1
            </div>
    
            <div className={styles.cardCategory} style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/lunch.jpg)",}}>
            Tratamento 2
            </div>
    
            <div className={styles.cardCategory} style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/dinner.jpg)",}}>
            Tratamento 3
            </div>
        </div>
    )
}

export default Card
