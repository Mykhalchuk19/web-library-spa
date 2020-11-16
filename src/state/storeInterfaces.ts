import { UserState } from '../interfaces/userInterfaces';
import { TCategoriesState } from '../interfaces/categoriesInterfaces';
import { AuthState } from '../interfaces/authInterfaces';

export type TStore = {
  _persist: any,
  router: any,
  user: UserState,
  categories: TCategoriesState,
  auth: AuthState
}
