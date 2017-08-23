import React from 'react';
import { Link } from 'react-router-dom';
import glamorous from 'glamorous';
import logo from '../../../assets/rpgLogo.jpg';

const LogoImg = glamorous.img({
  height: '45px',
  margin: '10px 0',
});

const Logo = () => {
  return (
    <Link to={process.env.PUBLIC_URL + '/'}>
      <LogoImg src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
