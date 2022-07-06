//import logo from './logo.svg';
import './App.css';
import ItemCount from './comoponents/ItemCount';
import CardContador from './comoponents/ItemCount';
import ItemListContainer from './comoponents/ItemListContainer';
//import Ejemplo from './comoponents/Ejemplo';
import NavBar from './comoponents/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Mensaje main"/>
    <ItemCount/>
    </>
  );
}

export default App;
