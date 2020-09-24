import React from 'react';

//prev 이전값
//action 어떤 행동을 할지?
/// ===는 타입 체크가지함
const reducer = (prev, action) => {
    if (action.type === 'CHANGE') {
        console.log(prev)
        return action.value;
    }
}

export default function TestReducer() {
    const [name, dispatch] = React.useReducer(reducer,'홍길동')
    const click = () => {
        dispatch({
            type:'CHANGE',
            value: "이몽룡"
        })
    }
    return(
        <>
        {name}
        <button onClick={click}>변경</button>
        </>
    )
}