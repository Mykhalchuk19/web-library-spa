import React from 'react';
import { TFunction } from 'i18next';
import { FormikErrors } from 'formik';

export type UserItem = {
    id?: number,
    username?: string,
    firstname?: string,
    lastname?: string,
    email?: string,
    type?: number | undefined,
    permissions?: Array<PermissionItem>
}

export type PermissionItem = {
    module: string,
    read: string,
    create: string,
    update: string,
    delete: string,
}

export type TUsersList = {
    users: Array<UserItem> | [],
    limit: number,
    page: number,
    count: number,
}

export type TUserValues = {
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    type: number | undefined,
}

export type TUserRules = {
    username?: string,
    firstname?: string,
    lastname?: string,
    email?: string,
    type?: string,
}

export type TUser = {
    username?: string | undefined,
    firstname?: string | undefined,
    lastname?: string | undefined,
    email?: string | undefined,
    type?: number | undefined,
}

export type UserState = {
    userData?: UserItem,
    pending?: boolean,
    list: TUsersList
}

export interface IAction {
    type: string,
    [key: string]: any,
}

export type TUseProfile = {
    user: TUser,
    isPending: boolean
    handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void,
    values: TUser,
    errors: FormikErrors<TUserRules>,
    handleChange: (e: React.ChangeEvent<any>) => void,
    setSubmitting: (isSubmitting: boolean) => void,
    isSubmitting: boolean,
    t: TFunction,
    labelForRole: string
}

export type TUseUsers = {
    usersForShow: Array<UserItem>,
    limit: number,
    page: number,
    count: number,
    changePage: (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number) => void,
    changeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    handleEditUser: (id?: number) => void,
    handleDeleteUser: (id?: number) => void,
    t: TFunction,
    closeEditModal: () => void,
    isOpenEditModal: boolean,
    closeDeleteModal: () => void,
    isOpenDeleteModal: boolean,
    userId: null | number,
    onUsersSearch: (value?: string) => void,
}

export type TUsersTable = {
    usersForShow: Array<UserItem>,
    limit: number,
    page: number,
    count: number,
    changePage: (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number) => void,
    changeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    handleEditUser: (id?: number) => void,
    handleDeleteUser: (id?: number) => void,
    t: TFunction,
    onUsersSearch: (value?: string) => void,
}

export type UsersItemTable = {
    id: number | undefined,
    username: string | undefined,
    firstname: string | undefined,
    lastname: string | undefined,
    email: string | undefined,
    handleEditUser: (id?: number) => void,
    handleDeleteUser: (id?: number) => void,
}

export type TUserPaginationProps = {
    count: number,
    page: number,
    rowsPerPage: number,
    onChangePage: (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number) => void;
}

export type TUseUsersPagination = {
    rowsPerPage: number,
    page: number,
    count: number,
    handleNextPage: (event: React.MouseEvent<HTMLButtonElement>) => void,
    handlePreviousPage: (event: React.MouseEvent<HTMLButtonElement>) => void,
    handleLastPage: (event: React.MouseEvent<HTMLButtonElement>) => void,
    handleFirstPage: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export type TEditUserModal = {
    isOpen : boolean,
    closeEditModal: () => void,
    userId: number | null,
}

export type TUseUserEdit = {
    handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void,
    values: TUserValues,
    errors: FormikErrors<TUserRules>,
    handleChange: (e: string) => void,
    isSubmitting: boolean,
}

export type TDeleteUserModal = {
    userId: null | number,
    closeDeleteModal: () => void,
    isOpen: boolean,
}
