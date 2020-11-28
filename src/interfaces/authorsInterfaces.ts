import { FormikErrors } from 'formik';
import React from 'react';
import { TFunction } from 'i18next';

export type TAction = {
  type: string,
  [key: string]: any,
}

export type TAuthorsState = {
  pending: boolean,
  list: TAuthorsList,
}

export type TAuthorsList = {
  authors: Array<TAuthorItem>,
  limit: number,
  page: number,
  count: number,
}

export type TAuthorItem = {
  id: number,
  firstname: string,
  lastname: string,
}

export type TAuthorsModalViewRules = {
  firstname?: string
}

export type TAuthorsValues = {
  firstname: string,
  lastname: string,
}

export type TAuthorsModalView = {
  title: string,
  isOpen: boolean,
  onClose?: () => void | CallableFunction,
  handleSubmit: () => void,
  errors: FormikErrors<TAuthorsModalViewRules>,
  values: TAuthorsValues,
  isSubmitting: boolean,
  handleChange: (e: React.ChangeEvent<any>) => void,
}

export type TAuthorsModalsProps = {
  id?: number | null
  isOpen: boolean,
  onClose: () => void,
}

export type TAuthorsModalsHook = {
  handleSubmit: () => void,
  errors: FormikErrors<TAuthorsModalViewRules>,
  values: TAuthorsValues,
  isSubmitting: boolean,
  handleChange: (e: React.ChangeEvent<any>) => void,
  onCloseHandler: () => void,
}

export type TAuthorsTable = {
  authorsForShow: Array<any>,
  limit: number,
  page: number,
  count: number,
  changePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number) => void,
  changeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  handleEditAuthor: (id?: number) => void,
  handleDeleteAuthor: (id?: number) => void,
  t: TFunction,
  onAuthorsSearch: (value?: string) => void,
}

export type TAuthorsItemTable = {
  id?: number,
  firstname?: string,
  lastname?: string,
  handleEditAuthor: (id?: number) => void,
  handleDeleteAuthor: (id?: number) => void,
}

export type TAuthorForMapItem = Pick<TAuthorItem, 'id' | 'firstname' | 'lastname'>

export type TAuthorForShowItem = Pick<TAuthorItem, 'id' | 'firstname' | 'lastname'>

export type TUseAuthors = {
  isOpenCreateAuthorModal: boolean,
  openCreateAuthorModalHandler: () => void,
  closeCreateAuthorModalHandler: () => void,
  t: TFunction,
  authorsForShow: Array<TAuthorForShowItem>,
  limit: number,
  count: number,
  page: number,
  handleEditAuthor: (id?: number) => void,
  handleDeleteAuthor: (id?: number) => void,
  isOpenEditAuthorModal: boolean,
  closeEditAuthorModal:() => void,
  isOpenDeleteAuthorModal: boolean,
  closeDeleteAuthorModal:() => void,
  authorId: number | null | undefined,
}
