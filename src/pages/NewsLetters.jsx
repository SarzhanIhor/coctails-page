import React from 'react'

const NewsLetters = () => {
  return (
    <form className='form'>
        <h4 style={{textAlign:'center', marginBottom:'30px'}}>Our Newsletter</h4>
        <div className="form-row">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
                type="text" 
                id='name' 
                name='name'
                className='form-input'
                defaultValue='Alex'/>
        </div>
        <div className="form-row">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input 
                type="text" 
                id='lastName' 
                name='lastName'
                className='form-input'
                defaultValue='Dir'/>
        </div>
        <div className="form-row">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
                type="email" 
                id='email' 
                name='email'
                className='form-input'
                defaultValue='test@test.com'/>
        </div>
        <button className="btn btn-block" type='submit' style={{marginTop:'10px'}}>Submit</button>
    </form>
  )
}

export default NewsLetters