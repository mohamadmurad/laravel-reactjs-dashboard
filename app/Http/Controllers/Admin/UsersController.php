<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\admin\users\StoreUserRequest;
use App\Http\Requests\admin\users\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use Symfony\Component\HttpFoundation\Response;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        abort_if(!Auth::user()->can('user_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $users = User::with('roles')->get();

        return Inertia::render('admin/users/index',[
            'users' => $users
        ]);
       // return view('admin.users.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        abort_if(!Auth::user()->can('user_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $roles = Role::select('id AS value' , 'name AS label')->get();
        return Inertia::render('admin/users/create',[
            'roles' => $roles,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserRequest $request)
    {


        $user = User::create($request->all());
        $user->syncRoles($request->get('roles'));

        return redirect()->route('admin.users.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        abort_if(!Auth::user()->can('user_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param User $user
     * @return \Inertia\Response
     */
    public function edit(User $user)
    {
        abort_if(!Auth::user()->can('user_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $user->load('roles');
        $roles = Role::select('id AS value' , 'name AS label')->get();
        return Inertia::render('admin/users/edit',[
            'user' => $user,
            'roles' => $roles,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateUserRequest $request
     * @param User $user
     * @return RedirectResponse
     */
    public function update(UpdateUserRequest $request, User $user)
    {


        $user->update([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => $request->get('password') ?? $user->password,
        ]);
        $user->syncRoles($request->get('roles'));
        return redirect()->route('admin.users.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return RedirectResponse
     */
    public function destroy(User $user)
    {
        abort_if(!Auth::user()->can('user_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $user->delete();
        return back();
    }
}
