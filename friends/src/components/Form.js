import React from 'react';

const Form = props => {
    return(
        <div>
            <input
                type='text'
                placeholder='Your Name Here'
                onChange={props.handleChange}
                name='name'
                value={props.name}
            />
            <input
                type='text'
                placeholder='Your Age Here'
                onChange={props.handleChange}
                name='age'
                value={props.age}
            />
            <input
                type='text'
                placeholder='Your Email Here'
                onChange={props.handleChange}
                name='email'
                value={props.email}
            />
            <button onClick={props.postFriend}>Add Friend</button> 
            <button onClick={props.putFriend}>Update Friend</button>  
            <button onClick={props.deleteFriend}>Delete Friend</button>   
        </div>
    )
}

export default Form;