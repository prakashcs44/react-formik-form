import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm: React.FC = () => {
  const [message, setMessage] = useState('');

  return (
    <Formik
      initialValues={{ email: '', password: '', rememberMe: false }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
      })}
      onSubmit={(values) => {
        if (values.rememberMe) {
          localStorage.setItem('email', values.email);
        }
        setMessage('Login Successful');
      }}
    >
      <Form className="form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" className="form-input" id="email" placeholder = "Email" />
          <ErrorMessage name="email" component="div" className="form-error" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Field name="password" type="password" className="form-input" id = "password" placeholder = "Password" />
          <ErrorMessage name="password" component="div" className="form-error" />
        </div>

        <div className="form-group">
          <label>
            <Field type="checkbox" name="rememberMe" />
            Remember Me
          </label>
        </div>

        <button type="submit" className="submit-button">Login</button>
        {message && <p className="success-message">{message}</p>}
      </Form>
    </Formik>
  );
};

export default LoginForm;
