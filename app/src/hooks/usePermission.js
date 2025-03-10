import { rolePermistions } from "../configs/rbacConfig"

export const usePermission = (userRole) => {
  const hasPermission = (permission) => {
    const allowedPermissions = rolePermistions[userRole] || []
    return allowedPermissions.includes(permission)
  }

  return { hasPermission }
}