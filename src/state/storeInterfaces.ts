import { UserState } from '../interfaces/userInterfaces';
import { TCategoriesState } from '../interfaces/categoriesInterfaces';
import { AuthState } from '../interfaces/authInterfaces';
import { TUiState } from '../interfaces/uiInterfaces';
import { TBooksState } from '../interfaces/booksInterfaces';
import { TAuthorsState } from '../interfaces/authorsInterfaces';

export type TStore = {
  // _persist: any,
  router: any,
  users: UserState,
  categories: TCategoriesState,
  auth: AuthState,
  ui: TUiState,
  books: TBooksState,
  authors: TAuthorsState
}
