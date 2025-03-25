import { useState } from 'react'

export default function HomePage({quiz, setQuiz, setPage}){

  const [error, setError] = useState("")

  function handleSubmit(e){
      e.preventDefault()

      if (quiz.name == "" || quiz.category == "" || quiz.difficulty == "") {
          setError("Oops!! you forgot something")
      } else {
          setError("")
          setPage("question")
      }
  }

  return (
      <div className="container">

          <h2>Welcome to my quiz!!</h2>

          <form onSubmit={handleSubmit}>

              <input 
                  type="text"
                  placeholder="Enter your name"
                  onChange={(e)=>setQuiz({...quiz, name: e.target.value})}
              />

              <br/> <br/>

              <select onChange={(e)=>setQuiz({...quiz, category: e.target.value})}>
                  <option value="">Pick category</option>
                  <option value="9">General Knowledge</option>
                  <option value="11">Movies</option>
                  <option value="12">Music</option>
                  <option value="15">Video Games</option>
              </select>

              <br/><br/>

              <select onChange={(e)=>setQuiz({...quiz, difficulty: e.target.value})}>
                  <option value="">Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
              </select>

              <br/><br/>

              <button>Submit</button>

              {error && <p className="error">{error}</p>}

          </form>
      </div>
  )
}
