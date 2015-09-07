<?php
require 'convertService.php';

$celsius = $_GET['celsius'];
$convertIndex = 0.0;

if(is_numeric($celsius)){
    $convertIndex = convertService::getIndex($celsius);
}

echo $convertIndex;
?>