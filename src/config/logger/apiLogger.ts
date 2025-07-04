import chalk from 'chalk';

export class ApiLogger {
  info(message: string) {
    console.info(`${chalk.bgGrey('info')}:${chalk.whiteBright(message.toUpperCase())}`);
  }

  success(message: string) {
    console.log(`${chalk.bgGreen('Success')}:${chalk.whiteBright(message.toUpperCase())}`);
  }

  warn(message: string) {
    console.warn(`${chalk.bgYellow('Warning')}:${chalk.whiteBright(message.toUpperCase())}`);
  }

  error(message: string) {
    console.error(`${chalk.bgRed('Error:')}:${chalk.whiteBright(message)}`);
  }
}
