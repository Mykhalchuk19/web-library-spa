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
