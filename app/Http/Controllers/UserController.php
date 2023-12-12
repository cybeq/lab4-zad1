<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function validateUser(Request $request)
    {

        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => [
                'required',
                'regex:/^(?=.*[A-Z])(?=.*\d).+$/',
                'min:6',
            ],
            'birthday' => 'required|date|before_or_equal:' . now()->format('Y-m-d'),
        ], [
            'password.regex' => 'Password must contains a capital letter and number',
            'birthday.before_or_equal' => 'Date of birth must be placed in past',
        ]);

        return response()->json(['message' => 'Validation successful']);
    }
}
