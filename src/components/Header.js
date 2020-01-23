import React from 'react';
import config from '../../config';

import adsaLogoNotext from '../pages/images/adsa-logo-notext.png';

export default function Header() {
  return (
    <div id="header" style={{ textAlign: 'center' }}>
      <img src={adsaLogoNotext} alt="Siebel Center" />
      <h1 style={{ paddingLeft: '15%', paddingRight: '15%' }}>
        {config.heading}
      </h1>
      <p>{config.subHeading}</p>
      <h4 style={{ color: 'orange' }}>
        {/* Look out for events on our{' '}<a href="https://facebook.com/datauiuc" target="_blank">Facebook</a> page! */}
        First info session this Sunday 01/26 from 1-2pm in Siebel 1105
      </h4>
    </div>
  );
}
