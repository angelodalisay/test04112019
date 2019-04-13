<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Sanitize.
  $id    = mysqli_real_escape_string($con, (int)$request->id);
  $name = mysqli_real_escape_string($con, trim($request->name));
  $description = mysqli_real_escape_string($con, trim($request->description));

  // Update.
  $sql = "UPDATE `tasks` SET `name`='$name',`description`='$description' WHERE `id` = '{$id}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}