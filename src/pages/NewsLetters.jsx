import axios from 'axios'
import React from 'react'
import { Form, redirect, useNavigation } from 'react-router-dom'

const newsLetterURL = "https://jsonplaceholder.typicode.com/posts"

export const action = async ({request})  => {  
  const formData = await request.formData()
  // console.log(formData);
  
  const data = Object.fromEntries(formData)
  try {
    const response = await axios.post(newsLetterURL, data)
    // console.log(data);
    return redirect("/newsletters")
  } catch (error) {
    // console.log(error);
    return error
  }

  // console.log(request);
  return "Something"
}

const NewsLetters = () => {

  const navigation = useNavigation()
  const isSubmit = navigation.state === "submitting"

  return (
    <Form className='form' method='post'>
        <h4 style={{textAlign:'center', marginBottom:'30px'}}>Our Newsletter</h4>
        <div className="form-row">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
                type="text" 
                id='name' 
                name='name'
                className='form-input'
                />
        </div>
        <div className="form-row">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input 
                type="text" 
                id='lastName' 
                name='lastName'
                className='form-input'
                />
        </div>
        <div className="form-row">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
                type="email" 
                id='email' 
                name='email'
                className='form-input'
                />
        </div>
        <button className="btn btn-block" type='submit' style={{marginTop:'10px'}}>{
          isSubmit ? "submitting..." : "Submit"
          }</button>
    </Form>
  )
}

export default NewsLetters