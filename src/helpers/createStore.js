import axios from 'axios';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';
import { API_ADDRESS } from '../constants/network_constants';

export default (req) => {
  const axiosInstance = axios.create({
    baseURL: API_ADDRESS,
    headers: { cookie: req.get('cookie') || '' },
  });

  return createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance)),
  );
};
