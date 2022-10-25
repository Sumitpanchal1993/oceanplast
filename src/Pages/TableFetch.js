import React, { Component } from 'react'
import '../Style_Sheets/TableFetchcss.css'

export default class TableFetch extends Component {
  render() {
    return (
      <>
      <div className='card'>
      <h1>I am gone call a table here </h1>
      <div>
       <tr>
        <th>id</th>
        <th>email</th>
        <th>first_name</th>
        <th>last_name</th>
        <th>avatar</th>
       </tr>
      </div>
      </div>


      </>
    )
  }
}
