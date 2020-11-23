const ROLES = {
  USER: 1,
  MANAGER: 2,
  ADMIN: 3,
  SUPER_ADMIN: 4,
};

export const ROLES_LIST_FOR_UPDATE = [
  {
    label: 'User',
    value: 1,
  },
  {
    label: 'Manager',
    value: 2,
  },
  {
    label: 'Admin',
    value: 3,
  },
];

const ROLES_LIST = [
  ...ROLES_LIST_FOR_UPDATE,
  {
    label: 'Super admin',
    value: 4,
  },
];

const ACTIONS = {
  READ: 'read',
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
};

const MODULES = {
  USERS: 'users',
  CATEGORIES: 'categories',
  BOOKS: 'books',
};

export {
  MODULES,
  ACTIONS,
  ROLES,
  ROLES_LIST,
};
