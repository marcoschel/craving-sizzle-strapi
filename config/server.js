module.exports = ({ env }) => ({
  proxy: { koa: true },
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['122761ea733b24935f5e1378a4077541689d69138035ef8ca29202966e7df999', 'f4ef60d41ac722144f693cf770a23459264f42d07c9b5b8478183b6de5e45e0f']),
  },
});
