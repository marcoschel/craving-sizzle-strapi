module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'supersecret'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});