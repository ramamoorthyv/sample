import { Layout, Breadcrumb } from "antd";
import { Form, Button } from "antd";
import { Link } from "react-router-dom";

import { Field, reduxForm } from "redux-form";

import { InputField } from "../../AntdReduxForm";
import { required, email } from "redux-form-validators";

const { Header, Content, Footer } = Layout;

const LoginForm = ({ handleSubmit, loginState }) => {
  return (
    <Layout className="layout">
      <Header></Header>
      <Content className="site-layout-content" style={{ padding: "50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
        <div>
          <h2 style={{ textAlign: "center" }}>Login </h2>
          <form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            style={{ padding: 20 }}
            onSubmit={handleSubmit}
          >
            <Field
              size="large"
              name="email"
              placeholder="Email"
              validate={[required(), email()]}
              component={InputField}
              required
            />

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size={"large"}
                loading={loginState}
              >
                Submit
              </Button>
              <Link style={{ paddingLeft: 20 }} to="/signup">
                Signup
              </Link>
            </Form.Item>
          </form>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Remote Dev ©2018 Created by Appomate
      </Footer>
    </Layout>
  );
};

export default reduxForm({
  form: "OtpForm",
})(LoginForm);
