import styles from '@/styles/Exemple.module.css'

export default function Exemple({title, content}){
    return(
        <div className={styles.compo}>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}