import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state, StatePropsType} from "./redux/state";
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

// addPost("sssssцццццц2222"); часа времени стоил вызов этой функции, потому что она вызывала ререндер
// и происходило замыкание

export const rerender = (state:StatePropsType) =>
{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>,
        </BrowserRouter>, document.getElementById('root')
    );
}