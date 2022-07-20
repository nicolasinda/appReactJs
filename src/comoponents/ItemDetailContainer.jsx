import React, {useEffect, useState} from "react"; 
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom"
import details from "./utils/detail.json"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const params = useParams();

    const promise = new Promise((resolve) => {
        setTimeout(() => resolve(details), 1000);
      });
    
      useEffect(()=>{
        promise.then((response) => {
            const foundItem = response.filter((item) => item.id == params.id);
            setItem(foundItem[0])

        } )
      }, [])
    return ( 
        <> 
        <ItemDetail item={item} />
        </>
     );
}
 
export default ItemDetailContainer;