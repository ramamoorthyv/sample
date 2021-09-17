import {  Steps } from "antd";
import { reduxForm } from "redux-form";
const { Step } = Steps;

const BasicProfileForm = ({ handleSubmit, loginState }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Complete your profile </h2>
      <form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        style={{ padding: 20 }}
        onSubmit={handleSubmit}
      >
        <Steps current={1}>
          <Step title="Basic information" />
          <Step
            title="Relevance"
            description="To help us find the right project/client for you"
          />
          <Step
            title="Differentiator"
            description="To help us find the best offer for you"
          />
          <Step title="Salary and career goals:" />
        </Steps>

        {/* <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size={"large"}
            loading={loginState}
          >
            Submit
          </Button>
        </Form.Item> */}
      </form>
    </div>
  );
};

export default reduxForm({
  form: "BasicProfileForm",
})(BasicProfileForm);
