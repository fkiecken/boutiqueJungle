import { useState } from "react"

function QuestionForm() {

    const [inputValue, setInputValue] = useState('Posez votre question ici')
    const isInputError = inputValue.includes('f')

    return(
       <div><br/><br/>
           <textarea 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
           /><br/>
           <button onClick={() => alert(inputValue)}>Alertez moi</button>
           {isInputError && (
               <div>F INTERDIIIT</div>
           )

           }
       </div>
    )
}

export default QuestionForm