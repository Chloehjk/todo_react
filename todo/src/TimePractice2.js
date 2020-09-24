import React from 'react';

function TimePratice2({startTime}) {
 
    const [timer, setTimer] = React.useState(0);
    React.useEffect(()=>{
        //컴포넌트가 생성될 때 한 번만
        const inter = setInterval(()=> {
            setTimer(new Date().getTime() - startTime.getTime())
        },1000)

        return () => {
            clearInterval(inter)
        }
    },[])


    return (
        <>
            <div>{startTime.toISOString()} / {parseInt(timer/1000)}초 지남</div>
        </>
    )
}   
export default TimePratice2

