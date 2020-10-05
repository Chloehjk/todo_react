import React from 'react';


function Banana() {
    const [cnt, setCnt] = React.useState('딸기');
  
    const click = () => {
      setCnt(cnt);
    }
  
    return (<div>
            <span>{cnt}</span>
            <div onClick={click}>바나나</div>
            </div>
    )
  }

export default Banana