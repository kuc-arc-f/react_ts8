import React from 'react'
import { Link } from 'react-router-dom'

//
class Navbar extends React.Component {
  render(){
    return(
      <div>
        <div className="container">
          <Link to="/">[ Home ] </Link>
          <Link to="/tasks" className="ml-2">[ Task ] </Link>
          <Link to="/about" className="ml-2">[ About ] </Link>
          <Link to="/login" className="ml-2">[ Login ] </Link>
        </div>
        <hr className="mb-0"/>
      </div>
    )
  }
}

export default Navbar;
