import { createLogger, format, transports } from "winston";

const customFormat = format.printf(({
    message, stack, label, timestamp,
  }) => {
    let errorString = `${timestamp} [${label}]: ${JSON.stringify(message)}`;
    if (stack) {
      errorString += `\nSTACK:\n${stack}`;
    }
    return errorString;
  });


export default ({label}) => {
    const logger = createLogger({
        level: 'info',
        format: format.combine(
          format.colorize(),
          format.json(),
          format.label({label}),
          format.timestamp(),
          customFormat
        ),
        transports: [
          new transports.File({ filename: 'logs/errors.log', level: 'error' }),
          new transports.File({ filename: 'logs/combined.log' })
        ]
      });
      if (process.env.NODE_ENV !== 'production') {
        logger.add(new transports.Console({
            handleExceptions: true,
        }));
      } 
      return logger
}

