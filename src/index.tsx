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
ReactDOM.render(

    <App postData={postData} />,
  document.getElementById('root')
);