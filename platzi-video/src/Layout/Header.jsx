import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo-platzi-video-BW2.png';
import userIcon from '../assets/img/user-icon.png';

const Header = () => (
  <header className='Header'>
    <div className='Header__wrapper'>
      <div className='Branch'>
        <img className='Branch__logo' src={logo} alt='Platzi Video' />
      </div>

      <div className='User'>
        <div className='User__profile'>
          <img src={userIcon} alt='User' className='User__profile-icon' />
          <p>Perfil</p>
        </div>
        <ul className='User__actions'>
          <li className='User__actions-item'><a href='/' className='User__actions-link'>Cuenta</a></li>
          <li className='User__actions-item'><Link to='/login' className='User__actions-link'>Cerrar Sesión</Link></li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
