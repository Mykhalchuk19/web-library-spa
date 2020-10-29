import React from 'react';
import { TFunction } from 'i18next';
import { userInterfaces } from './index';

export type UserItem = {
    id?: number,
    username?: string,
    firstname?: string,
    lastname?: string,
    email?: string,
}

export type IUsersList = {
    users: Array<UserItem> | [],
    limit: number,
    page: number,
    count: number,
}

export type IUser = {
    username?: string | undefined,
    firstname?: string | undefined,
    lastname?: string | undefined,
    email?: string | undefined,
}

export interface UserState {
    userData?: UserItem,
    pending?: boolean,
    list: IUsersList
}

export interface IAction {
    type: string,
    [key: string]: any,
}

export interface IUseUsers {
    usersForShow: Array<userInterfaces.UserItem>,
    limit: number,
    page: number,
    count: number,
    changePage: (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number) => void,
    changeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    handleEditUser: (id?: number) => void,
    handleDeleteUser: (id?: number) => void,
    t: TFunction
}
