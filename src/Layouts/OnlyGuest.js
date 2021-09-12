import React from "react";
import { Layout, Breadcrumb } from "antd";
import { Redirect, Route } from "react-router-dom";
import isAuth from "../isAuth";

const { Header, Content, Footer } = Layout;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuth ? (
        <Layout className="layout">
          <Header>
            <img className="logo" alt={"Logo"} src="/logo.png" />
          </Header>
          <Content className="site-layout-content" style={{ padding: "50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
            <Component {...props} />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Remote Dev ©2021 Created by Appomate
          </Footer>
        </Layout>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default PrivateRoute;
