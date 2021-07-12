// import helmet from "helmet";
// import path from "path";

const helmet = require("helmet");
const path = require("path");

// export const configuredHelmet = () => helmet({
	exports.configuredHelmet = () =>
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          objectSrc: ["'none'"],
          scriptSrc: ["'self'", "unpkg.com", "polyfill.io"],
          styleSrc: ["'self'", "https: 'unsafe-inline'"],
          upgradeInsecureRequests: [],
        },
      },
    });

// export const httpsOnly = () => (req, res, next) => {
	exports.httpsOnly = () => (req, res, next) => {
	if (!req.secure) {
		return res.redirect(301, `https://${req.headers.host}${req.originalUrl}`);
	}
	next();
};

// export const logErrors = () => (err, _, res, next) => {

exports.logErrors = () => (err, _, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  console.error(err);
  res.sendStatus(500);
};

// export const pushStateRouting = (apiRoot, staticDir) => (req, res, next) => {
	exports.pushStateRouting = (apiRoot, staticDir) => (req, res, next) => {
    console.log(`${apiRoot}, ${staticDir}`)
	if (req.method === "GET" && !req.url.startsWith(apiRoot)) {
		return res.sendFile(path.join(staticDir, "index.html"));
	}
	next();
};
