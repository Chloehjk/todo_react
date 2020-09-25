import React, { useEffect } from 'react';
import Axios from 'axios';

export default function AxiosScores () {
    const [scores, setScores] = React.useState([]);
    const [selectid, setSelectid] = React.useState(0);

    React.useEffect(() => {
        Axios.get('http://127.0.0.1:8000/api/study/scores/')
        .then(response => {
            const {data} = response;
            setScores(data);
            console.log(data)
        }).catch(error => {
        });
    },[])

    const click = (e) => {
        setSelectid(e.target.id)
    }

    return (
        <div>
            {scores.map((v)=> {
                return (
                    <div id={v.id} onClick={click}>
                        {v.name} {v.math} {v.science}
                    </div>
                )
            })}
        </div>
    )
}


