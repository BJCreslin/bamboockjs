import React from 'react';
import {NavLink} from "react-router-dom";

let css = require("../dialogs.module.css");


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (<div className={css.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
};
export default DialogItem;
