import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUpForm: React.FC = () => {
  const [message, setMessage] = useState('');

  const passwordStrength = (password: string) => {
    if (password.length < 6) return 'Weak';
    if (password.length < 10) return 'Moderate';
    return 'Strong';
  };

  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().min(6, 'Must be 6 characters or more').required('Required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Required'),
      })}
      onSubmit={(values, { resetForm }) => {
        setMessage('Sign Up Successful');
        resetForm();
      }}
    >
      {({ values }) => (
        <Form className="form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" className="form-input" id = "email" placeholder = "Email" />
            <ErrorMessage name="email" component="div" className="form-error" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" className="form-input" id = "password" placeholder = "Password"  />
            <ErrorMessage name="password" component="div" className="form-error" />
            <div className="password-strength">
              Password Strength: {passwordStrength(values.password)}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field name="confirmPassword" type="password" className="form-input" />
            <ErrorMessage name="confirmPassword" component="div" className="form-error" />
          </div>

          <button type="submit" className="submit-button">Sign Up</button>
          {message && <p className="success-message">{message}</p>}
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
