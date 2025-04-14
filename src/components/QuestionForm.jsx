import {useState} from "react"

export default function QuestionForm({data, handleAnswer}){

    const [selected, setSelected] = useState("")
    // this combines the rigth and wrong answers in a single array//
    const answers = [...data.incorrect_answers, data.correct_answer].sort(()=>Math.random()-0.5)

    //form submissions 
    function handleSubmit(e){ 
        e.preventDefault()

        if (selected == ""){
          alert("pick an answer")
        }else{
          handleAnswer(selected)
        }
    }


    return ( // code below renders the question and answer options, and updated the selected state with the users answer 
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
