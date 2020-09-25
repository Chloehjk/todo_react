import Axios from 'axios';
import React from 'react';
import { Divider, List } from 'antd';

export default function Skill () {
    
    const [info, setInfo] = React.useState([])

    React.useEffect(() => {
        Axios.get('http://127.0.0.1:8000/mysite/skill/')
        .then(res => {
            const {data} = res;
            setInfo(data)
        }).catch(error => {            
        });
    },[])

    return (
        <div>
            <Divider orientation="left">Skill</Divider>
            <List
            size="large"
            header={<div>What can I do</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={info}
            renderItem={item => 
                <div>
                    <List.Item>{item.skillname}</List.Item>
                    <List.Item>{item.degree}</List.Item>
                    <List.Item>{item.memo}</List.Item>
                </div>}
            />
        </div>
    )
}