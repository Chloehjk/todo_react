import Axios from 'axios';
import React from 'react';
import { Divider, List } from 'antd';

export default function Experience () {
    
    const [info, setInfo] = React.useState([])

    React.useEffect(() => {
        Axios.get('http://127.0.0.1:8000/mysite/experience/')
        .then(res => {
            const {data} = res;
            setInfo(data)
        }).catch(error => {            
        });
    },[])

    return (
        <div>
            <Divider orientation="left">Experience</Divider>
            <List
            size="large"
            header={<div>Who I did</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={info}
            renderItem={item => 
                <div>
                    <List.Item>{item.title}</List.Item>
                    <List.Item>{item.institution}</List.Item>
                    <List.Item>{item.memo}</List.Item>
                </div>}
            />
        </div>
    )
}