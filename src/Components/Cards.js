import axios from "axios";
import React, { useState, useEffect} from "react";

const Cards = () => {
  const URL = "https://quizqpp-backend.vercel.app";
  const [index, setIndex] = useState(0);
  const [choose, setChoose] = useState('');
  const [count, setCount] = useState(0);
  
  const [data, setData] = useState([
    {
      question:"",
      option1: "",
      option2:"",
      option3:"",
      answer:""
    }
  ]);
  
  const getQuest = async() => {
    await axios.get(`${URL}/getQuestions`).then(res => setData(res.data));
  }
  useEffect(() => {
       getQuest()
  }, []);

  const handleChoose = (option) => {
    setChoose(option)
  }

  const handleRetake = () => {
    window.location.reload();
  }

  const handleNext = (ans) => {
    if(choose==ans){
      setCount(count+1)
    }
    setIndex(index+1)
  }
  
  return (
    <div className="container mt-3">
      
      {
        index==data.length ? 
        <div className="bg-warning text-dark py-4 border-radius-30">
          <h1 className="my-5">Congratulations.....</h1>
          <h1>Your test has been completed and you scored {count}/{data.length}</h1>
          <button className="btn btn-success mt-5" onClick={handleRetake}>Try again</button>
        </div> : 
        <>
        <h1>WELCOME TO THE QUIZ</h1>
        <div className="card bg-info mt-3">
            <div className="card-body row-4-md d-flex flex-column justify-content-start align-items-start">
              <h5 className="card-title">{[index+1]}. {data[index].question}</h5>
              
                <div className="form-check mt-4 form-check-inline">
                <p className="card-text">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option"
                    id="option1"
                    value="option1"
                    onClick = {()=>handleChoose(data[index].option1)}
                    
                  />

                  {data[index].option1}
                  </p>
                </div>
             
              
                <div className="form-check mt-4 form-check-inline">
                <p className="card-text">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option"
                    id="option2"
                    value="option2"
                    onClick = {()=>handleChoose(data[index].option2)}
                  />

                  {data[index].option2}
                  </p>
                </div>
              
              
                <div className="form-check mt-4 form-check-inline">
                <p className="card-text">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option"
                    id="option3"
                    value="option3"
                    onClick = {()=>handleChoose(data[index].option3)}
                  />

                  {data[index].option3}
                  </p>
                </div>
              
              <button className="btn btn-dark mt-4" onClick={()=>handleNext(data[index].answer)}>Next</button>
            </div>
          </div>
          </>
      }
      
    </div>
  );
};

export default Cards;
