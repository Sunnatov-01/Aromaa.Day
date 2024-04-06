import React, { useState } from 'react';
import '../css/Footer.css';
import instagram from '../images/instagram.svg';
import telegram from '../images/telegram.svg';

export default function Footer() {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className="footer">
        <p className="footerP">Aroma Day 2024</p>
        <span>
          <a
            target="blank"
            href="https://www.instagram.com/aromaa_day?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          >
            <img className="footerIcon" src={instagram} alt="" />
          </a>
          <a target='blank' href="https://t.me/Aromaa_day">
            <img className="footerIcon" src={telegram} alt="" />
          </a>
          <svg
            onClick={() => setActive(!active)}
            className="footerContactIcon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="#3d84ff"
              d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
            />
          </svg>
          {active ? <p className={active ? 'animated-text' : ''}>+998 88 715 05 77</p> : <br />}
        </span>
      </div>
    </div>
  );
}
