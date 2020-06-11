import React from 'react';
import { useFormik } from 'formik';

const YoutubeForm = () => {
  const Formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: '',
    },
  });

  // console.log('Form initial values 😉', Formik.values);
  return (
    <div className='container'>
      <form>
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
