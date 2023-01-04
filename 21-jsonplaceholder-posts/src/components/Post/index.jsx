import React from 'react';
import "./index.css"
function Post({id, title, userId, body}) {

    return (
        <div className="post">
            <small>{id}</small>
            <h2>{title}</h2>
            <p>{body}</p>
            <h3>User Id: {userId}</h3>
        </div>
    );
}

export default Post;