import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, changePost} from "./Redux/store";

export let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App profilePage={state.profilePage} dialogsPage={state.dialogsPage} addPost={addPost} changePost={changePost}/>
        </BrowserRouter>, document.getElementById('root'));
};

