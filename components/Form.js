import styles from '@/styles/Form.module.css'
import { useState } from 'react'

export default function From(){

    const [formData, setFormData] = useState({})

    const handleChange = (event)=>{
        const {type, name, value} = event.target
        setFormData(prev =>{
            return{
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(formData)
    }
    return(
        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
                <label>Nom : </label>
                <input type="text" 
                    placeholder="Entrez notre nom" 
                    value={formData.nom || ""} 
                    name='nom' 
                    onChange={handleChange}
                />
                <label>Prénom : </label>
                <input type="text" 
                    placeholder="Entrez notre prénom" 
                    value={formData.prenom || ""} 
                    name='prenom' 
                    onChange={handleChange}
                />
                <br/><br/>
                <button type='submit'>Envoyer</button>
            </form>
        </div>
    )
}