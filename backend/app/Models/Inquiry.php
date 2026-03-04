<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inquiry extends Model {
    use HasFactory;

    protected $fillable = [
        'product_id', 'name', 'phone', 'email', 'hospital_name', 
        'city', 'message', 'status'
    ];

    public function product() {
        return $this->belongsTo(Product::class);
    }
}
