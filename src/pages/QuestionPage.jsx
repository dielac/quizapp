import { useEffect } from "react"
import QuestionForm from "../components/QuestionForm.jsx"

export default function QuestionPage({quiz, setQuiz, setPage}) {

    // fetching the questions from the API
    useEffect(()=>{
        fetch(`https://opentdb.com/api.php?amount=1&category=${quiz.category}&difficulty=${quiz.difficulty}&type=multiple`)
        .then(res => res.json())
        .then(data =>{
            setQuiz({...quiz, questionData: data.results[0]})
        })
        .catch(err => alert("Something went wrong getting data"))
    },[])

    function handleAnswer(answer){
        setQuiz({...quiz, userAnswer:answer})
        setPage("results")
    }

    return ( //question data is being fetched and then renders the question form with the data
        <div className="container">
            {
              quiz.questionData 
              ? <QuestionForm data={quiz.questionData} handleAnswer={handleAnswer}/> 
              : <p>loading</p>
            }
        </div>
    )
}
