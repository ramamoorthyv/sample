import { Form, Button } from "antd";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

import { InputField } from "../../AntdReduxForm";
import { required } from "redux-form-validators";



const LoginForm = ({ handleSubmit, loginEmail, loginState }) => {
  return (
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
        <Form.Item>{loginEmail}</Form.Item>

        <Field
          size="large"
          name="otp"
          placeholder="One time password"
          validate={[required()]}
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
          <Link style={{ paddingLeft: 20 }} to="/login">
            Cancel
          </Link>
        </Form.Item>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "OtpForm",
})(LoginForm);
