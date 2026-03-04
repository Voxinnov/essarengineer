<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\InquiryController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\SettingController;


use App\Http\Controllers\Api\AuthController;

// Public Auth Routes
Route::post('/login', [AuthController::class, 'login']);

// Public Product/Info Routes
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{slug}', [ProductController::class, 'show']);
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/brands', [BrandController::class, 'index']);
Route::post('/inquiry', [InquiryController::class, 'store']); // Submission from users

// Admin Routes (Secured with Sanctum)
Route::middleware('auth:sanctum')->group(function () {
    // Auth Management
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'me']);

    // Dashboard Stats
    Route::get('/admin/stats', [DashboardController::class, 'stats']);
    
    // Product Management
    Route::post('/admin/products', [ProductController::class, 'store']);
    Route::put('/admin/products/{id}', [ProductController::class, 'update']);
    Route::delete('/admin/products/{id}', [ProductController::class, 'destroy']);

    // Category Management
    Route::get('/admin/categories', [CategoryController::class, 'index']);
    Route::post('/admin/categories', [CategoryController::class, 'store']);
    Route::put('/admin/categories/{id}', [CategoryController::class, 'update']);
    Route::delete('/admin/categories/{id}', [CategoryController::class, 'destroy']);

    // Brand Management
    Route::get('/admin/brands', [BrandController::class, 'index']);
    Route::post('/admin/brands', [BrandController::class, 'store']);
    Route::put('/admin/brands/{id}', [BrandController::class, 'update']);
    Route::delete('/admin/brands/{id}', [BrandController::class, 'destroy']);

    // Inquiry Management
    Route::get('/admin/inquiries', [InquiryController::class, 'index']);
    Route::patch('/admin/inquiries/{id}/status', [InquiryController::class, 'updateStatus']); // Contacted, etc.

    // Settings Management
    Route::get('/admin/settings', [SettingController::class, 'index']);
    Route::post('/admin/settings', [SettingController::class, 'update']);
});

