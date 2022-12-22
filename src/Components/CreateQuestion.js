import React, {useState} from "react";
import {useFormik} from 'formik';
import axios from 'axios';

const CreateQuestion = () => {
    const URL = "https://quizqpp-backend.vercel.app"
    const formik = useFormik({
        initialValues:{
            question:"",
            option1:"",
            option2:"",
            option3:"",
            answer:""
        },
        onSubmit: async(values) => {
            await axios.post(`${URL}/createQuestion`, values).then((res)=>{
                console.log(res.data)
            })
            values.question=""
            values.option1=""
            values.option2=""
            values.option3=""
            values.answer=""
            alert('Data Created Successfully')
        }
    }
    
    )
  return (
    <div>
        <h1 className="mt-3">Please Create the QUESTION</h1>
      <form onSubmit={formik.handleSubmit} className="col-md-4 mx-auto mt-5">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
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
            className="form-control"
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
            className="form-control"
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
            className="form-control"
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
            className="form-control"
            id="answer"
            name="answer"
            value={formik.values.answer}
            onChange={formik.handleChange}
            placeholder="Enter your answer here..."
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        {formik.onSubmit && <h4 className="mt-3 text-success">Data Created Successfully</h4>}
      </form>
    </div>
  );
};

export default CreateQuestion;
