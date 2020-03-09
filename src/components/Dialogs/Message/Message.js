import React from "react";

let css = require("../dialogs.module.css");

const Message = (props) => {
    return (
        <div className={css.message}>{props.text}</div>
    )
};

export default Message;
