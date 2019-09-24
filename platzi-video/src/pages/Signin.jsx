import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Signin = () => (
  <>

    <Helmet bodyAttributes={{ style: 'background-image: linear-gradient(#ab88ff, #21c08b);' }}>
      <title>PLatzi Video | Signin</title>
    </Helmet>

    <section className='Signin'>
      <div className='Signin__wrapper'>
        <h2 className='Signin__title'>Sign In!</h2>
        <form action='/' className='Signin__form'>
          <input type='text' className='Signin__input' placeholder='Name' aria-label='Name' required />
          <input type='email' className='Signin__input' placeholder='Email' aria-label='Email' required />
          <input type='password' className='Signin__input' placeholder='Password' aria-label='Password' required />
          <button type='submit' className='Signin__btn'>Sign In!</button>
        </form>

        <p className='Signin__Login'>
          ¿Ya tienes una cuenta?
          <Link to='/login' className='Signin__Login-link'>Ingresa!</Link>
        </p>
      </div>
    </section>
  </>
);

export default Signin;
