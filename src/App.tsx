import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {changeNewDataText, changeNewText, MainPropsType} from "./redux/state";


function App(props:MainPropsType) {

    return (
        <div className="wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route exact path="/dialogs" render={()=><Dialogs
                    message={props.state.messagePage}
                    newPostDataText={props.state.messagePage.messageForNewData}
                    addMessage={props.addMessage}
                    changeNewDataTextCB={changeNewDataText}/>}/>

                <Route path="/profile" render={()=><Profile
                    profilePage={props.state.profilePage}
                    newPostText={props.state.profilePage.messageForNewPost}
                    addPost={props.addPost}
                    changeNewTextCallback={changeNewText}/>}/>
            </div>
        </div>);
}


export default App;
