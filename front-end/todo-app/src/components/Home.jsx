import { Layout } from "antd";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from "@apollo/client";
import Todos from "./Todos";
import '../styles/home.css';

const { Header, Content, Footer } = Layout;

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:3000/graphql" }),
  cache: new InMemoryCache()
});

const Home = () => (
  <Layout className="layout">
    <Header>
      <h1>My TODO List</h1>
    </Header>

    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content" style={{ margin: "100px auto" }}>
        <h1>Todo List</h1>
        <ApolloProvider client={client}>
          <Todos />
        </ApolloProvider>
      </div>
    </Content>

    <Footer style={{ textAlign: "center" }}>Simple Todo List ©2021.</Footer>
  </Layout>
)

export default Home;