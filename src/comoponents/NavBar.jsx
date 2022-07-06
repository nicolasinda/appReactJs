import React from "react";
import CartWidget from "./CartWidget";
const NavBar=()=>{
return(
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="https://www.facebook.com/">Lucero</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://www.facebook.com/">Productos</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="https://www.facebook.com/" >{<CartWidget/>}</a>
        
        </li>
        
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="..." aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>

)
};

export default NavBar;