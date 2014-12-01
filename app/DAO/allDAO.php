<?php

date_default_timezone_set('America/Sao_Paulo');

include "umidadeDAO.php";
include "vazaoDAO.php";
include "phDAO.php";
include "energiaDAO.php";
include "iluminacaoDAO.php";
include "temperaturaDAO.php";
include "condutividadeDAO.php";

umidade();
vazao();
ph();
energia();
iluminacao();
temperatura();
condutividade();
?>
