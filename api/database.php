<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  DEFINE('DB_USERNAME', 'root');
  DEFINE('DB_PASSWORD', 'root');
  DEFINE('DB_HOST', 'localhost');
  DEFINE('DB_DATABASE', 'tasksproject');

  function connect()
  {
    $connect = mysqli_connect(DB_HOST ,DB_USERNAME ,DB_PASSWORD ,DB_DATABASE);
  
    if (mysqli_connect_errno($connect)) {
      die("Failed to connect:" . mysqli_connect_error());
    }
  
    mysqli_set_charset($connect, "utf8");
  
    return $connect;
  }
  
  $con = connect();


?>