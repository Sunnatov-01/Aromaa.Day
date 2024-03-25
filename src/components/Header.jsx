import React from 'react';
import '../css/Header.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../images/Logo.png';

export default function Header() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <div className="header">
      <div className="headerLogoDiv">
        <img className="headerLogoImg" src={Logo} alt="" />
      </div>
      <div className="headerLinks">
        <ul className="headerUl">
          <li className="headerLi">
            <Link
              className={location.pathname === '/' ? ' headerUnderlineLink' : 'headerLink'}
              to="/"
            >
              Главная
            </Link>
          </li>
          <li className="headerLi">
            <Link
              className={location.pathname === '/services' ? ' headerUnderlineLink' : 'headerLink'}
              to="/services"
            >
              Наши Услуги
            </Link>
          </li>
          <li className="headerLi">
            <Link
              className={location.pathname === '/aromates' ? ' headerUnderlineLink' : 'headerLink'}
              to="/aromates"
            >
              Ароматы
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
