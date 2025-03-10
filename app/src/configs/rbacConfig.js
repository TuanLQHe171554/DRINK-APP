export const USER_ROLES = {
  CLIENT: 'client',
  ADMIN: 'admin'
}

export const permissions = {
  VIEW_HOME: 'view_home',
  VIEW_DASHBOARD: 'view_dashboard',
  VIEW_SUPPORT: 'view_support',
  VIEW_USERS: 'view_users',
}

export const rolePermistions = {
  [USER_ROLES.CLIENT]: [
    permissions.VIEW_HOME,
  ],
  [USER_ROLES.ADMIN]: Object.values(permissions),
}