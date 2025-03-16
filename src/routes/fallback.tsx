import { NotFound } from '../pages';

export const fallbackRoute = [
    {
        path: '*',
        element: <NotFound />,
    },
];