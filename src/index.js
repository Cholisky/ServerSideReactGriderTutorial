import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import { API_ADDRESS, LISTEN_PORT } from './constants/network_constants';
import createStore from './helpers/createStore';
import renderer from './helpers/renderer';

const app = express();

// any request coming from the browser to the render server with a route that starts with /api
// will be handled by the proxy
// After API address, second proxy function is for this application only to do with Google oAuth flow
app.use(
  '/api',
  proxy(API_ADDRESS, {
    proxyReqOptDecorator(opts) {
      // eslint-disable-next-line no-param-reassign
      opts.headers['x-forwarded-host'] = `localhost:${LISTEN_PORT}`;
      return opts;
    },
  }),
);

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
  // eslint-disable-next-line no-confusing-arrow
    .map(({ route }) => route.loadData ? route.loadData(store) : null)
    // eslint-disable-next-line array-callback-return,consistent-return
    .map((promise) => {
      if (promise) {
        return new Promise((resolve) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  // eslint-disable-next-line consistent-return
  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(context.status || 301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(LISTEN_PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', LISTEN_PORT);
});
