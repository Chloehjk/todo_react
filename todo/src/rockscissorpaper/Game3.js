import React from 'react';
import img1 from 'rockscissorpaper/1.png';
import img2 from 'rockscissorpaper/2.png';
import img3 from 'rockscissorpaper/3.png';

export default function Game2() {
    const img = [img1, img2, img3];
    const [user, setUser] = React.useState('');
    const [com, setCom] = React.useState('');
    const [msg, setMsg] = React.useState('');
    
    const computer = Math.floor(Math.random()*3) +1 ;
    const click = (e) => {
///////////가위////////////////////////////////////////////////

        setCom(img[computer]);
        setUser(img[e.target.id]);

        if ((e.target.id == 0 && computer==3) ||
            (e.target.id == 1 && computer==2) ||
            (e.target.id == 2 && computer==1)) {
            setMsg('이겼습니다.')}
        else if ((e.target.id == 0 && computer == 2) ||
                (e.target.id == 1 && computer == 3) ||
                (e.target.id == 2 && computer == 1)) {
                setMsg('졌습니다.')}
                
        else if ((e.target.id == 0 && computer == 1) ||
                (e.target.id == 1 && computer == 2) ||
                (e.target.id == 2 && computer == 3)) {
                setMsg('비겼습니다.')}

    }

    return (
        <>
            <div style = {{fontSize : '40px', textAlign:'center'}}>
                셋 중 하나를 선택해주세요
            </div>
            <div style={{textAlign:'center'}}>
                <img src={img1} id={0} onClick={click} style={{width:'200px'}}/>
                <img src={img2} id={1} onClick={click} style={{width:'200px'}}/>
                <img src={img3} id={2} onClick={click} style={{width:'200px'}}/>
            </div>
            <div style={{textAlign:'center'}}>
                <img src={user} style={{width:'200px'}}/>
                <img src={com} style={{width:'200px'}}/>
            </div>
            <div style = {{fontSize : '30px', textAlign:'center'}}>{msg}</div>
        </>
        )
}
