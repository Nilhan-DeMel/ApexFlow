/**
 * @Meta
 * @Intent Centralized structured logging utility for ApexFlow.
 * @Inputs Log level, message, optional metadata object.
 * @Outputs JSON-formatted log entries to console/file.
 * @Dependencies winston
 */
const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.json()
  ),
  defaultMeta: { service: 'apexflow-backend' },
  transports: [new transports.Console()],
});

module.exports = logger;
