export default {
  url: process.env.REACT_APP_BACKEND_URL,
  demo: process.env.REACT_APP_DEMO === 'true',
  appName: process.env.REACT_APP_SITE_TITLE || 'Connectr',
  brand: process.env.REACT_APP_SITE_BRAND || 'mengstab.dev',
  showCredits: process.env.REACT_APP_SHOW_CREDITS === 'true',
};
