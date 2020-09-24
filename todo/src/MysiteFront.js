import Axios from 'axios';
import React from 'react';

export default function MysiteFront () {

    const[profile, setProfile] = React.useState([]);

    React.useEffect(() => {
        Axios.get('http://127.0.0.1:8000/mysite/profile/')
        .then(response => {
            // const data = reaponse.data;
            const{data} = response ;
            setProfile(data);
        }).catch(error => {
        });
    },[])

    return (
        <div>
            {profile.map((v) => {
                return (
                    <div>{v.name}</div>
                )
            })}
        </div>
    )
}