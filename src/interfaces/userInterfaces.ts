import React from 'react';
import { TFunction } from 'i18next';
import { FormikErrors } from 'formik';

export type UserItem = {
    id: number,
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    type: number,
    status: 1 | 2 | 3,
    avatar: null | number | string,
    file: null | {
        filename: string,
    },
}

// export type UserItem = Partial<UserInitialValues>

export type TUsersList = {
    users: Array<UserItem>,
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
    pending?: boolean,
    list: TUsersList
}

export type TAction = {
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
    labelForRole: string,
    setFieldValue: (field: string, value: any, shouldValidate?: (boolean | undefined)) => any,
    src: string | null,
    setAvatar: (file: any) => void,
}

export type TUseUsers = {
    usersForShow: Array<UserItem>,
    limit: number,
    page: number,
    count: number,
    handleEditUser: (id?: number) => void,
    handleDeleteUser: (id?: number) => void,
    t: TFunction,
    closeEditModal: () => void,
    isOpenEditModal: boolean,
    closeDeleteModal: () => void,
    isOpenDeleteModal: boolean,
    userId: null | number,
    isPending: boolean
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
    isPending: boolean
}

export type UsersItemTable = {
    id?: number,
    username?: string,
    firstname?: string,
    lastname?: string,
    email?: string,
    status: 1 | 2 | 3,
    filename?: string,
    handleEditUser: (id?: number) => void,
    handleDeleteUser: (id?: number) => void,
    t: TFunction
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
