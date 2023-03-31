package api

import "github.com/cavelms/internal/model"

// Check if a given string is a valid permission
func isValidPermissions(permissions []model.AllowedPermission) bool {
	for _, p := range permissions {
		if !p.IsValid() {
			return false
		}
	}
	return true
}

func removeInvalidPermissions(permission *model.Permission, allowedPermissions []model.AllowedPermission) {
	var validPermissions []model.AllowedPermission
	for _, p := range permission.Permissions {
		
		if contains(allowedPermissions, p) {
			validPermissions = append(validPermissions, p)
		}
	}
	permission.Permissions = validPermissions
}

func containsMany(allowed []model.AllowedPermission, requested []model.AllowedPermission) bool {
	for _, perm := range requested {
		found := false
		for _, allowedPerm := range allowed {
			if perm == allowedPerm {
				found = true
				break
			}
		}
		if !found {
			return false
		}
	}
	return true
}

func contains(allowed []model.AllowedPermission, permission model.AllowedPermission) bool {
	for _, p := range allowed {
		if p == permission {
			return true
		}
	}
	return false
}
