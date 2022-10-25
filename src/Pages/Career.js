import React, { Component } from 'react'
export default class Career extends Component {
  render() {
    return (
      <>
        <div className="card form">
          <h1 className='formheading'>Welcome to Ocean Micro Plast Career</h1>
          <form action="Submit">
            <div>
              <label htmlFor="name">Enter Your Name: </label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="email">Enter Your Mobile No: </label>
              <input type="number" />
            </div>
            <div>
            <div>
              <label htmlFor="gender">Select Your Gender</label>
              <input type="radio" name="gender" id="gender" /><span>Male</span>
              <input type="radio" name="gender" id="gender" /><span>Female</span>
              <input type="radio" name="gender" id="gender" /><span>Other</span>
            </div>
                <label htmlFor="email">Enter Your Email Address:</label>
                <input type="email" />
            </div>
            <div>
              <label htmlFor="address">Enter Your Address: </label><br/>
              <textarea name="address" id="address" cols="30" rows="10" placeholder='Enter address'></textarea>
            </div>
            <div>
              <label htmlFor="address">Write About Yourself : </label><br/>
              <textarea name="address" id="address" cols="30" rows="10" placeholder='Min 50 words ~ Max 150 Words'></textarea>
            </div>
            <button type="submit">Submit Form</button>
            <button type="reset">Reset Form</button>
        </form>
        </div>
      </>
    )
  }
}
