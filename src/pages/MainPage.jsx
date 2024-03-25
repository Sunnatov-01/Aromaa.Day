import React from 'react';
import '../css/MainPage.css';
import Header from '../components/Header';
import boutique from '../images/companies/007boutique.jpg';
import blackStone from '../images/companies/BlackStone_logo.jpg';
import yurtur from '../images/companies/YURTUR_LOGO5.jpg';
import alfraganus from '../images/companies/alfraganus.jpg';
import byd from '../images/companies/byd.png';
import fightBaza from '../images/companies/fight-baza.png';
import ideal from '../images/companies/ideal.png';
import marvarid from '../images/companies/marvarid.png';
import Musulmonlaidorasi from '../images/companies/uzbmusulmonlaridorasi.jpg';
import walktalk from '../images/companies/walktalk.png';
import warpoint from '../images/companies/warpoint.webp';

export default function MainPage() {
  const companies = [
    {
      img: boutique,
    },
    {
      img: blackStone,
    },
    {
      img: yurtur,
    },
    {
      img: alfraganus,
    },
    {
      img: byd,
    },
    {
      img: fightBaza,
    },
    {
      img: ideal,
    },
    {
      img: marvarid,
    },
    {
      img: Musulmonlaidorasi,
    },
    {
      img: walktalk,
    },
    {
      img: warpoint,
    },
  ];
  return (
    <div className="MainPage">
      <Header />
      <div className="mainPageBody">
        <div className="mainPageFirst">
          <b className="mainPageB">Добро пожаловать в AROMA DAY</b>
          <p className="mainPageP">Мы подберем лучший аромат для вашего бренда!</p>
        </div>
        <div className="mainPageSecond">
          <div>
            <div className="infoCards">
              <div className="infoCard">
                <svg
                  className="infoCardImg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 528 512"
                >
                  <path
                    fill="#db0000"
                    d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"
                  />
                </svg>
                <p className="infoCardP">
                  Мы предлагаем вам парфюмерию от лучших парфюмерных магазинов Испании, Франции и
                  Италии, ведущих парфюмерных городов мира.
                </p>
              </div>
              <div className="infoCard">
                <svg
                  className="infoCardImg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#337eff"
                    d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"
                  />
                </svg>
                <p className="infoCardP">
                  Люди, которые обращаются к нам, уверены, что получат доступные и эффективные
                  решения по ароматизации для различных условий бизнеса.
                </p>
              </div>
              <div className="infoCard">
                <svg
                  className="infoCardImg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="#00d64b"
                    d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128H16zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16H544zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"
                  />
                </svg>
                <p className="infoCardP">
                  Люди, которые обращаются к нам, уверены, что получат доступные и эффективные
                  решения по ароматизации для различных условий бизнеса.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="companyH">
              На данный момент мы обслужили около 50 клиентов, в том числе:
            </h1>
            <div className="cards">
              {companies.map((item, index) => {
                return (
                  <div className="card" key={index}>
                    <img className="companyLogo" src={item.img} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
