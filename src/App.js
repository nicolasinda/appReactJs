import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ItemListContainer from './comoponents/ItemListContainer';
import NavBar from './comoponents/NavBar';
import ItemDetailContainer from './comoponents/ItemDetailContainer';
import CartProvider from "./contexts/CartContext";
import Cart from "./comoponents/Cart";

function App() {
  return (
    <>
      <CartProvider>
    <BrowserRouter>
    <NavBar/>
    
    <Routes>
      <Route index element={<ItemListContainer/>}/>
      <Route path="item/:id" element={<ItemDetailContainer/>}/>
      <Route
            path="*"
            element={
              <div style={{ backgroundColor: "red" }}> ERROR 404 NOT FOUND</div>
            }
          />
           <Route path="/cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>

      </CartProvider>
    </>
  );
}

export default App;
