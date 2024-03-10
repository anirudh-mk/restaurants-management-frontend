import React from 'react'
import styles from './ItemsCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function ItemsCard() {
    return (
        <div className={styles.card_container}>
            <img src="https://images.unsplash.com/photo-1630409346824-4f0e7b080087?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className={styles.card_image} />
            <div className={styles.headding_container}>
                <div className={styles.main_headding}>
                    <h1>Biriyani</h1>
                    <div className={styles.rating}>
                        <FontAwesomeIcon icon={faStar} color='#FFD600' size='sm' />
                        <p>4.2</p>
                    </div>
                </div>
                <div className={styles.sub_headding}>
                    <p>120/-</p>
                </div>
            </div>
        </div>
    )
}

export default ItemsCard