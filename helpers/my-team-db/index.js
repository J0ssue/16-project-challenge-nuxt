import home from './home';
import about from './about';
import contact from './contact';
export default {
  pages: ['home', 'about'],
  hamburgerIcon: '/my-team/icon-hamburger.svg',
  closeIcon: '/my-team/icon-close.svg',
  home,
  about,
  contact,
  cta: {
    title: 'Ready to get started?'
  },
  footer: {
    logo: '/my-team/logo.svg',
    pages: ['contact', 'about'],
    social: [{
        link: 'https://www.facebook.com',
        icon: '/my-team/icon-facebook.svg'
      },
      {
        link: 'https://www.pinterest.com',
        icon: '/my-team/icon-pinterest.svg'
      },
      {
        link: 'https://www.twitter.com',
        icon: '/my-team/icon-twitter.svg'
      }
    ],
    address: '987 Hillcrest Lane<br> Irvine, CA<br> California 92714<br> Call Us:949-833-7432',
    copyright: 'Copyright 2020. All Rights Reserved'
  }
};
