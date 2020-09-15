import React from 'react';

export interface IPrivateRoute {
    component: React.ComponentType
    exact: boolean,
    path: string,
}
