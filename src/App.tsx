import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {MainPropsType, store, StoreType} from "./redux/state";

type PropsType = {
    store:StoreType
}

function App(props:PropsType) {
    const state = props.store.getState();

    return (
        <div className="wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route exact path="/dialogs" render={()=><Dialogs
                    message={props.store._state.messagePage}
                    newPostDataText={props.store._state.messagePage.messageForNewData}
                    addMessage={props.store.addMessage}
                    changeNewDataTextCB={props.store.changeNewDataText.bind(props.store)}/>}/>

                <Route path="/profile" render={()=><Profile
                    profilePage={props.store._state.profilePage}
                    newPostText={props.store._state.profilePage.messageForNewPost}
                    dispatch={props.store.dispatch.bind(props.store)}
                    addPost={props.store.addPost}
                    changeNewTextCallback={props.store.changeNewText.bind(props.store)}/>}/>
            </div>
        </div>);
}


export default App;
