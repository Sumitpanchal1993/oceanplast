import React, { Component } from 'react'

//css property

const content1 = {
  color: 'white',
  margin: '10px'

}
const content2 = {
  float: 'right',
  color: 'white',
  margin: '10px'
}
export default class Footer extends Component {
  render() {
    return (
      <>
        <footer>
            <div style={content1}>
              <h2>Manufacturing Location</h2>
              <address>Plot No. 45-46, Deep Palace, Nipania Road <br />Near Dewas Naka, Indore  <br /> Madhya Pradesh Pin:455001</address>
            </div>
            <div style={content2}>
              <h2>Contact Details</h2>
              Jitendra Singh: 9806618800 <br />
              Dilip R Singh: 9977621122
            </div>          
        </footer>
      </>
    )
  }
}
