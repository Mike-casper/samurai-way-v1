import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StatePropsType} from "./redux/state";
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

// addPost("sssssцццццц2222");

export const rerender = (state:StatePropsType) =>
{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>,
        </BrowserRouter>, document.getElementById('root')
    );
}
