import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./redux/state"

ReactDOM.render(
    <App postData={state.postData} dialogs={state.dialogs} messagesData={state.messagesData} />,
  document.getElementById('root')
);