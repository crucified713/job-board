<?php

use Illuminate\Support\Str;
use Faker\Generator as Faker;

$factory->define(App\Http\Models\Job::class, function (Faker $faker) {
    return [
        'title' => $faker->randomElement($array = array ('Admin','Software Developer','Accoutant','HR')),
        'location' => $faker->randomElement($array = array ('Melbourne', 'Canberra', 'Sydney','Perth')),
        'description' => $faker->paragraph
    ];
});