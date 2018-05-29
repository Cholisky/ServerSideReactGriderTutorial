import express from 'express';
import { LISTEN_PORT } from './constants/ports';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.send(renderer(req));
});

app.listen(LISTEN_PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', LISTEN_PORT);
});
