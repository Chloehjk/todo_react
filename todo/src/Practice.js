import React from 'react';
import queryString from 'query-string'
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom'
import { Menu } from 'antd';
import { List, Avatar } from 'antd';
import { HomeOutlined, SmileOutlined, TableOutlined, PushpinOutlined } from '@ant-design/icons';
import Axios from 'axios';
import styles from "./CssPractice.css";

const { SubMenu } = Menu;

export default function Practice () {

    const [state, setState] = React.useState({
        current: 'mail',
      });
     const handleClick = e => {
        console.log('click ', e);
        setState({ current: e.key });
      };

    return(
        <>
        <Menu onClick={handleClick} selectedKeys={[state.current]} mode="horizontal">
            <Menu.Item key="home" icon={<HomeOutlined/>}> 
                <Link exact to ='/'>홈</Link>
            </Menu.Item>
            <Menu.Item key="student" icon={<SmileOutlined/>}>
                <Link to ='/student'>학생</Link>
            </Menu.Item>
            <Menu.Item key="score" icon={<TableOutlined />}>
                <Link to ='/score'>점수</Link>
            </Menu.Item>
        </Menu>

        <div id='content'>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/student' component={Student}/>
                <Route exact path='/score' component={Score}/>
            </Switch>
        </div>
        </>
    )
}

///////////////////////////////////////////
function Home({history, location, match}) {
    
    return (
        <div>
            HOME
        </div>
    )
}
///////////////////////////////////////////
function Student() {
    const [student, setStudent] = React.useState([])

    React.useEffect(()=> {
        Axios.get('http://127.0.0.1:8000/api/study/students/')
        .then(response => {
            const {data} = response;
            setStudent(data);
        }).catch(error => {           
        });
    },[])
    
    return (
        <div>
        <List
            itemLayout="horizontal"
            dataSource={student}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                title={<a>{item.name}</a>}
                description={<div>
                            <span>{item.address} / </span>
                            <span>{item.email}</span>
                            </div>}
                />
            </List.Item>
            )}
        />
        </div>
    )
}
///////////////////////////////////////////
function Score() {
    const [score, setScore] = React.useState([])

    React.useEffect(()=> {
        Axios.get('http://127.0.0.1:8000/api/study/scores/')
        .then(response => {
            const {data} = response;
            setScore(data);
        }).catch(error => {           
        });
    },[])
    
    return (
        <div>
           <List
            itemLayout="horizontal"
            dataSource={score}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                title={<a>{item.name}</a>}
                description={<div>
                            <span>수학 : {item.math} / </span>
                            <span>과학 : {item.science} / </span>
                            <span>영어 : {item.english}</span>
                            </div>}
                />
            </List.Item>
            )}
        />
        </div>
    )
}