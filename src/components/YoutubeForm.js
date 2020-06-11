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
  const re = /\S+@\S+\.\S+/;

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

  console.log('Visited field', Formik.touched);

  return (
    <div className='container'>
      <form onSubmit={Formik.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            value={Formik.values.name}
          />
          {Formik.errors.name && <p className='error'>{Formik.errors.name}</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            value={Formik.values.email}
          />
          {Formik.errors.email && (
            <p className='error'>{Formik.errors.email}</p>
          )}
        </div>
        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <input
            type='text'
            id='channel'
            name='channel'
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            value={Formik.values.channel}
          />
          {Formik.errors.channel && (
            <p className='error'>{Formik.errors.channel}</p>
          )}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
