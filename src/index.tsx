import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {rerender} from "./render";
import {addPost, state} from "./redux/state";

rerender(state);
