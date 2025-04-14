import { useState } from 'react'
import './App.css'

import HomePage from './pages/HomePage.jsx'
import QuestionPage from './pages/QuestionPage.jsx'
import ResultsPage from './pages/ResultsPage.jsx'

function App() {
  
  const [quiz, setQuiz] = useState({
    name: '',
    category: '',
    difficulty: '',
    questionData: null,
    userAnswer: ''
  })
//the code above stores all important data for round 1 


  const [page, setPage] = useState("home")

// code above tracks which part of quiz app is being displayed 
// code below shows the header / title of the quiz 
  return (
    <div className="app-container">

      <header className="header">
        Girly Quiz Application 
      </header>
      
      {
        page == "home" && 
          <HomePage quiz={quiz} setQuiz={setQuiz} setPage={setPage} />
      }

      {
        page == "question" && 
          <QuestionPage quiz={quiz} setQuiz={setQuiz} setPage={setPage}/>
      }

      {
        page == "results" && 
          <ResultsPage quiz={quiz} setPage={setPage}/>
      }

    </div>
  )
}

export default App
