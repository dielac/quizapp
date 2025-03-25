import { useEffect } from "react"
import QuestionForm from "../components/QuestionForm.jsx"

export default function QuestionPage({quiz, setQuiz, setPage}){

    useEffect(()=>{
        fetch(`https://opentdb.com/api.php?amount=1&category=${quiz.category}&difficulty=${quiz.difficulty}&type=multiple`)
        .then(res => res.json())
        .then(data =>{
            setQuiz({...quiz, questionData: data.results[0]})
        })
        .catch(err => alert("Something went wrong gettig data"))
    },[])

    function handleAnswer(answer){
        setQuiz({...quiz, userAnswer:answer})
        setPage("results")
    }

    return (
        <div className="container">
            {
              quiz.questionData 
              ? <QuestionForm data={quiz.questionData} handleAnswer={handleAnswer}/> 
              : <p>loading</p>
            }
        </div>
    )
}
