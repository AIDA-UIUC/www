import React from 'react';
import config from '../../config';

import adsaLogoNotext from '../pages/images/adsa-logo-notext.png';

export default function Header() {
  return (
    <div id="header">
      <img src={adsaLogoNotext} alt="Siebel Center" />
      <h1>{config.heading}</h1>
      <p>{config.subHeading}</p>
      <br />
      <h4 style={{ color: 'orange' }}>
        First general meeting September 1st at 2:30 p.m. in Siebel 1109
      </h4>
    </div>
  );
}
