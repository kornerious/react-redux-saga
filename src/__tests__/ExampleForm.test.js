import React from 'react';
import { shallow, mount } from 'enzyme';

import { FormExample } from 'components/Home/FormExample/FormExample';

describe('ExampleFormComponent', () => {
  // let subject = null;
  // let submitting, touched, error, reset, onSave, onSaveResponse, handleSubmit;
  
  // beforeEach(() => {
	// 	submitting = false
	// 	touched = false
	// 	error = null
	// 	reset = sinon.spy()
	// 	onSaveResponse = Promise.resolve()
	// 	handleSubmit = fn => fn
	// });


  // const buildSubject = () => {
	// 	onSave = sinon.stub().returns(onSaveResponse)
	// 	const props = {
	// 		onSave,
	// 		submitting: submitting,
	// 		// The real redux form has many properties for each field,
	// 		// including onChange and onBlur handlers. We only need to provide
	// 		// the ones that will change the rendered output.
	// 		fields: {
	// 			firstName: {
	// 				value: '',
	// 				touched: touched,
	// 				error: error
	// 			}
	// 		},
	// 		handleSubmit,
	// 		reset
	// 	}
	// 	return shallow(<FormExample {...props}/>)
	// }

  it('mock', () => {
    expect(true).toBeTruthy();
  })
  // it('renders tree inputs', () => {
  //   const form = mount(<FormExample />);
  //   expect(form.find('.field')).toHaveLength(3);
  // });
});