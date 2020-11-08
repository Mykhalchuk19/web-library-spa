import React, { ReactNode } from 'react';

export type Button = {
    type?: 'submit' | 'reset' | 'button';
    onClick?: () => void | CallableFunction;
    children?: React.ReactNode;
    className?: string,
    text: string,
}

export type ModalWindow = {
    title?: string,
    isOpen: boolean,
    onClose?: () => void | CallableFunction,
    children?: JSX.Element
}

export type TPermissionComponent = {
    module: string,
    action: string,
    children: ReactNode
}

export type TPrivateRoute = {
    component: React.ComponentType
    exact: boolean,
    path: string,
}
