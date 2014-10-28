<?php

	include 'db.php';
	
	$result = mysql_query("SELECT * FROM temperatura");
	
	echo("data, valor\r\n");
	while($row = mysql_fetch_array($result)) {
	    echo($row["data/hora"] . "," . $row["valorTemperatura"]) . "\r\n";
	}
	
?>
