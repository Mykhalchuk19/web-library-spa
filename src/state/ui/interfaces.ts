export type UiState = {
    isLeftSideBar: boolean,
}

export interface IAction {
    type: string,
    [key: string]: any,
}
