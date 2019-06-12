import React from 'react';

const Friend = props => {
    return(
        <div>
            <h1>{props.friend.name}</h1>
            <h2>{props.friend.age}</h2>
            <p>{props.friend.email}</p>
        </div>
    )
}

export default Friend;