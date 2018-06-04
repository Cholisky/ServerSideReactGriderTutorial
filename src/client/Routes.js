import App from './App';
import AdminsListPage from './pages/AdminListPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import UsersListPage from './pages/UsersListPage';
import NotAuthedPage from './pages/NotAuthedPage';
import { ROUTES } from '../constants/network_constants';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: ROUTES.HOME,
        exact: true,
      },
      {
        ...UsersListPage,
        path: ROUTES.USERS,
      },
      {
        ...AdminsListPage,
        path: ROUTES.ADMINS,
      },
      {
        ...NotAuthedPage,
        path: ROUTES.NO_AUTH,
        exact: true,
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
