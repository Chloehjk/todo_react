import React, { useReducer } from 'react';

const reducer = (prev, action) => {
    return(
        {number: prev.number +1}
    )
};


export default function ReducerTest() {
    const[num, dispatch] = React.useReducer(reducer, {
        'number':11
    });

    const click = (e) => {
        dispatch()
    };
    
    return(
        <div>
            <div>현재 숫자는?</div>
            <div>{num.number}</div>
            <div onClick={click}>click me</div>
        </div>
    )
}

