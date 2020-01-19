import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ShoppingList from "./components/artists/ShoppingList"
// import ItemModal from './components/ItemModal';

import { Provider } from 'react-redux';
import store from './store';
import Landing from "./components/home/Landing";
import AppNavbar from "../src/components/AppNavbar";
import About from "../src/components/about/About";
import Directions from "../src/components/directions/Directions";
import Shows from "../src/components/shows/Shows";

import "./App.css";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <div className="App">
          <AppNavbar/>
           
        </div>
        </Router>
      </Provider>
    );
  }
}


export default App;
