import Header from "@/components/Header"
import styles from "@/styles/Slug.module.css"
export default function Single({titre, content, image}){
    return(
        <>
            <Header/>
            <div className={styles.article}>
                <h1>{titre}</h1>
                <p>{content}</p>
                <img src={image} alt="Ordinateur" />
            </div>
        </>
    )
}

export async function getStaticProps({params}){
    const {slug} = params
    const res = await fetch(`http://localhost:3000/api/blog/post?slug=${slug}`)
    const post = await res.json()

    return {
        props:{
            titre: post[0].titre,
            content: post[0].content,
            image: post[0].image
        }
    }
}

export async function getStaticPaths(){
    const res = await fetch('http://localhost:3000/api/blog/posts')
    const posts = await res.json()

    const paths = posts.map(post =>({
        params: {slug: post.slug},
    }))
    return {paths, fallback: false}
}