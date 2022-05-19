<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionRoleTableSeeder extends Seeder
{
    public function run()
    {
        // for admin role
        $admin_permissions = Permission::all();
        Role::findOrFail(1)->syncPermissions($admin_permissions->pluck('id'));

        // for user role
        $user_permissions = $admin_permissions->filter(function ($permission) {
            return substr($permission->title, 0, 5) != 'user_' && substr($permission->title, 0, 5) != 'role_' && substr($permission->title, 0, 11) != 'permission_';
        });
        Role::findOrFail(2)->syncPermissions($user_permissions);
    }
}
