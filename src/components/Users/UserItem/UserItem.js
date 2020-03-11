import React from "react";

const UserItem = (props) => {
    return (
        <div>
            <div> {props.user.fullName} </div>
        </div>
    )
};

export default UserItem;
