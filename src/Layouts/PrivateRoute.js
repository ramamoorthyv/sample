import React from "react";
import { Redirect, Route } from "react-router-dom";
import { Layout, Breadcrumb, Menu, Dropdown, Avatar } from "antd";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";

// import isAuth from "../isAuth";
const { Header, Content, Footer } = Layout;

const PrivateRoute = ({ component: Component, idToken, fName, ...rest }) => {
  let history = useHistory();
  function handleLogout() {
    localStorage.removeItem("fName");
    localStorage.removeItem("idToken");
    history.push("/login");
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <span>View Profile</span>
      </Menu.Item>

      <Menu.Item danger>
        <span onClick={handleLogout}> Logout </span>
        {/* <Link to="/login">Logout</Link> */}
      </Menu.Item>
    </Menu>
  );

  return (
    <Route
      {...rest}
      render={(props) =>
        idToken ? (
          <Layout className="layout">
            <Header>
              <Dropdown overlay={menu}>
                <span style={{ float: "right" }} className="ant-dropdown-link">
                  <Avatar
                    size={40}
                    style={{ backgroundColor: "#87d068" }}
                    // icon={<UserOutlined />}
                  >
                    {" "}
                    {_.startCase(_.toLower(fName))}{" "}
                  </Avatar>
                </span>
              </Dropdown>
            </Header>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
              <div className="private-layout-content">
                <Component {...props} />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  idToken: _.get(state, "login.auth.idToken", false),
  fName: _.get(state, "login.auth.fName", null),
});

export default connect(mapStateToProps)(PrivateRoute);
