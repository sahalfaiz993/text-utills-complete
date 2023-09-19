import React from 'react'
import { NavLink,Link } from 'react-router-dom';
const Navbar = (props) => {
  const sahal = {
    color: "white",
  
    padding: "10px",
    fontFamily: "Arial"
  };
  return (
 <>
      <nav className={ `navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li className="nav-item mx-3" >
        
          <Link to='/'><a className="mr-5 hover:text-gray-900 mx-3"  style={sahal}>TextForm</a></Link>
          <NavLink to='About'><a className="mr-5 hover:text-gray-900 mx-3"  style={{color: "white"}}>{props.home}</a></NavLink>
          <NavLink to='Color'><a className="mr-5 hover:text-gray-900 mx-3"  style={{color: "white"}}>{props.color}</a></NavLink>
        
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input"  onClick={props.sahalmode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> switch checkbox </label>
</div>
    </div>
  </div>
</nav>

 
</>
       
     
  )
}

export default Navbar
