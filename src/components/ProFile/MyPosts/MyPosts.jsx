import React from 'react';
import Post from "./Post/Post";
import css from "./myposts.module.css";


export function MyPosts(props) {
    let myPostsElements = props.posts.map(
        value => (<Post message={value.message} likescount={value.likesCount}/>)
    );
    let newPostElement = React.createRef();

    const postByClick = () => {
        props.addPostByClick();
    };

    function removePostByClick() {
        newPostElement.current.value = "";
    }

    function onChangePost() {
        let text = newPostElement.current.value;
        props.onChangePost(text)
    }

    return (
        <div className={css.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onChangePost}
                              value={props.newPostText}
                              placeholder="new Post"/>
                </div>
                <div>
                    <button onClick={postByClick}>Add post</button>
                    <button onClick={removePostByClick}>Remove</button>
                </div>
            </div>
            <div className={css.posts}>
                {myPostsElements}
            </div>
        </div>
    )
}

