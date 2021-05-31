<?php
session_start();
if ($_SESSION["auth"] != true) {  
    header("HTTP/1.0 403 Forbidden");  
    die;  
}

$file = "../../p0№oSs__+cP@d11B0q.html";      
$_POST = json_decode( file_get_contents("php://input"), true );     

if (file_exists($file)) {       
    unlink($file);        
} else {
    header("HTTP/1.0 400 Bad Request");     
}
