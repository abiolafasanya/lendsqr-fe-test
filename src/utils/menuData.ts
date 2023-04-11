import {
  badge,
  briefcase,
  chart,
  clipboard,
  galaxy,
  loan,
  piggyBank,
  sack,
  scroll,
  slider,
  userService,
  userFriend,
  user,
  handShake,
  product,
  coin,
  home,
  caret,
  whitelisted,
  blacklisted,
  tire,
} from './images';

export const menus = {
  organization: { icon: briefcase, icon2: caret, name: 'Switch Organization' },
  dashboard: { icon: home, name: 'Dashboard' },
  customer: {
    name: 'Customers',
    menu: [
      { icon: user, name: 'Users', url: '/users' },
      { icon: userFriend, name: 'Guarantor', url: '/guarantor' },
      { icon: sack, name: 'Loans', url: '/loans' },
      { icon: handShake, name: 'Decision Models', url: '/decision-models' },
      { icon: piggyBank, name: 'Savings', url: '/savings' },
      { icon: loan, name: 'Loan Requests', url: '/loans' },
      { icon: whitelisted, name: 'Whitelist', url: '/whitelist' },
      { icon: blacklisted, name: 'Karma', url: '/karma' },
    ],
  },
  business: {
    name: 'Business',
    menu: [
      { icon: briefcase, name: 'Organization', url: '/organization' },
      { icon: loan, name: 'Loan Products', url: '/loan' },
      { icon: product, name: 'Savings Product', url: '/products' },
      { icon: galaxy, name: 'Fees and Charges', url: 'fees' },
      { icon: coin, name: 'Transaction', url: '/transactions' },
      { icon: galaxy, name: 'Services', url: '/services' },
      { icon: userService, name: 'Service Account', url: '/service-account' },
      { icon: scroll, name: 'Settlements', url: '/settlements' },
      { icon: chart, name: 'Reports', url: '/reports' },
    ],
  },
  settings: {
    name: 'Settings',
    menu: [
      { icon: slider, name: 'Preference', url: '/preference' },
      { icon: badge, name: 'Fees and Pricing', url: '/fees-pricing' },
      { icon: clipboard, name: 'Audits Logs', url: '/audits' },
      {icon: tire, name: 'System Message', url: '/system-message',},
    ],
  },

 
};
