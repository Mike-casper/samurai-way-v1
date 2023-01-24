import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


type MainPropsType= {
    postData:Array<MyPostsType>
}

type MyPostsType ={
    id: number,
    message: string,
    likeCount:number
}

function App(props:MainPropsType) {

    return (
        <BrowserRouter>
        <div className="wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route exact path="/dialogs" component={Dialogs}/>
                <Route path="/profile" render={()=><Profile postData={props.postData}/>}/>
            </div>
        </div>
        </BrowserRouter>);
}


export default App;
