import Header from "@/components/Header";
import Exemple from "@/components/Exemple";
import { useEffect, useState } from "react";

export default function About() {
    const [articles, setArticles] = useState([
        {
            title: "Composant 1",
            content: "Contenu du composant 1"
        },
        {
            title: "Composant 2",
            content: "Contenu du composant 2"
        },
        {
            title: "Composant 3",
            content: "Contenu du composant 3"
        },
    ])
    return(
        <main>
            <Header/>
            <h1>About</h1>
            {articles.map((post, index)=>{
                return <Exemple key={index} title={post.title} content={post.content}/>
            })}
            
        </main>
    )
}