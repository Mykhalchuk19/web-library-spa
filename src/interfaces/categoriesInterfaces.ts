import React from 'react';
import { FormikErrors } from 'formik';
import { TFunction } from 'i18next';

export type TCategoriesState = {
   pending: boolean,
   list: TCategoriesList,
}

export type TCategoriesList = {
    categories: Array<TCategoryItem>,
    limit: number,
    page: number,
    count: number,
}

export type TCategoryItem = {
    id: number,
    title: string,
    short_description: string,
    description: string,
    parent_id: null | number,
    created_by?: number,
    creator: TCategoryCreator,
}

export type TCategoryCreator = {
   firstname: string,
    lastname: string,
}

export type TAction = {
    type: string,
    [key: string]: any,
}

export type TCategoriesValues = {
    title: string,
    // eslint-disable-next-line camelcase
    short_description?: string,
    description?: string
    // eslint-disable-next-line camelcase
    parent_id: null | string | number
}

export type TCategoriesModalView = {
    title: string,
    isOpen: boolean,
    onClose?: () => void | CallableFunction,
    handleSubmit: () => void,
    errors: FormikErrors<TCategoriesModalViewRules>,
    values: TCategoriesValues,
    isSubmitting: boolean,
    handleChange: (e: React.ChangeEvent<any>) => void,
    asyncRequest: any,
    setFieldValue: (field: string, value: null | number, shouldValidate?: (boolean | undefined)) => null | number
}

export type TCategoriesModalViewRules = {
    title?: string
}

export type TCategoriesModalsProps = {
    isOpen: boolean,
    onClose: () => void,
}

export type TCategoriesModalsHook = {
    handleSubmit: () => void,
    errors: FormikErrors<TCategoriesModalViewRules>,
    values: TCategoriesValues,
    isSubmitting: boolean,
    handleChange: (e: React.ChangeEvent<any>) => void,
    setFieldValue: (field: string, value: null | number, shouldValidate?: (boolean | undefined)) => null | number
}

export type TUseCategories = {
    isOpenCreateCategoryModal: boolean,
    openCreateCategoryModalHandler: () => void,
    closeCreateCategoryModalHandler: () => void,
    t: TFunction
}
