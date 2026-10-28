<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Inquiry;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class InquiryController extends Controller {
    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'product_id' => 'nullable|exists:products,id',
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'hospital_name' => 'nullable|string|max:255',
            'city' => 'required|string|max:100',
            'message' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $inquiry = Inquiry::create($request->all());

        // Send Email Notification
        /* 
        Mail::to('info@essarengineers.com')->send(new \App\Mail\NewInquiryNotification($inquiry));
        */

        return response()->json([
            'status' => 'success',
            'message' => 'Inquiry submitted successfully. We will contact you soon.',
            'data' => $inquiry
        ], 201);
    }

    public function index() {
        // Admin function
        return Inquiry::with('product')->orderBy('created_at', 'desc')->get();
    }

    public function updateStatus(Request $request, $id) {
        $request->validate([
            'status' => 'required|in:new,contacted,closed'
        ]);

        $inquiry = Inquiry::findOrFail($id);
        $inquiry->status = $request->status;
        $inquiry->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Status updated successfully.'
        ]);
    }
}

