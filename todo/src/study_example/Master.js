import React from 'react';

export default function Master() {

    const [seq, setSeq] = React.useState(-1);
    const data = [
        {seq:0, name:'홍길동', age:30, address:'인천'},
        {seq:1, name:'이몽룡', age:24, address:'서울'},
        {seq:2, name:'임꺽정', age:38, address:'시흥'}
    ]

    const click = () => {
        setSeq(e.target.getAttribute('seq'))
    }

    return (
        <>
        {
            data.map((v, i)=> {
                return <div seq={v.seq} onClick={click}>{v.name}</div>
            })}
        <Detail seq={seq}/>
        </>
    )
}

function Detail() {
    return (
         <>
            {seq}
         </>
    )
}