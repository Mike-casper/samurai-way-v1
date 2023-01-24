import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let postData = [
    {id: 1, message: "How are you?", likeCount:12},
    {id: 2, message: "First post", likeCount: 21},
    {id: 3, message: "SSSS?", likeCount:12},
    {id: 4, message: "Firth sss", likeCount: 121}
];
let dialogs = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrew"},
    {id: 3, name: "Lola"},
    {id: 4, name: "Valera"},
    {id: 5, name: "Sveta"},
    {id: 6, name: "Viktor"},
];

let messagesData = [
    {id: 1, message: "How's you name"},
    {id: 2, message: "SSS"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Whta's your country"},
    {id: 5, message: "WWW"},
    {id: 6, message: "Viktor"},
];
ReactDOM.render(

    <App postData={postData} dialogs={dialogs} messagesData={messagesData} />,
  document.getElementById('root')
);