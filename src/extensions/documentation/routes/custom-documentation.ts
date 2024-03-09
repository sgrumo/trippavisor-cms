export const routes = [
  {
    method: 'GET',
    path: '/openapi.json',
    handler: 'documentation.openapi',
    config: {
      auth: false,
    }
  },
  {
    method: 'GET',
    path: '/v:major(\\d+).:minor(\\d+).:patch(\\d+)/openapi.json',
    handler: 'documentation.openapi',
    config: {
      auth: false,
    }
  }
];
