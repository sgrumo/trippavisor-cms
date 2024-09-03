
import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::festival.festival', ({ strapi }) => ({
  async findNearby(params) {

    const knex = strapi.db.connection;

    const { latitude, longitude, radius } = params;

    const res = await knex('festivals')
      .whereRaw(
        `ST_Distance(
        ST_SetSRID(ST_MakePoint((location->'coordinates'->>'lng')::float, (location->'coordinates'->>'lat')::float), 4326),
        ST_SetSRID(ST_MakePoint(?, ?), 4326)
      ) <= ?`,
        [longitude, latitude, radius]
      )
      .select("*");

    return res;
  },
}));
