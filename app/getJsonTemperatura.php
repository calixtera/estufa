<?php

	include 'db.php';
	
	$result = mysql_query("SELECT * FROM temperatura");
	
	printf('id, data, valor')
	while($row = mysql_fetch_array($result)) {
	    printf($row["idTemperatura"] . "," . $row["data/hora"] . "," . $row["valorTemperatura"]);
	}
	
?>
