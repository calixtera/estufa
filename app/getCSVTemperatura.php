<?php

	include 'db.php';
	
	$result = mysql_query("SELECT * FROM temperatura");
	
	echo('id, data, valor');
	while($row = mysql_fetch_array($result)) {
	    echo($row["idTemperatura"] . "," . $row["data/hora"] . "," . $row["valorTemperatura"]);
	}
	
?>
