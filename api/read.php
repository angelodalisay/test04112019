<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

$tasks = [];
$sql = "SELECT * FROM tasks";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $tasks[$i]['id']    = $row['id'];
    $tasks[$i]['name'] = $row['name'];
    $tasks[$i]['description'] = $row['description'];
    $i++;
  }

  echo json_encode($tasks);
}
else
{
  http_response_code(404);
}