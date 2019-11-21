import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://9ecee70bf75a41da900a409e66d7c51b@sentry.io/1829227"
  });
}

function log(error) {
  Sentry.captureException(error);
}

//Interface of logging service
export default {
  init,
  log
};
