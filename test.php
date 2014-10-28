<?php 

	$hostname = "localhost";
	$username = "root";
	$password = "root";

	mysql_connect($hostname, $username, $password) or die(mysql_errror());
	echo "Conexão efetuada com sucesso!<br/>";

	mysql_select_db("projeto_estufa") or die (mysql_error ());
	echo "Base de dados selecionada! <br/>";

	$result = mysql_query("SELECT * FROM temperatura");
	$resultArray = array();
  	while($row = mysql_fetch_array($result)) {
            echo "<br> id: ". $row["idTemperatura"]. " - data: ". $row["data/hora"]. " " . $row["valorTemperatura"];
	}




?>









