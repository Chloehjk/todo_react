import Axios from 'axios';
import React from 'react';
import { Divider, List } from 'antd';
import { getToken } from 'account/Util';


export default function Profile () {
    
    const [info, setInfo] = React.useState([])

////////로그인하면 볼 수 있도록 하는 권한////////////////////////////
    React.useEffect(() => {
        Axios.get('http://127.0.0.1:8000/mysite/profile/', {
            headers: {
                Authorization : "JWT " + getToken()
            }
        }).then(res=>{
            const {data} = res;
            setInfo(prev => data);
        })        
    },[])

    return (
        <div>
            <Divider orientation="left">Introduce</Divider>
            <List
            header={<div className='first'>Who am I</div>}
            bordered
            dataSource={info}
            renderItem={item => 
                <div id='profile'>
                    <div id='box'>
                    <table>
                        <tr>
                            <th>이름</th>
                            <td><List.Item>{item.name}</List.Item></td>
                        </tr>
                        <tr>
                            <th>생년월일</th>
                            <td><List.Item>{item.birthday}</List.Item></td>
                        </tr>
                        <tr>
                            <th>학교</th>
                            <td><List.Item>{item.university}</List.Item></td>
                        </tr>
                        <tr>
                            <th>전공 / 부전공</th>
                            <td><List.Item>{item.major}</List.Item></td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td><List.Item>{item.email}</List.Item></td>
                        </tr>
                        <tr>
                            <th>블로그</th>
                            <td><List.Item>{item.blog}</List.Item></td>
                        </tr>
                        <tr>
                            <th>Git</th>
                            <td><List.Item>{item.git}</List.Item>
                            </td>
                        </tr>
                    </table>
                    </div>
                </div>}
            />
        </div>
    )
}