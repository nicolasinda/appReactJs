import { useState } from "react";

const ItemCount = () => {
    const stock=5;
    let [count, setCount] = useState(1);
    const registrarClick = (operacion) => {
        if (operacion === "-" && count > 1) {
          setCount(count - 1);
        } else if (operacion === "+" && count < stock  ) {
          setCount(count + 1);
        }
    };
    return ( 
        <>
            <div className="card" >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Producto</h5>
                    <p className="card-text">$2000</p>
                    <button className="btn btn-primary mb-2" type="button">Añadir al carrito</button>
                    <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" onClick={() => registrarClick("-")}>-</button>
                    <input type="text" className="form-control text-center" placeholder={count} aria-label="Example text with two button addons"/>
                    <button className="btn btn-outline-secondary" type="button" onClick={() => registrarClick("+")}>+</button>
                    </div>
                </div> 
            </div>
        </>
     );
};

export default ItemCount;