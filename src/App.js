import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './Pages/IndexPage';
import ProductPage from './Pages/ProductsPage';
import ContactPage from './Pages/ContactPage';

import './App.css';




function App() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/products" component={ProductPage} />
                <Route exact path="/contact" component={ContactPage} />
            </div>
        </Router>     
    )
}

export default App
