<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post("/createProduct",[App\Http\Controllers\Controller::class,"createProduct"]);
Route::get("/getProduct",[App\Http\Controllers\Controller::class,"getProduct"]);
Route::delete("/deleteProduct/{id}",[App\Http\Controllers\Controller::class,"deleteProduct"]);
Route::put("/updateProduct/{id}",[App\Http\Controllers\Controller::class,"updateProduct"]);
Route::get("/getProductById/{id}",[App\Http\Controllers\Controller::class,"getProductById"]);





