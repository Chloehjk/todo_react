import React from 'react';

function List({i, v, deleteTodo}) {

    const click = (e) => {
        console.log(i)
        deleteTodo(i)
    };

    return(
    <>
        <div> {i} {v} 
        <button onClick={click}>삭제</button>
        </div>
    </>
    )
}
export default List

