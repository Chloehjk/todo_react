import React from 'react';


function Apple() {
    const [cnt, setCnt] = React.useState('딸기');
  
    const click = () => {
      setCnt(cnt);
    }
  
    return (<div>
            <span>{cnt}</span>
            <div onClick={click}>사과</div>
            </div>
    )
  }

export default Apple