import React, { Component } from 'react'
import image01 from '../Pages/Photos/Bottlemix.jpg'
// import { Bottlemix } from "../Components/Pages/Photos/Bottlemix.jpg"
//page coding
import '../Style_Sheets/Home.css'
export default class Home extends Component {
  render() {
    return (
      <>
        <div className='card'>
          <div id="text">
            <h1>A Wide Range of Plastic Containers</h1>
            <p> Ocean Micro Plast is a leading supplier and manufacturer of HDPE and PET Packing Bottles. We are providing a large varriety of Bottles suitable for the storage and transportaion of various liquid products.</p>
          </div>
          <div>
          <img src={image01}  alt="" srcset="" />
          </div>
        </div>
      </>
    )
  }
}

