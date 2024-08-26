import React, { useState , useEffect} from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Routes, Route, useNavigate } from "react-router-dom";
import BackgroundImage from "../../public/discussify-bg.avif";
import HomePage from "../pages/HomePage";
import SignUp from "../pages/authPages/SignUp";
import SignIn from '../pages/authPages/Login';

const { Header, Sider} = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const navigate = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  //Will use this at the time of api integeration

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate('/home');
  //   }
  //   else{
  //     navigate('/signup');
  //   }
  // }, [isAuthenticated, navigate]);

  return (
    <Layout style={isAuthenticated ? { height: "100vh" } : { height: "95vh "}}>
      {isAuthenticated && (
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="vertical"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
      )}
      <Layout>
        <Header style={{padding: 0, background: colorBgContainer ,margin: 0}}>
          {isAuthenticated && (
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          )}
        </Header>
        <Layout
          style={isAuthenticated ? {
            margin: '24px 16px',
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          } : {backgroundColor: "#ffffff",margin:'0px'}}
        >
          <Routes>
            <Route path="/*" element={<SignUp />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<SignIn />} />
            
          </Routes>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;