import React from 'react';


function Toggletest() {
    const [state, setState] = React.useState(true)
  
    const TF = (e) => {
      if (state == true)
        setState(false)
      else
        setState(true)
    }
    return (<>
      {state ? <div>True입니다</div> : <div>False입니다</div>}
      <button onClick={TF}>클릭</button>
    </>)
  }
export default Toggletest