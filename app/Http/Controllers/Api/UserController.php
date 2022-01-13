<?php

namespace App\Http\Controllers\Api;
use Illuminate\Support\Facades\Hash;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function login(Request $request){
        $data = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
    
        $user = User::where('email', $request->email)->first();
    
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'user_not_found']);
        }
    
        $token = $user->createToken('my-app-token')->plainTextToken;
    
        // $response = [
        //     'user' => $user,
        //     'token' => $token
        // ];
    
        return response()->json(['user'=>$user,'token'=>$token]);
    }
}
