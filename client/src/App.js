import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppNavbar from "./components/AppNavbar"
import PurchasedItems from "./components/PurchasedItems"
import AddItem from './components/AddItem'
import EditItems from './components/EditItem'

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <AddItem/>
      <PurchasedItems/>

      <Router>
        <Switch>
          <Route path="detail/:id" component={EditItems}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
