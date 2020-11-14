import React, { ReactNode } from 'react';
import {
  ActionMeta, OptionsType, OptionTypeBase, ValueType,
} from 'react-select';

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

export type TAsyncSelectHookProps = {
    value: number | null | string,
    asyncRequest: ({ q }: { q: string }) => Promise<any>
}

export type TAsyncSelectHook = {
    loadOptions: (
        inputValue: string,
        callback: (
            options: OptionsType<OptionTypeBase>
        ) => void) => void | Promise<any>
}

export type TAsyncSelect = {
    handleChange: (e: React.ChangeEvent<any>) => void,
    className?: string,
    value: null | number | string,
    id: string,
    onChange: (option: any) => number | null | string,
    asyncRequest: any;
}

export type TAsyncOption = {
    label: string,
    value: number | null
}
