// #region imports
    // #region libraries
    import React from 'react';

    import {
        PluridReactRoute,
    } from '@plurid/plurid-react';
    // #endregion libraries


    // #region external
    import Head from '~kernel-components/Head';

    import LoginPlane from '~kernel-planes/Login';
    import DashboardPlane from '~shared/kernel/planes/Dashboard';
    import SimulationPlane from '~kernel-planes/Simulation';
    import WorldPlane from '~kernel-planes/World';
    import NotFoundPlane from '~kernel-planes/NotFound';

    import Home from '~kernel-containers/Home';
    // #endregion external
// #endregion imports



// #region module
const indexRoute: PluridReactRoute = {
    value: '/',
    exterior: Home,
    planes: [
        [
            '/login',
            LoginPlane,
        ],
        [
            '/dashboard/:id',
            DashboardPlane,
        ],
        [
            '/simulation',
            SimulationPlane,
        ],
        [
            '/world/:id',
            WorldPlane,
        ],
    ],
    view: [],
    defaultConfiguration: {
        elements: {
            plane: {
                controls: {
                    title: false,
                },
            },
        },
    },
};


const notFoundRoute: PluridReactRoute = {
    value: '/not-found',
    exterior: () => (
        <Head
            title="not found · beso"
        />
    ),
    planes: [
        [ '/not-found', NotFoundPlane ],
    ],
    view: [
        '/not-found',
    ],
};


const routes: PluridReactRoute[] = [
    indexRoute,
    notFoundRoute,
];
// #endregion module



// #region exports
export default routes;
// #endregion exports
