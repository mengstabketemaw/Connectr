export default {
  url: process.env.REACT_APP_BACKEND_URL,
  demo: process.env.REACT_APP_DEMO === 'true',
  appName: process.env.REACT_APP_SITE_TITLE || 'Clover',
  brand: process.env.REACT_APP_SITE_BRAND || 'Honeyside',
  showCredits: process.env.REACT_APP_SHOW_CREDITS === 'true',
};
