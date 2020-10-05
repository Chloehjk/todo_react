import React from 'react';


function Scores() {
    const[score,setScore] = React.useState({
        name:'홍길동', math:80, science:30, english:60
        });
    const reset = () => {
      setScore({...score, math :0, science : 0, english: 0})
    }
    return (
      <>
        <div>{JSON.stringify(score)}</div>
        <button onClick={reset}>클릭</button>
      </>
    )
  }
export default Scores
  