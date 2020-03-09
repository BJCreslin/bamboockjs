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

function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">

                <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage}
                                                              dispatch={props.dispatch}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
