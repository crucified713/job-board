<?php

namespace App\Http\Controllers;

use App\Http\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
  public function showAllJobs()
  {
    return response()->json(Job::all());
  }

  public function showJob($id)
  {
    return response()->json(Job::find($id));
  }

  public function create(Request $request)
  {
    $Job = Job::create($request->all());
    return response()->json($Job, 201);
  }

  public function delete($id)
  {
    Job::findOrFail($id)->delete();
    // return response('Deleted Successfully', 200)->json(Job::all());
    return response()->json(array('msg' => 'Deleted Successfully'), 200);
  }
}