import App, { logger } from './app';

App.listen(3000, () => {
  logger.info(`App started on port: 3000`);
});
