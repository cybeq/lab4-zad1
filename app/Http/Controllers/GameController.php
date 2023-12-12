<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GameController extends Controller
{
    public function shoot(Request $request)
    {
        $randomNumber = rand(1, 10);
        $isMatch = $request->num === $randomNumber;

        if ($isMatch) {
            return response()->json(['message' => 'Good shot :)']);
        }

        return response()->json(['message' => 'Bad shot :('], 400);
    }
}
