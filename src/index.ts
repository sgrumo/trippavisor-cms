export default {
  register({ strapi }) {
    if (strapi.plugin('documentation')) {
      const override = {
        info: { version: '1.0.0' },
      }

      strapi
        .plugin('documentation')
        .service('override')
        .registerOverride(override, {
          pluginOrigin: 'upload',
          excludeFromGeneration: ['upload'],
        });
    }
  },

  bootstrap() {
  },
};
