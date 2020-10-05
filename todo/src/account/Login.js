import React from 'react';
import Axios from 'axios';
import { Form, Input, Button, Checkbox, message } from 'antd';
import LoginContext from './Util';



export default function Login() {

    const login = React.useContext(LoginContext);
    const [form] = Form.useForm();

    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 12 },
      };
    
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };
      
    const onFinish = values => {    
        Axios.post("http://127.0.0.1:8000/api/account/api-jwt-auth", values)
        .then(res=>{
            window.localStorage.setItem("token", res.data.token)
            login.setIsLogin(true);
        }).catch(error=>{
            message.info('아이디, 패스워드를 확인해주세요');
        })
      };  
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    
    return (
        <div style={{width:'600px', height:'350px'}}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                style={{marginTop:'30px', marginLeft:'15px'}}
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};