import React from 'react'
import { Layout, Menu } from 'antd'
import { Outlet, useNavigate } from 'react-router'
import {menuItems} from './home/menu'

const { Header, Content, Sider, Footer } = Layout

const Home = () => {
  const navigate =  useNavigate()
  const handleClick = (e) => {
    navigate(e.key)
  }
  return (
    <>
    <Layout>
        <Header>
          <div className='logo' style={{
            color: "white"
          }}>My Products</div>
        </Header>
        <Content style={{
          padding: "50px 50px 0"
        }}>
          <Layout style={{
            background: "#fff",
            padding: "20px"
          }}>
            <Sider style={{
              width: '200px',
              background: '#fff'
            }}>
              <Menu items={menuItems} onClick={handleClick} defaultSelectedKeys={['Home']} />
            </Sider>
            <Content style={{ padding: "10px", minHeight : "500px" }}>
              <Outlet/>
            </Content>
          </Layout>
        </Content>
        <Footer style={{
          textAlign: "center"
        }}>
          <p>Muhamad Islahuddin ©2022 Created for Mitrafor Test</p>
        </Footer>
      </Layout>
    </>
  )
}

export default Home