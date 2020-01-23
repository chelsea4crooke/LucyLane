import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import ShoppingList from "./components/artists/ShoppingList"
// import ItemModal from './components/ItemModal';

import { Provider } from 'react-redux';
import store from './store';
import Landing from "./components/home/Landing";
import { NavBar } from "../src/components/AppNavbar";
import About from "../src/components/about/About";
import Directions from "../src/components/directions/Directions";
import Shows from "../src/components/shows/Shows";
import Form from "../src/components/form/Form"
import "./app.css";
import Footer from './components/footer';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                <div className="App">
                    <NavBar/>
                        <div className="container-fluid">
                            <Switch>
                                <Route exact path="/" component={Landing}/>
                                <Route exact path="/about" component={About}/>
                                <Route exact path="/shows" component={Shows}/>
                                <Route exact path="/directions" component={Directions}/>
                                <Route exact path="/form" component={Form}/>
                                <Route exact path="/artists" component={ShoppingList}/>
                            </Switch>
                        </div>
                    <Footer />
                </div>
                </Router>
            </Provider>
        );
    }
}

export default App;