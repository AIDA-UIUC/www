import React from 'react';
import config from '../../config';

import adsaLogoNotext from '../pages/images/adsa-logo-notext.png';

export default function Header() {
  return (
    <div id="header" style={{
    textAlign: 'center' }}>
      <img src={adsaLogoNotext} alt="Siebel Center" />
      <h1 style={{
    paddingLeft: '15%', paddingRight: '15%' }}>
        {config.heading}
      </h1>
      <p>{config.subHeading}</p>
      <h4 style={{
    color: 'orange' }}>
        {/* Look out for events on our{' '}<a href="https://facebook.com/datauiuc" target="_blank">Facebook</a> page! */}
        Look out for events on our mailing list or Slack channel!
      </h4>
    </div>
  );
}
