// Import any types if necessary
import type { Strapi } from '@strapi/strapi';

// Define your plugin configuration
const plugins = {
  'users-permissions': {
    enabled: true,
    config: {
      jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
    },
    bootstrap(app: Strapi) {
      // Optional: Add any custom logic you want to run at the app startup
      console.log('Users-permissions plugin initialized.');
    },
    register(app: Strapi) {
      // Logic during plugin registration (optional)
    },
    registerTrads(app: Strapi) {
      // Optional: Add any translations needed for the plugin (optional)
      return Promise.resolve([]);
    },
  },
  i18n: {
    enabled: true,
    config: {
      // i18n-specific configuration if needed
    },
    bootstrap(app: Strapi) {
      // Optional: Add any custom logic you want to run at the app startup
      console.log('i18n plugin initialized.');
    },
    register(app: Strapi) {
      // Optional: Logic during plugin registration
    },
    registerTrads(app: Strapi) {
      return Promise.resolve([]);
    },
  },
  'strapi-cloud': {
    enabled: true,
    config: {
      // Plugin-specific configuration
    },
    bootstrap(app: Strapi) {
      // Optional: Add any custom logic you want to run at the app startup
      console.log('Strapi-cloud plugin initialized.');
    },
    register(app: Strapi) {
      // Optional: Logic during plugin registration
    },
    registerTrads(app: Strapi) {
      return Promise.resolve([]);
    },
  },
};

export default plugins;
