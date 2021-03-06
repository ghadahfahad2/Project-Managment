const EXPRESS_PORT = 5000;
const apiUrls = {
  development: `http://localhost:${EXPRESS_PORT}`,
  production: `/api`,
};
const API_URL =
  window.location.hostname === "localhost"
    ? apiUrls.development
    : apiUrls.production;
export default API_URL;
