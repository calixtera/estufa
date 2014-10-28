<?php
	
	$hostname = "localhost";
	$username = "root";
	$password = "root";

	mysql_connect($hostname, $username, $password) or die(mysql_errror());
	mysql_select_db("projeto_estufa") or die (mysql_error ());

?>