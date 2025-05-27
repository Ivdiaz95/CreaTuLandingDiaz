import React from "react";
import Navbar from "./Components/navbar.jsx";
import ItemListContainer from "./Components/itemlistcontainer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a CiudadGamer, la mejor tienda gamer!" />
    </>
  );
}

export default App;
