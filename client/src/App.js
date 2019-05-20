import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppNavbar from "./components/AppNavbar"
import AddItem from './components/AddItem'
import EditItem from './components/EditItem'
import MonthlyItems from './components/MonthlyItems';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <div style={{ width: "80%", margin: "10px auto" }}>
        <AddItem />
        <MonthlyItems />
      </div>

      <Router>
        <Switch>
          <Route path="/detail/:id" component={EditItem}/>
          <Route path="/monthly" component={MonthlyItems}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
