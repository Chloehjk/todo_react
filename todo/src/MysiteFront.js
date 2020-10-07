import Axios from 'axios';
import React, { useEffect } from 'react';
import Profile from 'Profile';
import Experience from 'Experience';
import Skill from 'Skill';
import styles from "./CssMysite.css";
import { Layout, Menu, Button } from 'antd';
import {
  UserOutlined,
  ExperimentOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import {Route, Link, Switch} from 'react-router-dom'
import Login from 'account/Login'
import LoginContext from 'account/Util'
import { getToken } from 'account/Util'
import Empty from 'account/Empty'

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default function Mysite () {
  const [isLogin, setIsLogin] = React.useState(false);

  useEffect(()=>{
    const token = window.localStorage.getItem('token')

    if (token != null){
      setIsLogin(true);
    }
  },[]);

  const logout = () => {
    window.localStorage.removeItem('token');
    setIsLogin(false);
  };
  
    const [state, setState] = React.useState({
        collapsed : false
    })

    const onCollapse = (collapsed) => {
        setState({collapsed});
    };
    const { size } = state;
    return (
      <>    
        <LoginContext.Provider value={{isLogin, setIsLogin}}>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={state.collapsed} onCollapse={onCollapse}>
            
            <div className="logo">Hyunjin's Resume</div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link exact to = '/'>
                Profile
                </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<ExperimentOutlined />}>
                <Link exact to = '/experience'>
                  Experience
                </Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<CheckCircleOutlined />}>
                <Link exact to = '/skill'>
                  Skill
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
          <div style={{float:'right', marginRight:'35px'}}>
            { isLogin ?
              <Button type='primary' size={size} onClick={logout}>
                Logout
              </Button> : 
              <Link exact to = '/login'>
              <Button type='primary' size={size}>
                Login
              </Button>
              </Link>}
          </div>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <div>
                { isLogin ? <div>로그인됨</div> : <div>로그인안됨</div> }
              </div>
              <Switch>
                <Route exact path = '/' component={Profile}/>
                <Route exact path = '/experience' component={Experience}/>
                <Route exact path = '/skill' component={Skill}/>
                <Route exact path = '/Login' component={Login} />
              </Switch>
                <Route path='/' component={Empty} />
            </div>
          </Content>
        </Layout>
        </Layout>
        </LoginContext.Provider>
      </>
    ) 
  }