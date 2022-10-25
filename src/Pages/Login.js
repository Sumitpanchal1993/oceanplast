import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <>
                <div className='card'>
                <div><h1>Welcome to Ocean Plast</h1></div>
                    <form action="/">
                        <div>
                            <label htmlFor="firstname">First Name:</label>
                            <input type="text" name="firstname" id="firstname" />
                        </div>
                        <div>
                            <label htmlFor="lastname">Last Name:</label>
                            <input type="text" name="lastname" id="lastname" />
                        </div>
                        <div>
                            <label htmlFor="mobile">Mobile Number:</label>
                            <input type="number" name="mobile" id="mobile" />
                        </div>
                        <div>
                            <label htmlFor="email">Email ID:</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div>
                            <label htmlFor="dateofbirth">Date of Birth:</label>
                            <input type="date" name="dateofbirth" id="dateofbirth" />
                        </div>
                        <div>
                            <label htmlFor="address">Address:</label>
                            <textarea name="address" id="" cols="30" rows="3"></textarea>
                        </div>
                        <div>
                        <button type="reset">Reset Form</button>
                        <button type="submit">Register Now</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}
