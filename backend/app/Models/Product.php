<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends Model {
    use HasFactory;

    protected $fillable = [
        'category_id', 'brand_id', 'title', 'slug', 'short_description', 
        'description', 'features', 'specifications', 'applications', 
        'primary_image', 'brochure_path', 'is_active', 
        'meta_title', 'meta_description'
    ];

    protected $casts = [
        'features' => 'array',
        'specifications' => 'array',
        'applications' => 'array',
        'is_active' => 'boolean'
    ];

    protected static function boot() {
        parent::boot();
        static::creating(function ($product) {
            if (!$product->slug) {
                $product->slug = Str::slug($product->title);
            }
        });
    }

    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function brand() {
        return $this->belongsTo(Brand::class);
    }

    public function images() {
        return $this->hasMany(ProductImage::class);
    }

    public function inquiries() {
        return $this->hasMany(Inquiry::class);
    }
}
