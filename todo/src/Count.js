import React from 'react';


function Count() {
    const [cnt, setCnt] = React.useState(0);
  
    const click = () => {
      setCnt(cnt + 1);
    }
  
    return (<div>
            합계 숫자는? <span>{cnt}</span>
            <div onClick={click}>클릭</div>
            </div>
    )
  }

export default Count
 