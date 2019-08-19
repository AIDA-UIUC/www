module.exports = {
  siteTitle: 'ADSA UIUC', // <title>
  manifestName: 'directive',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/images/adsa-logo-notext.png',
  pathPrefix: `/gatsby-starter-directive/`, // This path is subpath of your hosting https://domain/portfolio
  heading: 'The Association of Data Science and Analytics',
  subHeading: 'We are the premier data science student organization at the University of Illinois',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/adsa-uiuc',
    },
    {
      icon: 'fa-facebook',
      name: 'Facebook',
      url: 'https://facebook.com/adsauiuc',
    },
    {
      icon: 'fa-envelope-o',
      name: 'Email',
      url: 'mailto:bailey.tincher@btin.io',
    },
  ],
};
