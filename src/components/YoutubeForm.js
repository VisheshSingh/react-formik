import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
  name: '',
  email: '',
  channel: '',
};

const onSubmit = (values) => {
  console.log('Form data 😀', values);
};

const validate = (values) => {
  const errors = {};
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.name) {
    errors.name = '⚠ Name is required';
  }
  if (!values.email) {
    errors.email = '⚠ Email is required';
  } else if (re.test(values.email)) {
    errors.email = 'Invalid email 😫';
  }
  if (!values.channel) {
    errors.channel = '⚠ Channel is required';
  }
  return errors;
};

const YoutubeForm = () => {
  const Formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className='container'>
      <form onSubmit={Formik.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          onChange={Formik.handleChange}
          value={Formik.values.name}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          onChange={Formik.handleChange}
          value={Formik.values.email}
        />
        <label htmlFor='channel'>Channel</label>
        <input
          type='text'
          id='channel'
          name='channel'
          onChange={Formik.handleChange}
          value={Formik.values.channel}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
