import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/state"
import {BrowserRouter} from "react-router-dom";

// addPost("sssssцццццц2222"); часа времени стоил вызов этой функции, потому что она вызывала ререндер
// и происходило замыкание
// export const rerender = (state:StatePropsType) =>!1!

export const rerender = () =>

{
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} addPost={store.addPost.bind(store)} addMessage={store.addMessage.bind(store)}
            changeNewText={store.changeNewText.bind(store)} changeNewDataText={store.changeNewDataText.bind(store)}/>,
        </BrowserRouter>, document.getElementById('root')
    );
}
rerender()
store.subscribe(rerender);

// rerender(state);
//!1!
// subscribe(rerender);
