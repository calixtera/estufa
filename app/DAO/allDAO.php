<?php

date_default_timezone_set('America/Los_Angeles');

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
