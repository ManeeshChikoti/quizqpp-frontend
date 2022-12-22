import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";

const EditQuestion = () => {
  const URL = "https://quizqpp-backend.vercel.app"
  const [question, setQuestion] = useState([]);
  const [counter, setCounter] = useState(0)

  const handleSelect = async (id) => {
    await axios.get(`${URL}/getQuestion/${id}`).then((res)=>formik.setValues(res.data))
  }

  const handleDelete = async(id) => {
    await axios.delete(`${URL}/deleteQuestion/${id}`).then((res)=>{
      console.log(res.data)
      setCounter(counter+1)
    })
  }

  useEffect(() => {
     axios.get(`${URL}/getQuestions`).then((res) => {
      setQuestion(res.data);
    });
  }, [counter]);

  const formik = useFormik({
    initialValues: {
      question: "",
      option1: "",
      option2: "",
      option3: "",  
      answer: ""
    },
    onSubmit: async (values)=> {
        await axios.put(`${URL}/updateQuestion/${values._id}`, values).then((res)=>{
          console.log(res.data)
          alert('Data Updated Successfully')
        })
      }
    }
  );
  return (
    <div className="container ">
      <h1 className="mt-4">Please Select the Question that you want to EDIT</h1>
      <div className="row mx-auto d-flex flex-row">
      <div className="col mt-5">
          {question.map((item, index) => {
            return (
              <ul className="list-group " key={index}>
                <li className="list-group-item mb-1 border-dark d-flex flex-row justify-content-end align-items-center">
                  {item.question}           
                    <button className="btn btn-success mx-2 " onClick={()=>handleSelect(item._id)}>Edit</button>
                    <button className="btn btn-danger ml-1 " onClick={()=>handleDelete(item._id)}>Delete</button>                                
                </li>
              </ul>  
            );
          })}
        </div>
        <div className="col">
          <form
            onSubmit={formik.handleSubmit}
            className="mx-auto mt-5 col-4-lg"
          >
            <div className="mb-3">
              <input
                type="text"
                className="form-control border-dark"
                id="question"
                name="question"
                value={formik.values.question}
                onChange={formik.handleChange}
                placeholder="Enter your question here..."
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control border-dark"
                id="option1"
                name="option1"
                value={formik.values.option1}
                onChange={formik.handleChange}
                placeholder="Enter your option1 here..."
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control border-dark"
                id="option2"
                name="option2"
                value={formik.values.option2}
                onChange={formik.handleChange}
                placeholder="Enter your option2 here..."
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control border-dark"
                id="option3"
                name="option3"
                value={formik.values.option3}
                onChange={formik.handleChange}
                placeholder="Enter your option3 here..."
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control border-dark"
                id="answer"
                name="answer"
                value={formik.values.answer}
                onChange={formik.handleChange}
                placeholder="Enter your answer here..."
              />
            </div>
            <button type="submit" className="btn btn-success" >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditQuestion;
