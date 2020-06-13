import React from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from 'formik';
import * as Yup from 'yup';

import TextError from './TextError';

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phNumbers: [''],
};

const onSubmit = (values) => {
  console.log('Form data 😀', values);
};

const validationSchema = Yup.object({
  name: Yup.string().required('⚠ Name is required ⚠'),
  email: Yup.string()
    .email('Invalid email format 🥵')
    .required('⚠ Email is required ⚠'),
  channel: Yup.string().required('⚠ Channel is required ⚠'),
  address: Yup.string().required('⚠ Address is required ⚠'),
});

const YoutubeForm = () => {
  return (
    <Formik
      className='container'
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <Form>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <Field type='text' id='name' name='name' />
          <ErrorMessage name='name' component={TextError} />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <Field type='email' id='email' name='email' />
          <ErrorMessage name='email'>
            {(errorMsg) => <div className='error'>{errorMsg}</div>}
          </ErrorMessage>
        </div>
        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <Field type='text' id='channel' name='channel' />
          <ErrorMessage name='channel' />
        </div>
        <div className='form-control'>
          <label htmlFor='comments'>Comments</label>
          <Field
            as='textarea'
            id='comments'
            name='comments'
            placeholder='Enter your comments here 😊'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='address'>Address</label>
          <FastField name='address'>
            {(props) => {
              console.log('form field');
              const { field, form, meta } = props;
              return (
                <div>
                  <input id='address' {...field} />
                  {meta.touched && meta.error && <p>{meta.error}</p>}
                </div>
              );
            }}
          </FastField>
        </div>
        <div className='form-control'>
          <label htmlFor='facebook'>Facebook Profile</label>
          <Field type='text' id='facebook' name='social.facebook' />
        </div>
        <div className='form-control'>
          <label htmlFor='twitter'>Twitter Profile</label>
          <Field type='text' id='twitter' name='social.twitter' />
        </div>
        <div className='form-control'>
          <label htmlFor='phNumbers'>Phone Number/s</label>
          <FieldArray name='phNumbers'>
            {(fieldArrayProps) => {
              console.log('form errors', fieldArrayProps.form.errors);
              const {
                push,
                remove,
                form: {
                  values: { phNumbers },
                },
              } = fieldArrayProps;
              return (
                <div>
                  {phNumbers.map((phNumber, idx) => (
                    <div key={idx}>
                      <Field type='text' name={`phNumbers[${idx}]`} />
                      {idx > 0 && (
                        <button type='button' onClick={() => remove(idx)}>
                          -
                        </button>
                      )}
                      <button type='button' onClick={() => push('')}>
                        +
                      </button>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </div>
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
