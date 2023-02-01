import * as Sentry from "sentry-expo";

Sentry.init({
  dsn: "https://8793352cfc95455787f07d05e5294f76@o177277.ingest.sentry.io/4504605065740288",
  enableInExpoDevelopment: true,
  debug: __DEV__,
});

const Native = Sentry.Native;
export { Native as Sentry };
