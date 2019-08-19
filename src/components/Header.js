import React from 'react';
import config from '../../config';

import adsaLogoNotext from '../assets/images/adsa-logo-notext.png';

export default function Header() {
  return (
    <div id="header">
      <img src={adsaLogoNotext} alt="Siebel Center"/>
      <h1>{config.heading}</h1>
      <p>{config.subHeading}</p>
    </div>
  );
}
