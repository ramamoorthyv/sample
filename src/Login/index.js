import { Layout, Breadcrumb } from 'antd';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';


import { Field, reduxForm, getFormValues } from 'redux-form';

import { InputField, PasswordField } from '../AntdReduxForm';
import { required } from 'redux-form-validators';


const { Header, Content, Footer } = Layout;

const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout className="layout">
      <Header>
      </Header>
      <Content  className="site-layout-content" style={{ padding: '50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        </Breadcrumb>
        <div>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{ padding: 20 }}
          >
            <Field
              size="large"
              name="firstName"
              placeholder="First name"
              validate={[required()]}
              component={InputField}
              required
            />

            <Field
              size="large"
              name="lastName"
              placeholder="Last name"
              validate={[required()]}
              component={InputField}
              required
            />

            <Field
              size="large"
              name="email"
              placeholder="Email"
              validate={[required()]}
              component={InputField}
              required
            />

            <Field
              size="large"
              name="mobileNumber"
              placeholder="Mobile number"
              validate={[required()]}
              component={InputField}
              required
            />


            <Form.Item>
              <Button type="primary" htmlType="submit" size={'large'} >
                Submit
              </Button>
            </Form.Item>
          </Form></div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Remote Dev ©2018 Created by Appomate</Footer>
    </Layout>
  );
};

export default reduxForm({
  form: 'LoginForm'
})(LoginForm)
