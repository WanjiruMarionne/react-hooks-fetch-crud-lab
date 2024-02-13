import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";
function QuestionList() {

  // const [selectedCategory, setSelectedCategory] = useState([])
  const [question, setQuestions] = useState([]); 
 useEffect(() =>{
  fetch('  http://localhost:4000/questions')
  .then((r)=> r.json())
  .then((question)=> setQuestions(question))
 },[]) 

 function handleDeletedQuestion(deletedQuestion){
  console.log("done", deletedQuestion);
  const updateQuestions = question && question.filter((q) =>  
  q.id !== deletedQuestion);
  setQuestions(updateQuestions);
 }


  return (
    <section>
      <h1>
        Quiz Questions
        {question &&
          question.map((question) => (
            <QuestionItem
              key={question.id}
              question={question}
              onDeleteItem={handleDeletedQuestion}
            />
          ))}
      </h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}

export default QuestionList;