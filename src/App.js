import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import {Route} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import Profile from "./components/ProFile/Profile";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

function App(props) {
    debugger
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">

                <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
                <Route path="/profile" render={() => <Profile store={props.store}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
