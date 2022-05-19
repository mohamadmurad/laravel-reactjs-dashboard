<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;


class PermissionsTableSeeder extends Seeder
{
    public function run()
    {
        $permissions = [
//            [
//                'id'    => 1,
//                'name' => 'user_management_access',
//                'guard_name' => 'web',
//            ],
//            [
//                'id'    => 2,
//                'name' => 'permission_create',
//                'guard_name' => 'web',
//            ],
//            [
//                'id'    => 3,
//                'name' => 'permission_edit',
//                'guard_name' => 'web',
//            ],
//            [
//                'id'    => 4,
//                'name' => 'permission_show',
//                'guard_name' => 'web',
//            ],
//            [
//                'id'    => 5,
//                'name' => 'permission_delete',
//                'guard_name' => 'web',
//            ],
//            [
//                'id'    => 6,
//                'name' => 'permission_access',
//                'guard_name' => 'web',
//            ],
            [
                'id'    => 7,
                'name' => 'role_create',
                'guard_name' => 'web',
            ],
            [
                'id'    => 8,
                'name' => 'role_edit',
                'guard_name' => 'web',
            ],
            [
                'id'    => 9,
                'name' => 'role_show',
                'guard_name' => 'web',
            ],
            [
                'id'    => 10,
                'name' => 'role_delete',
                'guard_name' => 'web',
            ],
            [
                'id'    => 11,
                'name' => 'role_access',
                'guard_name' => 'web',
            ],
            [
                'id'    => 12,
                'name' => 'user_create',
                'guard_name' => 'web',
            ],
            [
                'id'    => 13,
                'name' => 'user_edit',
                'guard_name' => 'web',
            ],
            [
                'id'    => 14,
                'name' => 'user_show',
                'guard_name' => 'web',
            ],
            [
                'id'    => 15,
                'name' => 'user_delete',
                'guard_name' => 'web',
            ],
            [
                'id'    => 16,
                'name' => 'user_access',
                'guard_name' => 'web',
            ],
            [
                'id'    => 33,
                'name' => 'profile_password_edit',
                'guard_name' => 'web',
            ],
            [
                'id'    => 34,
                'name' => 'profile_edit',
                'guard_name' => 'web',
            ],
        ];

        Permission::insert($permissions);
    }
}
