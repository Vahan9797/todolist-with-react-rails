import { Layout } from "antd";
import React from "react";
import Todos from "./Todos";
import '../styles/home.css';

const { Header, Content, Footer } = Layout;

const Home = () => (
  <Layout className="layout">
    <Header>
      <h1>My TODO List</h1>
    </Header>

    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content" style={{ margin: "100px auto" }}>
        <h1>Todo List</h1>
        <Todos />
      </div>
    </Content>

    <Footer style={{ textAlign: "center" }}>Simple Todo List ©2021.</Footer>
  </Layout>
)

export default Home;