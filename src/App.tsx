import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route component={Dialogs}/>
                <Route component={Profile}/>

            </div>
        </div>);
}


export default App;
