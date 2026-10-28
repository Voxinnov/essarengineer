<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller {
    public function index(Request $request) {
        $query = Product::with(['category', 'brand'])->where('is_active', true);

        if ($request->has('category')) {
            $query->whereHas('category', function ($q) use ($request) {
                $q->where('slug', $request->category);
            });
        }

        if ($request->has('search')) {
            $query->where('title', 'LIKE', '%' . $request->search . '%')
                  ->orWhere('short_description', 'LIKE', '%' . $request->search . '%');
        }

        return response()->json([
            'status' => 'success',
            'data' => $query->get()
        ]);
    }

    public function show($slug) {
        $product = Product::with(['category', 'brand', 'images'])->where('slug', $slug)->firstOrFail();
        
        return response()->json([
            'status' => 'success',
            'data' => $product
        ]);
    }

    public function store(Request $request) {
        // Admin function
        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'title' => 'required|string|max:255',
            'short_description' => 'required',
            'primary_image_file' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:5000',
            'brochure_file' => 'nullable|mimes:pdf|max:10000',
        ]);

        $data = $request->except(['primary_image_file', 'brochure_file']);

        if ($request->hasFile('primary_image_file')) {
            $path = $request->file('primary_image_file')->store('products/images', 'public');
            $data['primary_image'] = $path;
        }

        if ($request->hasFile('brochure_file')) {
            $path = $request->file('brochure_file')->store('products/brochures', 'public');
            $data['brochure_path'] = $path;
        }

        $product = Product::create($data);

        return response()->json([
            'status' => 'success',
            'message' => 'Product created effectively.',
            'data' => $product
        ], 201);
    }
}
