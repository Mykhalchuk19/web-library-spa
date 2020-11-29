import React, { ReactNode } from 'react';
import { OptionsType, OptionTypeBase } from 'react-select';
import { TFunction } from 'i18next';

export type Button = {
    type?: 'submit' | 'reset' | 'button';
    onClick?: () => void | CallableFunction;
    children?: React.ReactNode;
    className?: string,
    text: string,
    pending?: boolean
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
    value: number | null | string | any[],
    asyncRequest: ({ q, id }: { q: string, id?: number | string | null }) => Promise<any>
    defaultValueFromProps?: Array<TAsyncOption>
}

export type TAsyncSelectHook = {
    loadOptions: (
        inputValue: string,
        callback: (
            options: OptionsType<OptionTypeBase>
        ) => void) => void | Promise<any>,
    defaultValue: any,
    defaultOptions: any,
    t: TFunction
}

export type TAsyncSelect = {
    label: string
    handleChange: (e: React.ChangeEvent<any>) => void,
    className?: string,
    value: null | number | string | Array<any>,
    id: string,
    onChange: (option: any, actionInfo?: any) => number | null | string | any[] | void,
    asyncRequest: any,
    isMulti?: boolean,
    isClearable?: boolean,
    defaultValue?: Array<TAsyncOption>
}

export type TAsyncOption = {
    label: string,
    value: number | null
}
