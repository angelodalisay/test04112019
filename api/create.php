<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Sanitize.
  $name = mysqli_real_escape_string($con, trim($request->name));
  $description = mysqli_real_escape_string($con, trim($request->description));

  // Create.
  $sql = "INSERT INTO `tasks`(`id`,`name`,`description`) VALUES (null,'{$name}','{$description}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $task = [
      'name' => $name,
      'description' => $description,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode($task);
  }
  else
  {
    http_response_code(422);
  }
}