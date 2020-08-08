import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func } from 'prop-types';

import { Input, Form } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 }
  }
};

const FormItem = Form.Item;

const makeField = Component => ({
  input, meta, children, hasFeedback, label, ...rest
}) => {
  const hasError = meta.touched && meta.invalid;
  return (
    <FormItem
      {...formItemLayout}
      label={label}
      validateStatus={hasError ? 'error' : 'success'}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
    >
      <Component {...input} {...rest}>
        {children}
      </Component>
    </FormItem>
  );
};

const TextInput = makeField(Input);

export const FormExample = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>FormExample</div>
    <div className="row">
      <Field
        label="Name"
        name="firstField"
        component={TextInput}
        type="text"
        placeholder="Name"
        id="firstField"
      />
      <Field name="secondField" component="input" type="text" />
      <Field name="thirdField" component="input" type="text" />
    </div>
  </form>
);

FormExample.propTypes = {
  handleSubmit: func.isRequired
};

export default reduxForm({ form: 'example' })(FormExample);
