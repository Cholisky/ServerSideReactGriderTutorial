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

  // eslint-disable-next-line no-console
  console.log('src/index store: ', store);
  // eslint-disable-next-line arrow-body-style
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(LISTEN_PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', LISTEN_PORT);
});
