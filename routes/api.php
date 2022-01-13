<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\UserController;
// use DB;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|d
*/
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); 
Route::get('products', [ProductController::class, 'getproducts']);
Route::group(['middleware' => ['web']], function () {
    Route::post('cart', [ProductController::class, 'addtoCart']);
    Route::get('get/cart', [ProductController::class, 'getCart']);
    Route::post('remove/cart', [ProductController::class, 'removeCart']);
    Route::get('search/product/{name?}', [ProductController::class, 'SearchProduct']);
});
Route::post('login', [UserController::class, 'login']);
