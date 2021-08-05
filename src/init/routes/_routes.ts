import { lazy } from 'react';

import { RouteType } from '@@/shared/components/SwitchRoutes/SwitchRoutes.types';

type Meta = {
  title?: string;
};

export type RoutesType = Array<RouteType<Meta>>;

export const routes: RoutesType = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('@@/pages/index')),
    meta: {
      title: 'Main',
    },
  },
  {
    path: '/',
    component: lazy(() => import('@@/pages/404')),
  },
];
