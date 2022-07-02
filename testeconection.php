<?php
try{
$conn = new PDO('pgsql:host='localhost';port=5432;dbname=RU_UESC', 'postgres','mat123');
if($conn) {
echo "database conectado";
}
}catch (PDOException $e){
// report error message
echo $e->getMessage();
}