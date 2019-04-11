import React, { Component } from 'react';
import Navbar from "./Navbar.jsx";
import { Route, withRouter } from 'react-router-dom';
import Menu from './Menu.jsx';



class App extends Component{
    render() {
        return (
            <div>
                <Navbar/>
                <Route exact path="/" component={Menu}/>
            </div>
        );
        
    }
}

export default withRouter(App);