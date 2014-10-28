<?php

	include 'db.php';
	
	header("Content-Type: text/plain");
	
	$table = $_GET["table"];
	$capitalTable = ucfirst($table);
	
	
	$result = mysql_query("SELECT * FROM ".$table);
	
	echo("data, ".$table."\r\n");
	while($row = mysql_fetch_array($result)) {
	    echo($row["data/hora"] . ", " . $row["valor".$capitalTable]) . "\r\n";
	}
	
?>
