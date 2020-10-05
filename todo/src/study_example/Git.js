import React from 'react';
import Axios from 'axios';

export default function Git () {
    
    const [name, setName] = React.useState([])

    React.useEffect(() => {
        Axios.get("https://api.github.com/users?since=1000")
        .then(res => {
            const {data} = res;
            setName(data)
            console.log(data)
        }).catch(error => {
        });
    },[])



    return (
        <div>
            {name.map((v,i)=> {
                return (
                    <div key={i}>
                        <img src = {v.avatar_url} style={{width : "30px", borderRadius:'30px', marginBottom:'5px', marginRight:'5px'}}/> 
                        {v.login}
                    </div>
                )
            })}
        </div>
    )
}