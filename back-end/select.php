<?php
include 'koneksi.php';


$arr = array();

$query_select = mysqli_query($con,"select * from cat");


while($rs = mysqli_fetch_assoc($query_select)){
    array_push($arr,$rs);
}

echo json_encode(array('cat'=>$arr));