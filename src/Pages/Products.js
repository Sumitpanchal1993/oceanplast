import React, { Component } from 'react'
import image1 from './Photos/cleaner.jpg'
import image2 from './Photos/container.jpg'
import image3 from './Photos/handwash.jpg'
import image4 from './Photos/medicine.jpg'
import image5 from './Photos/simple_bottel.jpg'

export default class Products extends Component {
  render() {
    return (
      <>
      <div className='card'>
        <h1>Our Products</h1>
        <div className='preview'>
          <div>
            <div id="text">
            </div>
            <div>
              <p> These bottles are suitable for the heavy chemical such as acid and other toilet cleaners</p>
            </div>
          </div>
          <div>
            <img src={image1} alt=""/>
          </div>
        </div>
        <div className='preview'>
          <div>
            <div id="text">
            </div>
            <div>
              <p> Ocean Micro Plast is a leading supplier and manufacturer of HDPE and PET Packing Bottles</p>
            </div>
          </div>
          <div>
            <img src={image2} alt=""/>
          </div>
        </div>
        <div className='preview'>
          <div>
            <div id="text">
            </div>
            <div>
              <p> Ocean Micro Plast is a leading supplier and manufacturer of HDPE and PET Packing Bottles</p>
            </div>
          </div>
          <div>
            <img src={image3} alt=""/>
          </div>
        </div>
        <div className='preview'>
          <div>
            <div id="text">
            </div>
            <div>
              <p> Ocean Micro Plast is a leading supplier and manufacturer of HDPE and PET Packing Bottles</p>
            </div>
          </div>
          <div>
            <img src={image4} alt=""/>
          </div>
        </div>
        <div className='preview'>
          <div>
            <div id="text">
            </div>
            <div>
              <p> Ocean Micro Plast is a leading supplier and manufacturer of HDPE and PET Packing Bottles</p>
            </div>
          </div>
          <div>
            <img src={image5} alt=""/>
          </div>
        </div>
        </div>
      </>
    )
  }
}
