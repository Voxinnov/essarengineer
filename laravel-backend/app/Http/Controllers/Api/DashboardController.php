<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Inquiry;
use App\Models\Brand;
use App\Models\Category;
use Illuminate\Http\Request;

class DashboardController extends Controller {
    public function stats() {
        return response()->json([
            'status' => 'success',
            'data' => [
                'total_products' => Product::count(),
                'total_inquiries' => Inquiry::count(),
                'pending_tasks' => Inquiry::where('status', 'new')->count(),
                'total_brands' => Brand::count(),
                'recent_inquiries' => Inquiry::with('product')->orderBy('created_at', 'desc')->limit(5)->get()
            ]
        ]);
    }
}
