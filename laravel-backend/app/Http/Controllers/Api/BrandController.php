<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BrandController extends Controller {
    public function index() {
        return response()->json([
            'status' => 'success',
            'data' => Brand::withCount('products')->get()
        ]);
    }

    public function store(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255|unique:brands,name',
            'logo_file' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'description' => 'nullable'
        ]);

        $data = $request->except('logo_file');
        $data['slug'] = Str::slug($request->name);

        if ($request->hasFile('logo_file')) {
            $path = $request->file('logo_file')->store('brands/logos', 'public');
            $data['logo_path'] = $path;
        }

        $brand = Brand::create($data);

        return response()->json([
            'status' => 'success',
            'message' => 'Brand created effectively.',
            'data' => $brand
        ], 201);
    }

    public function update(Request $request, $id) {
        $brand = Brand::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255|unique:brands,name,' . $id,
            'logo_file' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'description' => 'nullable'
        ]);

        $data = $request->except('logo_file');
        $data['slug'] = Str::slug($request->name);

        if ($request->hasFile('logo_file')) {
            $path = $request->file('logo_file')->store('brands/logos', 'public');
            $data['logo_path'] = $path;
        }

        $brand->update($data);

        return response()->json([
            'status' => 'success',
            'message' => 'Brand updated effectively.',
            'data' => $brand
        ]);
    }

    public function destroy($id) {
        $brand = Brand::findOrFail($id);
        
        if ($brand->products()->count() > 0) {
            return response()->json([
                'status' => 'error',
                'message' => 'Cannot delete brand with associated products.'
            ], 422);
        }

        $brand->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Brand deleted effectively.'
        ]);
    }
}
