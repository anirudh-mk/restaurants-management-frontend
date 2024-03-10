import styles from './ItemImageCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function ItemImageCard() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <p>Burger</p>
                <div className={styles.rating_container}>
                    <FontAwesomeIcon icon={faStar} size='lg' color='yellow' />
                    <p>4.2</p>
                </div>
            </div>
        </div>

    )
}

export default ItemImageCard