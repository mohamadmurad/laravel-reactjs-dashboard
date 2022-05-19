<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
   // dd(Auth::user()->getPermissionsViaRoles()->groupBy('name'));
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified','password.confirm'])->name('dashboard');


Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => ['auth','verified']], function () {

    // roles
 //   Route::delete('roles/destroy', 'RolesController@massDestroy')->name('roles.massDestroy');
    Route::resource('roles', \App\Http\Controllers\Admin\RolesController::class);


    // users
    Route::resource('users', \App\Http\Controllers\Admin\UsersController::class);
});

require __DIR__.'/auth.php';


