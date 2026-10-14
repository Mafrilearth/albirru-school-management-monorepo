type LogLevel = "info" | "warn" | "error" | "debug";

interface LogPayload {
  level: LogLevel;
  message: string;
  module?: string;
  context?: Record<string, unknown>;
  timestamp: string;
}

function writeLog(
  level: LogLevel,
  message: string,
  module?: string,
  context?: Record<string, unknown>,
) {
  const payload: LogPayload = {
    level,
    message,
    module,
    context,
    timestamp: new Date().toISOString(),
  };

  const formatted = JSON.stringify(payload);

  switch (level) {
    case "error":
      console.error(formatted);
      break;
    case "warn":
      console.warn(formatted);
      break;
    default:
      console.log(formatted);
      break;
  }
}

export const logger = {
  info: (message: string, module?: string, context?: Record<string, unknown>) =>
    writeLog("info", message, module, context),
  warn: (message: string, module?: string, context?: Record<string, unknown>) =>
    writeLog("warn", message, module, context),
  error: (
    message: string,
    module?: string,
    context?: Record<string, unknown>,
  ) => writeLog("error", message, module, context),
  debug: (
    message: string,
    module?: string,
    context?: Record<string, unknown>,
  ) => writeLog("debug", message, module, context),
};
