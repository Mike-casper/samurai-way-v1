import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {MainPropsType} from "./redux/state";





function App(props:MainPropsType) {

    return (
        <BrowserRouter>
        <div className="wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route exact path="/dialogs" render={()=><Dialogs
                    dialogs={props.state.messagePage.dialogs}
                    messagesData={props.state.messagePage.messagesData}/>}/>
                <Route path="/profile" render={()=><Profile
                    postData={props.state.profilePage.postData}/>}/>
            </div>
        </div>
        </BrowserRouter>);
}


export default App;
