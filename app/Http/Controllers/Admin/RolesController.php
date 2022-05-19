<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\admin\roles\StoreRoleRequest;
use App\Http\Requests\admin\roles\UpdateRoleRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Symfony\Component\HttpFoundation\Response;

class RolesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
         abort_if(!Auth::user()->can('role_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $roles = Role::with(['permissions'])->get();
        return Inertia::render('admin/roles/index', [
            'roles' => $roles
        ]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        abort_if(!Auth::user()->can('user_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $permissions = Permission::select('id AS value' , 'name AS label')->get();

        return Inertia::render('admin/roles/create', [
            'permissions' => $permissions
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreRoleRequest $request
     * @return RedirectResponse
     */
    public function store(StoreRoleRequest $request)
    {
        $permissions = $request->get('permissions');
        $role = Role::create(['name' => $request->get('name')]);
        $role->syncPermissions($permissions);
        return redirect()->route('admin.roles.index');
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        abort_if(!Auth::user()->can('role_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Inertia\Response
     */
    public function edit(Role $role)
    {
        abort_if(!Auth::user()->can('role_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $permissions = Permission::select('id AS value' , 'name AS label')->get();

        $role->load('permissions');
        return Inertia::render('admin/roles/edit',[
            'role' => $role,
            'permissions' => $permissions,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRoleRequest $request, Role $role)
    {
        $permissions = $request->get('permissions');
        $role->update([
            'name' => $request->get('name'),
        ]);
        $role->syncPermissions($permissions);
        return redirect()->route('admin.roles.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        abort_if(!Auth::user()->can('role_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $users = User::role($role->name)->count();

        if ($users) {
            return back()->with('error', 'This role assined to users , please change users role before delete it');
        }
        $role->delete();
        return back();
    }
}
