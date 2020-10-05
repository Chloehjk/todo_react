import React from 'react';

function Plustest () {
    const [num1, setNum1] = React.useState(0)
    const [num2, setNum2] = React.useState(0)
    const plus1 = (e) => {
        setNum1(e.target.value)
    }
    const plus2 = (e) => {
        setNum2(e.target.value)
    }

    return (
        <div>
            <input value = {num1} onChange = {plus1} />
            <input value = {num2} onChange = {plus2} />
            <input value = {Number(num1) + parseInt(num2)} />
        </div>
    )
}
export default Plustest
