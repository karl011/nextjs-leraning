import styles from '../styles/Header.module.css'
import Link from "next/link";

export default function Header(){
    return(
        <main>
            <ul className={styles.menu}>
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/todolist">TodoList</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </main>
    )
}