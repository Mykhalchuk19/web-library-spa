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
