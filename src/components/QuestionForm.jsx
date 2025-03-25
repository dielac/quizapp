import {useState} from "react"

export default function QuestionForm({data, handleAnswer}){

    const [selected, setSelected] = useState("")

    const answers = [...data.incorrect_answers, data.correct_answer].sort(()=>Math.random()-0.5)


    function handleSubmit(e){
        e.preventDefault()

        if (selected == ""){
          alert("pick an answer")
        }else{
          handleAnswer(selected)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <h3 dangerouslySetInnerHTML={{__html:data.question}}></h3>
            {


                answers.map((ans,i)=>(
                    <div key={i}>
                        <input type="radio" name="answer" onChange={()=>setSelected(ans)}/>
                        <label dangerouslySetInnerHTML={{__html:ans}}></label>
                    </div>
                ))
                
            }

            <button>Answer</button>
        </form>
    )
}
