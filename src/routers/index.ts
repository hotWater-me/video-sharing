import { ReactElement } from 'react';
import Home from '../views/home';
import Publish from '../views/publish';
import Message from '../views/message';

export type TRouterItem = {
  path: string;
  component: ReactElement;
  exact: Boolean;
  children?: Array<TRouterItem>;
};
export type TRouters = Array<TRouterItem>;
const routers = [
  {
    path: '/',
    component: Home,
    exact: true,
    children: [],
  },
  {
    path: '/publish',
    component: Publish,
    exact: true,
    children: [],
  },
  {
    path: '/message',
    component: Message,
    exact: true,
    children: [],
  },
];

export default routers;
