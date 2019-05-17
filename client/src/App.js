import React from 'react';
import './App.css';
import AppNavbar from "./components/AppNavbar"
import PurchasedItems from "./components/PurchasedItems"

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <PurchasedItems/>
    </div>
  );
}

export default App;
