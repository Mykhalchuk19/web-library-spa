export interface IUserData {
    id?: number,
    username?: string,
    firstname?: string,
    lastname?: string,
    email?: string,
}

export interface UserState {
    userData?: IUserData,
    pending?: boolean,
}
