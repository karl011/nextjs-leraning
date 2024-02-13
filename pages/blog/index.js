import Header from "@/components/Header"
import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "@/styles/Slug.module.css"

export default function Blog(){
    const [articles, setArticles] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(()=>{
        const getArticles = async ()=>{
            const res = await fetch("/api/blog/posts")
            const posts = await res.json()
            setArticles(posts)
            setLoad(true)
        }
        getArticles()
    }, [])
    return(
        <>
            <Header/>
            <div className={styles.contenuArticle}>
                <h1>Blog</h1>
                <ul>
                    {articles.map((post, index) =>{
                        return <li key={index}><Link href={`/blog/${post.slug}`}>{post.titre}</Link></li>
                    })}
                </ul>
            </div>
        </>
    )
}

