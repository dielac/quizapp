export default function ResultsPage({quiz, setPage}){
// answer check below
  let correct = quiz.userAnswer == quiz.questionData.correct_answer

  return(
      <div className="container">
          {
            correct
            ? <h2>Good job {quiz.name} you got it right</h2>
            : <h2>Wrong answer {quiz.name} <br/>Correct Answer was {quiz.questionData.correct_answer}</h2>
          }
          
          <button onClick={()=>setPage("home")}>Try Again</button>
      </div>
  )
}
// codes above show if the answer was right or wrong, shows the correct answer, and has a restart button
