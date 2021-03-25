import React from 'react';
import ContactForm from './ContactForm';
import config from '../../config';
export default function Footer() {
  return (
    <div id="footer">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
      <div className="container medium">
        <header className="major last">
          <h2>Questions or comments?</h2>
        </header>

        <p>Join us on our Discord! We're always happy to meet new people!</p>

        <ul className="icons">
          {config.socialLinks.map(social => {
            const { icon, name, url } = social;
            return (
              <li key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}>
                  <i className={icon} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
