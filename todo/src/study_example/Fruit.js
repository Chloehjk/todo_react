import React, { useState } from 'react';

function Fruit() {
    const [state, setState] = useState('');
    const change = (e) => {
        setState(e.target.name);
    }
    
    return (
            <div>
                <span>{state}</span>
                <div>
                    <button name='바나나' onClick={change}>바나나</button>
                    <button name='딸기' onClick={change}>딸기</button>
                    <button name='사과' onClick={change}>사과</button>
                </div>
            </div>
    )
  }
export default Fruit
