import React from 'react';

function Hovertest(){

    const style={
        width:'100px',
        height:'100px',
        fontSize:'20px',
        backgroundColor:'yellow',
        textAlign:'center',
        lineHeight:'100px'
    }

    const [state, setState] = React.useState('')
    const one = (e) => {
        setState(1)
    }
    const zero = (e) => {
        setState(0)
    }

    return(
        <>
        <div style={style} onMouseOver={one} onMouseOut={zero} >{state}</div>
        </>
        )
    }
export default Hovertest
    