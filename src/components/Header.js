import React from 'react';
import config from '../../config';

import adsaLogoNotext from '../pages/images/adsa-logo-notext.png';

export default function Header() {
  return (
    <div id="header">
      <img src={adsaLogoNotext} alt="Siebel Center" />
      <h1>{config.heading}</h1>
      <p>{config.subHeading}</p>
      <h4 style={{ color: 'orange' }}>
        Look out for events on our <a href="https://facebook.com/adsauiuc">Facebook</a> page!
      </h4>
    </div>
  );
}
