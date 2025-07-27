import type { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Index = lazy(() => import('@/views/index'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Index />,
  },
];

export default routes;
