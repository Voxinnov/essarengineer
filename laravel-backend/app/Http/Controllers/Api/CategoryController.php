<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller {
    public function index() {
        return response()->json([
            'status' => 'success',
            'data' => Category::withCount('products')->get()
        ]);
    }

    public function store(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255|unique:categories,name',
            'description' => 'nullable|string'
        ]);

        $category = Category::create([
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'description' => $request->description
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Category created successfully.',
            'data' => $category
        ], 201);
    }

    public function update(Request $request, $id) {
        $category = Category::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255|unique:categories,name,' . $id,
            'description' => 'nullable|string'
        ]);

        $category->update([
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'description' => $request->description
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Category updated successfully.',
            'data' => $category
        ]);
    }

    public function destroy($id) {
        $category = Category::findOrFail($id);
        
        if ($category->products()->count() > 0) {
            return response()->json([
                'status' => 'error',
                'message' => 'Cannot delete category with associated products.'
            ], 422);
        }

        $category->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Category deleted successfully.'
        ]);
    }
}
