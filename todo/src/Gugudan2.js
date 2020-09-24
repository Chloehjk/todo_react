import React from 'react';

function Gugudan2() {
    const nums = [1,2,3,4,5,6,7,8,9]
    const [x, setX] = React.useState('2');
    const change = (e) => {
        setX(e.target.value)
    }

    return (
        <>
        <input value={x} onChange={change}/>
        {nums.map((num) => {
        return <div>{x} x {num} = {x * Number(num)}</div>
        })}
               
        </>
    )    
}
export default Gugudan2
