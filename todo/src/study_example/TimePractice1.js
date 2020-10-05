import React from 'react';
import TimePractice2 from 'TimePractice2';

function TimePractice1() {
    const[timer, setTimer] = React.useState([]);
    const[cnt, setCnt] = React.useState(-1);
///////////////////////////////////////////////////////
    const click = () => {
        setTimer([...timer, new Date()]);
    }

    React.useEffect(()=> {
        setCnt(cnt + 1);
        },[timer])
///////////////////////////////////////////////////////////
    return (
        <>
            <div>타이머개수 : {cnt}</div>
            <button onClick = {click}>추가</button>
            {timer.map((v)=> {
            return <TimePractice2 startTime={v}/>
            })}
        </>
    )
}
export default TimePractice1
