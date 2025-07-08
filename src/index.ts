import App, { logger } from './app';
import prismaClient from './config/db/client';

prismaClient
  .$connect()
  .then(() => logger.success('Db connectec successfully..'))
  .catch((error) => {
    logger.error(`Failed to connect to DB:${error}`);
    process.exit(1);
  });

App.listen(3000, () => {
  logger.info(`App started on port: 3000`);
});
