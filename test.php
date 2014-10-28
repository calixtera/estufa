<?php 

	$hostname = "localhost";
	$username = "root";
	$password = "root";

	mysql_connect($hostname, $username, $password) or die(mysql_errror());
	echo "Conexão efetuada com sucesso!<br/>";

	mysql_select_db("projeto_estufa") or die (mysql_error ());
	echo "Base de dados selecionada! <br/>";

	$result = mysql_query("SELECT * FROM temperatura");
	if ($result->num_rows > 0) {
    // output data of each row
    		while($row = $result->fetch_assoc()) {
        		echo "<br> id: ". $row["id"]. " - Name: ". $row["firstname"]. " " . $row["lastname"];
   	 }
}	 else {
    echo "0 results";
}
	echo $result;
?>









