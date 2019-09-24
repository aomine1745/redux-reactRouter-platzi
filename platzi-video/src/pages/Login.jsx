import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import google from '../assets/img/google-icon.png';
import twitter from '../assets/img/twitter-icon.png';

const Login = () => (
  <>
    <Helmet bodyAttributes={{ style: 'background-image: linear-gradient(#21c08b, #ab88ff);' }}>
      <title>PLatzi Video | Login</title>
    </Helmet>

    <section className='Login'>
      <div className='Login__wrapper'>
        <h2 className='Login__title'>Log In!</h2>
        <form action='/' className='Login__form'>
          <input type='email' className='Login__input' placeholder='Email' aria-label='Email' required />
          <input type='password' className='Login__input' placeholder='Password' aria-label='Password' required />
          <button type='submit' className='Login__btn'>Log In!</button>

          <div className='Login__actions'>
            <div className='Login__rememberMe'>
              <label htmlFor='rememberMe' className='Login__rememberMe-label'>
                <input type='checkbox' name='rememberMe' id='rememberMe' className='Login__rememberMe-input' />
Remember me
              </label>
            </div>
            <div className='Login__forgot'>
              <a href='/' className='Login__forgot-link'>I forgot my password</a>
            </div>
          </div>
        </form>

        <div className='Login__socialLogin'>
          <div className='Login__socialLogin-wrapper'>
            <img src={google} alt='google' className='Login__socialLogin-icon' />
            <a href='/' className='Login__socialLogin-link'>Log In with Google</a>
          </div>
          <div className='Login__socialLogin-wrapper'>
            <img src={twitter} alt='google' className='Login__socialLogin-icon' />
            <a href='/' className='Login__socialLogin-link'>Log In with Twitter</a>
          </div>
        </div>

        <p className='Login__signin'>
          ¿No tienes una cuenta?
          {' '}
          <Link to='/signin' className='Login__signin-link'>Regístrate!</Link>
        </p>
      </div>
    </section>
  </>
);

export default Login;
