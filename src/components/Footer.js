import QuestionForm from './QuestionForm'
import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {

    var [mailValue, SetMailValue] = useState('Votre.adresse@mail.fr')
    var isInputError = mailValue.includes('@')

    function CheckMailInput() {

        if(isInputError===false) {
            alert('Adresse mail invalide')
        } else {
            console.log('Adresse mail valide')
        }

    }

    return (
        <div className="containerFooter">
            <p>Saisissez votre adresse email :</p>
            <input 
                type="mail" 
                name="email" 
                value={mailValue} 
                onChange={(e) => SetMailValue(e.target.value)}
                onBlur={() => CheckMailInput()}
            />
            <QuestionForm/>
        </div>
    )
}

export default Footer