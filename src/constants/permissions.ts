const ROLES = {
  USER: 1,
  MANAGER: 2,
  ADMIN: 3,
};

const ROLES_LIST = [
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

const ACTIONS = {
  READ: 'read',
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
};

const MODULES = {
  USERS: 'users',
  CATEGORIES: 'categories',
};

export {
  MODULES,
  ACTIONS,
  ROLES,
  ROLES_LIST,
};
