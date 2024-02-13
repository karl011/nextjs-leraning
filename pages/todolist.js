import Header from "@/components/Header"
import styles from '../styles/TodoList.module.css'
import { useState } from "react"

export default function TodoList(){
    const [tache, setTache] = useState("")
    const [data, SetData] = useState([])

    const handleChange = (event)=>{
        setTache(event.target.value)
    }

    const addValue = ()=>{
        SetData(prev =>{
            return [...prev, {id: prev.length+1, task:tache}]
        })
        setTache("")
    }

    const deleteTask = (id)=>{
        const newData = data.filter((item)=> item.id != id)
        SetData(newData)
    }

    return(
        <main>
            <Header/>
            <div>
                <h1>Ma liste de tâches journalière</h1>
                <div className={styles.todoList}>
                    <label htmlFor="task">Ajouter une tâche</label>
                    <input type="text" placeholder="Entrez une tâche..." id="task" value={tache} onChange={handleChange}/>
                    {tache &&(
                        <button onClick={addValue}>Ajouter</button>
                    )}

                    <h3>Liste des tâches</h3>
                    <ul>
                        {data.map((item)=>{
                            return <li key={item.id}>{item.task}<button onClick={()=>deleteTask(item.id)}>Supprimer</button></li>
                        })}
                    </ul>
                </div>
            </div>

        </main>
    )
}