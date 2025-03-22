import React, { JSX } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { publicRoutes } from './public';
import { privateRoutes } from './private';
import { fallbackRoute } from './fallback';
import { ProtectedRoute } from './components';

type Route = {
    path: string;
    element: JSX.Element;
};

export function AppRoutes() {
    const parseRouteObjects = (
        routes: Route[],
        isPrivate: boolean = false
    ): RouteObject[] => {
        return routes.map((route) => ({
        path: route.path,
        element: isPrivate ? (
            <ProtectedRoute>{route.element}</ProtectedRoute>
        ) : (
            route.element
        ),
        }));
    };

    const publicRouteObjects = parseRouteObjects(publicRoutes);
    const privateRouteObjects = parseRouteObjects(privateRoutes);
    const fallbackRouteObjects = parseRouteObjects(fallbackRoute);

    const routes = [
        ...publicRouteObjects,
        ...privateRouteObjects,
        ...fallbackRouteObjects,
    ];

    const allRoutes = useRoutes(routes);

    return <React.Fragment> {allRoutes} </React.Fragment>;
}