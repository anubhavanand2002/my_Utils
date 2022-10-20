import React from 'react';
import './Navbar.css';
function Navbar(props){
    return(
<nav className={`navbar navbar-expand-lg navbar-${props.mode}`}
  style={props.mode==='light'?{backgroundColor:"#54BAB9"}:{backgroundColor:"#FA2FB5"}}
  >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">About</a>
        </li>
      </ul>
    </div>
    
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
   </div>

  </div>
</nav>

    );
};
export default Navbar;