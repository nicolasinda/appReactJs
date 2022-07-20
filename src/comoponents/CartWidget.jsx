import React from "react";
import { Link } from 'react-router-dom';
const contador=0;
const CartWidget=()=>{
    return(
        <>
      <i className="bi bi-cart3">{contador}</i>
        </>
    )

};

export default CartWidget;