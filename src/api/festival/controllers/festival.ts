
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::festival.festival', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;
    const { filters } = query;

    let entities;

    if (filters && filters.latitude && filters.longitude && filters.radius) {
      const geolocationParams = {
        latitude: parseFloat(filters.latitude),
        longitude: parseFloat(filters.longitude),
        radius: parseFloat(filters.radius),
      };
      entities = await strapi.service('api::festival.festival').findNearby(geolocationParams);
    } else {
      entities = await super.find(ctx);
    }


    const sanitizedEntities = await this.sanitizeOutput(entities, ctx);

    return this.transformResponse(sanitizedEntities);
  },
}));
