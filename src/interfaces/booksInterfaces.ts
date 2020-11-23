import { FormikErrors } from 'formik';
import React from 'react';
import { TFunction } from 'i18next';

export type TAction = {
    type: string,
    [key: string]: any,
}

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
    publishing_house: string,
    year: string,
    city: string,
    edition: string,
    series: string,
    created_by: number,
    file: TFile,
    category: TCategory,
    category_id: null | number | string
    file_id: null | number | string
}

export type TFile = {
    filename: string
}

export type TCategory = {
    title: string,
}

export type TUseBooks = {
    isOpenAddBookModal: boolean,
    openAddBookModalHandler: () => void,
    closeAddBookModalHandler: () => void,
    t: TFunction,
    booksForShow: Array<TBookForShowItem>,
    limit: number,
    count: number,
    page: number,
    handleEditBook: (id?: number) => void,
    handleDeleteBook: (id?: number) => void,
    isOpenEditBookModal: boolean,
    closeEditBookModal:() => void,
    isOpenDeleteBookModal: boolean,
    closeDeleteBookModal:() => void,
    bookId: number | null | undefined,
}

export type TBookForMap = Pick<TBookItem, 'id' | 'title' | 'short_description' | 'year' | 'city' | 'edition'> & {
    file: TFile,
    category: TCategory,
}

export type TBookForShowItem = Pick<TBookItem, 'id' | 'title' | 'short_description' | 'year' | 'city' | 'edition'> & {
     file: string
     category: string,
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
    year?: string,
    // eslint-disable-next-line camelcase
    publishing_house?: string,
    edition?: string,
    series?: string,
    // eslint-disable-next-line camelcase
    category_id: null | string | number,
    file?: null | File,
}

export type TBookEditValues = TBookValues & {
    file_id: null | string | number
}

export type TBooksModalViewRules = {
    title?: string,
    file?: string,
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

export type TBooksTable = {
    booksForShow: Array<any>,
    limit: number,
    page: number,
    count: number,
    changePage: (
      event: React.MouseEvent<HTMLButtonElement> | null,
      newPage: number) => void,
    changeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    handleEditBook: (id?: number) => void,
    handleDeleteBook: (id?: number) => void,
    t: TFunction,
    onBooksSearch: (value?: string) => void,
}

export type BooksItemTable = {
    id?: number,
    title?: string,
    shortDescription?: string,
    year?: string,
    city?: string,
    file?: string,
    category?: string,
    handleEditBook: (id?: number) => void,
    handleDeleteBook: (id?: number) => void,
}

export type TBooksModalsProps = {
    id?: number | null
    isOpen: boolean,
    onClose: () => void,
}
