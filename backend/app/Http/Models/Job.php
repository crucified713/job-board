<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'title', 'description', 'location',
  ];

  /**
   * The attributes excluded from the model's JSON form.
   *
   * @var array
   */
  protected $hidden = [];
}