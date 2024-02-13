'use client'
import Head from 'next/head';
import Header from '@/components/Header';
import { useState, useEffect} from 'react';
import From from '@/components/Form';

export default function Home() {
  const [prenom, setPrenom] = useState("Dotémin")
  const [val, setVal] = useState(null)

  const [age, setAge] = useState("")
  const [tab, setTab] = useState([
    {
      nom:"Dotemin",
      age:23
    },
    {
      nom:"Assetou",
      age:22
    },
    {
      nom:"Kenza",
      age:8
    },
  ])

  useEffect(()=>{
    const valeur = tab.map((person, index)=>{
      return <li key={index}>{person.nom} à {person.age} ans.</li>
    })
    setVal(valeur)
  }, [])
  // const updateValue = () =>{
  //   setPrenom("Bouet")
  // }

  // const addValue = ()=>{
  //   setTab(prev =>{
  //     return [...prev, 4,5]
  //   })
  // }
  
  return (
    <main>
      <Head>
        <title>Accueil</title>
      </Head>
      <Header/>
      <div>
        <h1>Accueil de {!prenom ? 'Base': prenom}</h1>
        <br/>
        <button onClick={()=>setAge(23)}>Ajouter l'âge</button>
          {prenom && age ? (<p>{prenom} est âgé de {age} ans.</p>):(
            <p>Pas d'informations spécifiques...</p>
          )}
      </div>
      <div>
        <ul>
          {val}
        </ul>
      </div>
      <br/>
      {/* <button onClick={addValue}>Ajouter un entier</button> */}
    </main>
  );
}