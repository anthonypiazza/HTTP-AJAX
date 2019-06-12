import React from 'react';

function Form () {
    return(
        <div>
            <form>
                <input
                    type='text'
                    placeholder='Your Name Here'
                />
                <input
                    type='text'
                    placeholder='Your Age Here'
                />
                <input
                    type='text'
                    placeholder='Your Email Here'
                />
            </form>
            <button>Submit Details</button>
        </div>
    )
}

export default Form;