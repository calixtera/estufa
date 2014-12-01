<?php

function temperatura () {
$servidor = 'localhost';
$banco      = 'projeto_estufa';
$usuario  = 'root'; //alterar
$senha    = ''; // alterar
$link     = mysql_connect($servidor, $usuario, $senha);
$db          = mysql_select_db($banco,$link);

/* include '../sms/human_gateway_client_api/HumanClientMain.php';
$humanMultipleSend = new HumanMultipleSend("jadsvicto.api", "3Uyv28FADt");
$tipo = HumanMultipleSend::TYPE_C;
$msg_list  = "556181236581;teste0;004"."\n";*/

$date=new DateTime(); //this returns the current date time
$result = $date->format('Y-m-d-H-i-s');
// Obtem o conteudo do arquivo (arquivo.txt)

// seguir o modelo ---->> $dados = file_get_contents('C:\Users\jads\Desktop\condutividade.txt'); 
$dados = file_get_contents('temperatura.txt');

    if ($dados != null){
        
        // Quebra o conteudo do arquivo usando o separador \n (quebra de linha)
$itens = explode("\n", $dados);

// Inicio um array nesta variavel
 $dado = array();

// Intrução inicial do MySQL. Será unida com o resto da consulta no foreach() abaixo
$sql  = "INSERT INTO `temperatura` (`idTemperatura`, `valorTemperatura`, `data/hora`) VALUES";

// Quebro cada item que chega do array $itens, para serem insidos no MySQL
foreach ( $itens as $item ) {
    $dados = explode(';', $item);
 
    // Como os campos nome e data tinham um espaço antes, usei a função trim() em cada dado para retirar esses espaços
    foreach ( $dados as $dadoTmp ) {
        $dado = trim($dadoTmp);
    }

    $sql .= " ('', '".$dado."', '$result'),";
}

// Retira a virgula que sobrou no final da consulta
$sql = substr($sql, 0, -1);

// Executa a query, inserindo os dados.
$resultado = mysql_query($sql) or die(mysql_error());

    }
        
    else{
        echo ("arquivo nao encontrado");
    }
mysql_close();
/*
if ($dados<0 )//arrumar
{
$responses = $humanMultipleSend->sendMultipleList($tipo, $msg_list, 0);
}
*/}
?>

