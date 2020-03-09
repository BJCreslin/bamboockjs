import React from 'react';
import css from './post.module.css';

const Post = (props) => {
    return (
                <div className={css.item}>
                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-gaTvDoeqHGg%2FUe0mC-2vT5I%2FAAAAAAAATB4%2FfN-iF4-BqrM%2Fs1600%2FAvatar%2BThe%2BLegend%2Bof%2BKorra%2BBook%2BI%2B-%2BEpisode%2B1%2B%26%2B2.png&f=1&nofb=1"/>
                    {props.message}
                    <div>
                        <span> like</span> <span> {props.likescount}</span>
                    </div>

                </div>

    )
};

export default Post;
