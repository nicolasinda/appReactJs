
import { useState } from "react";
import { Link } from 'react-router-dom';
const ItemDetail = ({ item }) => {
  const { title, price, stock, pictureUrl, id } = item;
  return (
    <>
     <div className="card" >
        <img src={pictureUrl} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{price}</p>

            <Link to={`item/${id}`}> 
            <button className="btn btn-secondary mb-2" type="button">Detalles</button>
            </Link>
            <p className="card-text">{stock} Disponible</p>

            <button className="btn btn-primary mb-2" type="button">Añadir al carrito</button>
          
        </div> 
       </div>
    </>
  );
};

export default ItemDetail;
