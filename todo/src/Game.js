import React from 'react';
import styles from "./CssRSP.css";
import img1 from 'rockscissorpaper/1.png';
import img2 from 'rockscissorpaper/2.png';
import img3 from 'rockscissorpaper/3.png';

export default function Game() {

    const img = [img1, img2, img3]
    const [user, setUser] = React.useState(img[0])    
    const [com, setCom] = React.useState()
    const [msg, setMsg] = React.useState()
    
    const click1 = () => {
        setUser(img[0]);
        const x = Math.floor(Math.random()*3)+1;
        console.log('랜덤숫자는 :', x);
        if (x-1 == 0){
            console.log('비겼습니다.')
            setMsg('비겼습니다.')
            setCom(img[0])}
        else if (x-1 == 1){
            console.log('졌습니다.')
            setMsg('졌습니다.')
            setCom(img[1])}
            
        else if (x-1 == 2){
                console.log('이겼습니다.')
                setMsg('이겼습니다.')
                setCom(img[2])}        
    }
    const click2 = () => {
        setUser(img[1]);
        const x = Math.floor(Math.random()*3)+1;
        console.log('랜덤숫자는 :', x);
        if (x-1 == 0){
            console.log('이겼습니다.')
            setMsg('이겼습니다.')
            setCom(img[0])}
        
        else if (x-1 == 1){
            console.log('비겼습니다.')
            setMsg('비겼습니다.')
            setCom(img[1])}
            
        else if (x-1 == 2){
                console.log('졌습니다.')
                setMsg('졌습니다.')
                setCom(img[2])}        
    
    }
    const click3 = () => {
        setUser(img[2]);
        const x = Math.floor(Math.random()*3)+1;
        console.log('랜덤숫자는 :', x);
        if (x-1 == 0){
            console.log('졌습니다.')
            setMsg('졌습니다.')
            setCom(img[0])}

        else if (x-1 == 1){
            console.log('이겼습니다.')
            setMsg('이겼습니다.')
            setCom(img[1])}
            
        else if (x-1 == 2){
                console.log('비겼습니다.')
                setMsg('비겼습니다.')
                setCom(img[2])}        
    }
    return (
        <>
        <div id='text'>셋 중 하나를 선택해주세요</div>
        <div className='images'>
            <img src={img1} data={0} onClick={click1}/>
            <img src={img2} data={1} onClick={click2}/>
            <img src={img3} data={2} onClick={click3}/>
        </div>
        <div className='result'>
            <img src={user}/>
            <img src={com}/>
        </div>
        <div id='msg'>{msg}</div>
        </>
    )
}