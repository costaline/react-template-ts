import React, { ComponentType, FC } from 'react';
import { RouteComponentProps } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';

import { RouteMeta, SwitchRoutesProps } from './SwitchRoutes.types';

export const SwitchRoutes: FC<SwitchRoutesProps> = (
  props: SwitchRoutesProps
) => {
  const {
    routes,
    path = '',
    routeComponent: RouteComponent = Route,
    parentComponentProps = {},
  } = props;

  return (
    <Switch>
      {routes.map((item, i) => {
        const {
          path: routePath = '',
          routes: subRoutes,
          redirect,
          meta,
          component: Component,
          ...restRouteProps
        } = item;

        if (meta?.skip) return null;

        if (subRoutes && subRoutes.length) {
          return (
            <RouteComponent
              key={path + routePath || i}
              path={path + routePath}
              render={(
                componentProps: RouteComponentProps<
                  Record<string, string | undefined>
                >
              ) => (
                <SwitchRoutes
                  parentComponentProps={componentProps}
                  path={path + routePath}
                  routes={subRoutes}
                />
              )}
            />
          );
        }

        if (redirect) {
          let pathToRedirect = '';

          if (Array.isArray(redirect)) {
            const [redirectPath, isRoot] = redirect;

            pathToRedirect = isRoot ? redirectPath : path + redirectPath;
          } else if (typeof redirect === 'string') {
            pathToRedirect = path + redirect;
          } else {
            throw new Error(
              `Unexpected redirect value. Must only be "string" or [string, boolean]`
            );
          }

          return (
            <Redirect
              key={path + routePath || i}
              from={path + routePath}
              to={pathToRedirect}
              {...restRouteProps}
            />
          );
        }

        if (isComponentGuard(Component)) {
          return (
            <RouteComponent
              key={path + routePath || i}
              path={path + routePath}
              {...restRouteProps}
              render={(
                componentProps: RouteComponentProps<
                  Record<string, string | undefined>
                >
              ) => (
                <Component
                  {...componentProps}
                  {...parentComponentProps}
                  meta={meta}
                />
              )}
            />
          );
        }

        return null;
      })}
    </Switch>
  );
};

function isComponentGuard(
  c: unknown
): c is ComponentType<Record<string, unknown> & RouteMeta> {
  return !!c;
}
