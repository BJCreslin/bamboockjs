import React from "react";
import css from "./profile.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <div className={css.img}>
                <img src="
                https://images.unsplash.com/photo-1547120198-a4193142bd73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80
                "/>
            </div>
            <div className={css.description}>
                avatar + description
            </div>
        </div>
    )
};
