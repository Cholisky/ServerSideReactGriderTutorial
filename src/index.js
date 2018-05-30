import express from 'express';
import { LISTEN_PORT } from './constants/network_constants';
import createStore from './helpers/createStore';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  /**
   * Logic to initialize and load data into the store
   */

  res.send(renderer(req, store));
});

app.listen(LISTEN_PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', LISTEN_PORT);
});
