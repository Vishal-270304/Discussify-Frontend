// MainLayout.tsx
import React, { useState} from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUp from "../pages/authPages/SignUp";
import SignIn from '../pages/authPages/Login';
import useAuthListener from '../utils/AuthListener'; 

const { Header, Sider } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const isAuthenticated = useAuthListener(); 

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      {isAuthenticated && (
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu
            theme="dark"
            mode="vertical"
            defaultSelectedKeys={['1']}
            items={[
              { key: '1', icon: <UserOutlined />, label: 'nav 1' },
              { key: '2', icon: <VideoCameraOutlined />, label: 'nav 2' },
              { key: '3', icon: <UploadOutlined />, label: 'nav 3' },
            ]}
          />
        </Sider>
      )}
      <Layout>
        <Header style={isAuthenticated ? { padding: 0, background: colorBgContainer, margin: 0 } : { height: "0px" }}>
          {isAuthenticated && (
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: '16px', width: 64, height: 64 }}
            />
          )}
        </Header>
        <Layout
          style={isAuthenticated ? {
            margin: '24px 16px',
            padding: 24,
            backgroundColor: colorBgContainer,
            borderRadius: borderRadiusLG,
          } : { backgroundColor: "transparent", margin: '0px', padding: 0 }}
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
