<?php

use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});
Route::view('test','testing');

Route::view('/{path?}', 'welcome');
Route::view('/{path?}/{id?}', 'welcome');
Route::get('/tests/git', function() {
    return response()->json(['message' => 'Hello World']);
})->middleware('auth')->name('test');
