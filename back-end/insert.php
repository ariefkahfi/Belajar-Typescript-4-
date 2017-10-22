<?php
include 'koneksi.php';

$name = $_POST['name'];
$type = $_POST['type'];

$query_insert = mysqli_query($con,"insert into cat (name,type) values ('$name','$type')");

if($query_insert){
    echo "Query ok";
}else{
    echo "Query error";
}

