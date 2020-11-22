import { FormikErrors } from 'formik';
import React from 'react';
import { TFunction } from 'i18next';
import { FormikState } from 'formik/dist/types';
import { TCategoriesModalViewRules, TCategoriesValues } from './categoriesInterfaces';

export type TBooksState = {
    pending: boolean,
    list: TBooksList,
}

export type TBooksList = {
    books: Array<TBookItem>,
    limit: number,
    page: number,
    count: number,
}

export type TBookItem = {
    id: number,
    title: string,
    short_description: string,
    description: string,
    parent_id: null | number,
    created_by?: number,
}

export type TUseBooks = {
    isOpenAddBookModal: boolean,
    openAddBookModalHandler: () => void,
    closeAddBookModalHandler: () => void,
    t: TFunction
}

export type TBooksModalView = {
    title: string,
    isOpen: boolean,
    onClose?: () => void | CallableFunction,
    handleSubmit: () => void,
    errors: FormikErrors<TBooksModalViewRules>,
    values: TBookValues,
    isSubmitting: boolean,
    handleChange: (e: React.ChangeEvent<any>) => void,
    asyncRequest: any,
    setFieldValue: (
        field: string,
        value: null | number,
        shouldValidate?: (boolean | undefined)
    ) => null | number
}

export type TBookValues = {
    title: string,
    // eslint-disable-next-line camelcase
    short_description?: string,
    city?: string,
    year?: number | null,
    // eslint-disable-next-line camelcase
    publishing_house?: string,
    edition?: string,
    series?: string,
    // eslint-disable-next-line camelcase
    category_id: null | string | number,
    file?: null | File
}

export type TBooksModalViewRules = {
    title?: string,
    file?: string,
}

export type TBooksModalsProps = {
    id?: number | null
    isOpen: boolean,
    onClose: () => void,
}

export type TBooksModalsHook = {
    handleSubmit: () => void,
    errors: FormikErrors<TBooksModalViewRules>,
    values: TBookValues,
    isSubmitting: boolean,
    handleChange: (e: React.ChangeEvent<any>) => void,
    setFieldValue: (field: string, value: null | number, shouldValidate?: (boolean | undefined)) => null | number
    onCloseHandler: () => void,
}
