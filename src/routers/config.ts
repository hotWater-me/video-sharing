import { ReactElement, lazy } from 'react';

const AsyncHome = lazy(() => import('../views/home'));
const AsyncPublish = lazy(() => import('../views/publish'));
const AsyncMessage = lazy(() => import('../views/message'));

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
    component: AsyncHome,
    exact: true,
    children: [],
  },
  {
    path: '/publish',
    component: AsyncPublish,
    exact: true,
    children: [],
  },
  {
    path: '/message',
    component: AsyncMessage,
    exact: true,
    children: [],
  },
];

export default routers;
