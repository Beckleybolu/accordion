
import React,{useState} from "react";
import Question from "./question";
import data from "./data";
import './index.css'


function App() {

  const [questions,setQuestions]=useState(data);
  return(
    <main className="container">
      <header>
        <h3>Question And Answers About Login</h3>
      </header>
      <section>
        {
          questions.map((question)=>{
            return(
              <Question key={question.id} {...question}/>
            )
           
          })
        }
      </section>
    </main>
  )
}

export default App;
