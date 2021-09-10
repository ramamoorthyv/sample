import React from 'react';
import { Form, Input, Radio, Checkbox, DatePicker, InputNumber } from 'antd';
import CheckboxGroup from './CheckboxGroup';
import MaskInput from './MaskInput';
import customDatePicker from './DatePicker';
import Switch from './Switch';
import Picker from './Timepicker';
import Select from './SelectField';
import CurrencyInput from './CurrencyInput';

const RadioGroup = Radio.Group;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const makeField = (Component) => ({
  labelCol,
  wrapperCol,
  help,
  tooltip,
  input,
  extra,
  meta: { touched, error, warning },
  validateStatus,
  meta,
  children,
  hasFeedback = true,
  label,
  colon,
  icon,
  required,
  skipWrapper = false,
  ...rest
}) =>
  !skipWrapper ? (
    <Form.Item
      label={label}
      wrapperCol={wrapperCol}
      labelCol={labelCol}
      tooltip={tooltip}
      help={touched && error ? error : null}
      hasFeedback={hasFeedback}
      extra={extra}
      validateStatus={touched && error ? 'error' : null}
      colon={colon}
      required={required}
    >
      <Component {...input} {...rest} children={children} />
    </Form.Item>
  ) : (
    <Component {...input} {...rest} children={children} />
  );

export const InputField = makeField(Input);
export const PasswordField = makeField(Input.Password);
export const RadioGroupField = makeField(RadioGroup);
export const SelectField = makeField(Select);
export const CheckboxField = makeField(Checkbox);
export const TextareaField = makeField(TextArea);
export const DatePickerField = makeField(customDatePicker);
export const DateRangePickerField = makeField(RangePicker);
export const SwitchField = makeField(Switch);
export const CheckboxGroupField = makeField(CheckboxGroup);
export const MaskInputField = makeField(MaskInput);
export const InputNumberField = makeField(InputNumber);
export const InputCurrencyField = makeField(CurrencyInput);
export const TimepickerField = makeField(Picker);
export const RadioField = makeField(Radio);

