const apiRoutes = require('./api.routes');
const appRoutes = require('./app.routes');


const appRouter = function (app) {
  app.use("/", appRoutes);
  app.use("/api", apiRoutes);
}

module.exports = appRouter;
