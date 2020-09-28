import Axios from 'axios';
import React from 'react';
import Profile from 'Profile';
import Experience from 'Experience';
import Skill from 'Skill';
import styles from "./CssMysite.css";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
  ExperimentOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import {Route, Link, Switch} from 'react-router-dom'


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function Mysite () {
    const [state, setState] = React.useState({
        collapsed : false
    })

    const onCollapse = (collapsed) => {
        setState({collapsed});
    };
    return (
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
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Switch>
                <Route exact path = '/' component={Profile}/>
                <Route exact path = '/experience' component={Experience}/>
                <Route exact path = '/skill' component={Skill}/>
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    ) 
  }