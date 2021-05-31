<?php
session_start();  

if ($_SESSION["auth"] != true) {  
    header("HTTP/1.0 403 Forbidden");  
    die;  
}

if ($_SESSION["auth"] == true) {  
    echo json_encode( array("auth" => true) );
} else {
    echo json_encode( array("auth" => false) );
}