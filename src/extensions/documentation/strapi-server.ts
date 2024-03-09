'use strict';

import documentation from "./controllers/documentation";
import { routes } from "./routes/custom-documentation";

module.exports = async (plugin) => {
  // Controllers
  plugin.controllers.documentation = {
    ...plugin.controllers.documentation,
    ...documentation
  };
  // Routes
  plugin.routes = [...plugin.routes, ...routes];
  return plugin;
};
