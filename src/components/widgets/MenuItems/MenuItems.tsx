import styles from './MenuItems.module.css'

function MenuItems({ background, name }: { background: string; name: string }) {
    return (
        <div className={styles.container}>
            <img src={background} alt="" />
            <p>{name}</p>
        </div>
    )
}

export default MenuItems