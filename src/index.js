import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import { LISTEN_PORT } from './constants/network_constants';
import createStore from './helpers/createStore';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

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
