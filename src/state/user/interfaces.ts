export interface IUserData {
    id: number,
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    type: number,
    permissions: Array<PermissionItem>
}

export type PermissionItem = {
    module: string,
    read: string,
    create: string,
    update: string,
    delete: string,
}

type IList = {
    users: Array<IUserData>,
    limit: number,
    page: number,
}

export interface UserState {
    userData?: IUserData,
    pending?: boolean,
    list: IList
}

export interface IAction {
    type: string,
    [key: string]: any,
}
