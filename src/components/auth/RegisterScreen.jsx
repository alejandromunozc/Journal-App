import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import {setError, removeError} from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

  const dispatch = useDispatch();

  const [formValue, handleInputChange] = useForm({
    name: 'Cristian',
    email: 'alejandromunozc@gmail.com',
    password: '123456',
    password2: '123456'
  });

  const {name, email, password, password2} = formValue;

  const handleRegister = (e) => {
    e.preventDefault();
    if(isFormValid()){
      console.log('Form Correcto');
    }
  }

  const isFormValid = () => {
    if(name.trim().length === 0) {
      dispatch(setError('Name is required'));
      return false;
    } else if(!validator.isEmail(email)){
      dispatch(setError('Email is not valid'));
      return false;
    } else if(password !== password2 || password.length < 5){
      dispatch(setError('Password length must be at least 6 characters and match'));
      return false;
    }
    dispatch(removeError());
    return true;
  }

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        <div className="auth__alert-error">Error</div>
        <input type="text" placeholder="Name" name="name" autoComplete="off" className="auth__input" value={name} onChange={handleInputChange} />
        <input type="text" placeholder="Email" name="email" autoComplete="off" className="auth__input" value={email} onChange={handleInputChange} />
        <input type="password" placeholder="password" name="password" className="auth__input" value={password} onChange={handleInputChange} />
        <input type="password" placeholder="Confirm password" name="password2" className="auth__input" value={password2} onChange={handleInputChange} />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>
        <Link to="/auth/login" className="link">
          Already register?
        </Link>
      </form>
    </>
  )
}
