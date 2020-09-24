import React from 'react';

function Numbers() {
    const[number,setNumber]=React.useState([1,2,3,4,5,6,7,8,9]);
    const zero = () => {
        setNumber([...number.slice(0,4),0,0,...number.slice(6,9)])
    }
    return (
        <>
        <div>{JSON.stringify(number)}</div>
        <button onClick={zero}>클릭</button>
        </>
    )
}
export default Numbers


// setx4([...x4.slice(0,2),0,0, ...x4.slick(4,5)])