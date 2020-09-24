import React from 'react';

function Gugudan(prop) {
    const nums = [1,2,3,4,5,6,7,8,9]
    
    return (
        <>
        <div>{prop.x}단</div>

        {nums.map((num) => {
        return <div>{prop.x} x {num} = {prop.x * Number(num)}</div>
        })}        
        </>
    )    
}
export default Gugudan
