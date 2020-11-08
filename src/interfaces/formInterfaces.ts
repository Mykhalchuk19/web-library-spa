import { TFunction } from 'i18next';

export type IObject = {
    [prop: string]: any;
}

export type InputProps = {
    label: string;
    id: string;
    error: string;
    readOnly?: boolean,
    inputProps: IObject;
}

export type DefaultSelectValue = number | string | undefined

export type SelectValue = {
    label: string
    value: string | number
}

export type SelectProps = {
    id: string,
    label: string,
    error?: string | undefined,
    selectValues: SelectValue[],
    selectProps: IObject,
    defaultValue: DefaultSelectValue
}

export type UseCustomSelect = {
    t: TFunction,
}
