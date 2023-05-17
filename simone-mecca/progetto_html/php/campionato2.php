<!DOCTYPE html>
<html lang="it">
<html>

<head>
    <link rel="stylesheet" href="../css/progetto.css">
    <title>Campionato</title>
    <?php include 'phpfunctions.php' ?>
    <link rel="icon" type="image/x-icon" href="../immagini/favicon.ico">
    <h3 id="titolo">Campionato</h3>
</head>


<script src="../javascript/javascript.js"></script>

<body><!--CREAZIONE TABELLONE E CLASSIFICA -->
    <a href="../html/homepage.html"><button class="bottoninavigazione">Homepage</button></a> <br>
    <a href="../php/elenco_squadre.php"><button class="bottoninavigazione">Elenco squadre</button></a><br>
    <a href="../php/campionato.php"><button class="bottoninavigazione">Comincia campionato</button></a><br>
    <form id="tabelle" method="post">
        <div id="tabellacampionato">
            <table style="margin-left: auto; margin-right: auto;">
                <tbody>
                    <tr style="height: 22px;">
                        <td style="width: 107px; height: 22px;">&nbsp;</td>
                        <td style="width: 216px; height: 22px;" colspan="9">Partita 1</td>
                        <td style="width: 220px; height: 22px;" colspan="9">Partita2</td>
                    </tr>
                    <tr style="height: 22px;">
                        <td style="width: 107px; height: 22px;">&nbsp;Giornata 1</td>
                        <td id="SquadraA1" style="width: 96px; height: 22px;" colspan="4">&nbsp;</td>
                        <td id="SquadraB1" style="width: 96px; height: 22px;" colspan="4">&nbsp;&nbsp;&nbsp;</td>
                        <td id="RisultatoAB1">&nbsp;</td>
                        <td id="SquadraC1" style="width: 99px; height: 22px;" colspan="4">&nbsp;&nbsp;</td>
                        <td id="SquadraD1" style="width: 96px; height: 22px;" colspan="4">&nbsp;&nbsp;</td>
                        <td id="RisultatoCD1">&nbsp;</td>
                    </tr>
                    <tr style="height: 22px;">
                        <td style="width: 107px; height: 22px;">&nbsp;Giornata 2</td>
                        <td id="SquadraA2" style="width: 96px; height: 22px;" colspan="4">&nbsp;</td>
                        <td id="SquadraB2" style="width: 96px; height: 22px;" colspan="4">&nbsp;&nbsp;&nbsp;</td>
                        <td id="RisultatoAB2">&nbsp;</td>
                        <td id="SquadraC2" style="width: 99px; height: 22px;" colspan="4">&nbsp;&nbsp;</td>
                        <td id="SquadraD2" style="width: 96px; height: 22px;" colspan="4">&nbsp;&nbsp;</td>
                        <td id="RisultatoCD2">&nbsp;</td>
                    </tr>
                    <tr style="height: 22px;">
                        <td style="width: 107px; height: 22px;">&nbsp;Giornata 3</td>
                        <td id="SquadraA3" style="width: 96px; height: 22px;" colspan="4">&nbsp;</td>
                        <td id="SquadraB3" style="width: 96px; height: 22px;" colspan="4">&nbsp;&nbsp;&nbsp;</td>
                        <td id="RisultatoAB3">&nbsp;</td>
                        <td id="SquadraC3" style="width: 99px; height: 22px;" colspan="4">&nbsp;&nbsp;</td>
                        <td id="SquadraD3" style="width: 96px; height: 22px;" colspan="4">&nbsp;&nbsp;</td>
                        <td id="RisultatoCD3">&nbsp;</td>
                    </tr>
                    <tr style="height: 22px;">
                        <td style="width: 107px; height: 22px;" colspan="19">PAUSA</td>
                    </tr>
                    <tr style="height: 22px;">
                        <td style="width: 107px; height: 22px;">&nbsp;Giornata 4</td>
                        <td id="SquadraA4" style="width: 96px; height: 22px;" colspan="4">&nbsp;</td>
                        <td id="SquadraB4" style="width: 96px; height: 22px;" colspan="4">&nbsp;&nbsp;&nbsp;</td>
                        <td id="RisultatoAB4">&nbsp;</td>
                        <td id="SquadraC4" style="width: 99px; height: 22px;" colspan="4">&nbsp;&nbsp;</td>
                        <td id="SquadraD4" style="width: 96px; height: 22px;" colspan="4">&nbsp;&nbsp;</td>
                        <td id="RisultatoCD4">&nbsp;</td>
                    </tr>
                    <tr style="height: 22px;">
                        <td style="width: 107px; height: 22px;">&nbsp;Giornata 5</td>
                        <td id="SquadraA5" style="width: 96px; height: 22px;" colspan="4">&nbsp;</td>
                        <td id="SquadraB5" style="width: 96px; height: 22px;" colspan="4">&nbsp;&nbsp;&nbsp;</td>
                        <td id="RisultatoAB5">&nbsp;</td>
                        <td id="SquadraC5" style="width: 99px; height: 22px;" colspan="4">&nbsp;&nbsp;</td>
                        <td id="SquadraD5" style="width: 96px; height: 22px;" colspan="4">&nbsp;&nbsp;</td>
                        <td id="RisultatoCD5">&nbsp;</td>
                    </tr>
                    <tr style="height: 22px;">
                        <td style="width: 107px; height: 22px;">&nbsp;Giornata 6</td>
                        <td id="SquadraA6" style="width: 96px; height: 22px;" colspan="4">&nbsp;</td>
                        <td id="SquadraB6" style="width: 96px; height: 22px;" colspan="4">&nbsp;&nbsp;&nbsp;</td>
                        <td id="RisultatoAB6">&nbsp;</td>
                        <td id="SquadraC6" style="width: 99px; height: 22px;" colspan="4">&nbsp;&nbsp;</td>
                        <td id="SquadraD6" style="width: 96px; height: 22px;" colspan="4">&nbsp;&nbsp;</td>
                        <td id="RisultatoCD6">&nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="classifica">
            <table style="width: 271px; height: 322px;">
                <tbody>
                    <tr>
                        <td style="width: 265px;" colspan="5">CLASSIFICA</td>
                    </tr>
                    <tr>
                        <td style="width: 40.5625px;">POS</td>
                        <td style="width: 82.4375px;">NOME</td>
                        <td style="width: 31px;">W</td>
                        <td style="width: 31px;">L</td>
                        <td style="width: 31px;">PUNTI</td>
                    </tr>
                    <tr>
                        <td style="width: 40.5625px;">1</td>
                        <td id="SquadraA" name="SquadraA" style="width: 82.4375px;"></td>
                        <td id="VittorieSquadraA" style="width: 31px;"></td>
                        <td id="SconfitteSquadraA" style="width: 31px;"></td>
                        <td id="PuntiSquadraA" style="width: 40px;"></td>
                    </tr>
                    <tr>
                        <td style="width: 40.5625px;">2</td>
                        <td id="SquadraB" style="width: 82.4375px;"></td>
                        <td id="VittorieSquadraB" style="width: 31px;"></td>
                        <td id="SconfitteSquadraB" style="width: 31px;"></td>
                        <td id="PuntiSquadraB" style="width: 40px;"></td>
                    </tr>
                    <tr>
                        <td style="width: 40.5625px;">3</td>
                        <td id="SquadraC" style="width: 82.4375px;"></td>
                        <td id="VittorieSquadraC" style="width: 31px;"></td>
                        <td id="SconfitteSquadraC" style="width: 31px;"></td>
                        <td id="PuntiSquadraC" style="width: 40px;"></td>
                    </tr>
                    <tr>
                        <td style="width: 40.5625px;">4</td>
                        <td id="SquadraD" style="width: 82.4375px;"></td>
                        <td id="VittorieSquadraD" style="width: 31px;"></td>
                        <td id="SconfitteSquadraD" style="width: 31px;"></td>
                        <td id="PuntiSquadraD" style="width: 40px;"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <input type="submit" id="simula" name="simula" class="bottoninavigazione" value="Gioca partita">
    </form>
    <?php
    $conn = connessione();
    $query = "SELECT `squadraA` FROM `giornate` where giornata = 1";
    $risultato = mysqli_fetch_array(mysqli_query($conn, $query));
    $querytot = "SELECT * FROM `giornate` ";
    $risultatotot = mysqli_fetch_all(mysqli_query($conn, $querytot));
    $querytot2 = "SELECT * FROM `classifica` ";
    $risultatotot2 = mysqli_fetch_all(mysqli_query($conn, $querytot2));
    $querytot3 = "SELECT `risultatoA`, `risultatoB`, `risultatoC`, `risultatoD` FROM `giornate` ";
    $risultatotot3 = mysqli_fetch_all(mysqli_query($conn, $querytot3));
    $querygiornate = "SELECT `giornata` FROM `giornate` WHERE `risultatoA`= 0 LIMIT 1";
    $giornata = mysqli_fetch_column(mysqli_query($conn, $querygiornate));
    if (array_key_exists('simula', $_POST)) {
        giocapartita($conn, $giornata);
    }

    //FUNZIONE CHE CALCOLA I PUNTEGGI E GIOCA LA PARTITA
    function giocapartita($conn, $giornata,)
    {
        if ($giornata == "") {
            echo "Il campionato é finito";
            return;
        }

        $lettere = array("A", "B", "C", "D");
        $querysquadra1 = "SELECT `squadraA` FROM `giornate` where giornata = '$giornata'";
        $squadra1 = mysqli_fetch_column(mysqli_query($conn, $querysquadra1));
        $querysquadra2 = "SELECT `squadraB` FROM `giornate` where giornata = '$giornata'";
        $squadra2 = mysqli_fetch_column(mysqli_query($conn, $querysquadra2));
        $querysquadra3 = "SELECT `squadraC` FROM `giornate` where giornata = '$giornata'";
        $squadra3 = mysqli_fetch_column(mysqli_query($conn, $querysquadra3));
        $querysquadra4 = "SELECT `squadraD` FROM `giornate` where giornata = '$giornata'";
        $squadra4 = mysqli_fetch_column(mysqli_query($conn, $querysquadra4));
        $squadre = array($squadra1, $squadra2, $squadra3, $squadra4);
        for ($y = 0; $y < 4; $y++) {
            $totpunti = 0;
            for ($x = 1; $x <= 10; $x++) {
                $querygiocatore =  "SELECT `giocatore$x` FROM `squadre` WHERE `nome`='$squadre[$y]'";
                $giocatore = mysqli_fetch_column(mysqli_query($conn, $querygiocatore));
                $querypunti =  "SELECT`Fantasy Points` FROM `fantasypointsgiornata$giornata` WHERE `Nome`='$giocatore'";
                $punti = mysqli_fetch_column(mysqli_query($conn, $querypunti));
                $totpunti += $punti;
            }
            $sql = "UPDATE `giornate` SET `risultato$lettere[$y]`='$totpunti' WHERE  `giornata`='$giornata'";
            $rs = mysqli_query($conn, $sql);
            $sql2 = "UPDATE classifica SET `punti` = `punti` + '$totpunti' WHERE `nome` = '$squadre[$y]'";
            $rs = mysqli_query($conn, $sql2);
        }

        for ($y = 0; $y <= 2; $y++) {
            $x = 0;
            $sqlrisultatosquadra1 = "SELECT `risultato$lettere[$y]` FROM `giornate` where giornata = '$giornata'";
            $risultatosquadra1 = mysqli_fetch_column(mysqli_query($conn, $sqlrisultatosquadra1));
            $x = $y + 1;
            $sqlrisultatosquadra2 = "SELECT `risultato$lettere[$x]` FROM `giornate` where giornata = '$giornata'";
            $risultatosquadra2 = mysqli_fetch_column(mysqli_query($conn, $sqlrisultatosquadra2));
            if ($risultatosquadra1 > $risultatosquadra2) {
                $sql = "UPDATE `classifica` SET `vittorie`=`vittorie`+1 WHERE `nome`= '$squadre[$y]'";
                $rs = mysqli_query($conn, $sql);
                $sql2 = "UPDATE `classifica` SET `sconfitte`=`sconfitte`+1 WHERE `nome`= '$squadre[$x]'";
                $rs = mysqli_query($conn, $sql2);
            } else {
                $sql = "UPDATE `classifica` SET `vittorie`=`vittorie`+1 WHERE `nome`= '$squadre[$x]'";
                $rs = mysqli_query($conn, $sql);
                $sql2 = "UPDATE `classifica` SET `sconfitte`=`sconfitte`+1 WHERE `nome`= '$squadre[$y]'";
                $rs = mysqli_query($conn, $sql2);
            }
            $y++;
        }
        $sql3 = "ALTER TABLE classifica ORDER BY vittorie DESC;";
        $rs = mysqli_query($conn, $sql3);
        echo "Giornata giocata!!";
    }
    ?>
</body>
<script>
    //FUNZIONE PER L'INSERIMENTO DI COSE IN TABELLA
    function compilatabella(variabile, cella) {
        document.getElementById(cella).innerHTML = variabile;
        return;
    }
     
    //FUNZIONE PER AGGIORNARE LA TABELLA
    function aggiornamentotabelle() {
        const lettere = ["A", "B", "C", "D"];
        const risultato = ["AB", "CD"];
        const secondoindice = [1, 2, 5, 6];
        const variabili = ["Squadra", "VittorieSquadra", "SconfitteSquadra", "PuntiSquadra"];
        var risultatotot = <?php echo json_encode($risultatotot); ?>;
        var risultatotot2 = <?php echo json_encode($risultatotot2); ?>;
        var risultatotot3 = <?php echo json_encode($risultatotot3); ?>;
        for (let i = 1; i <= 6; i++) {
            var lettera = 0;
            for (let a = 1; a < 5; a++) {
                compilatabella(risultatotot[i - 1][secondoindice[a - 1]], "Squadra" + lettere[lettera] + i);
                lettera++;
            }
        }
        for (let i = 0; i < 4; i++) {
            for (let e = 0; e < 4; e++) {
                compilatabella(risultatotot2[i][e + 1], variabili[e] + lettere[i]);
            }
        }
        for (let i = 1; i <= 6; i++) {
            for (let a = 0; a <= 1; a++) {
                compilatabella(risultatotot3[i - 1][a == 0 ? 0 : 2] + " - " + risultatotot3[i - 1][a == 0 ? 1 : 3], "Risultato" + risultato[a] + [i]);
            }
        }
    }

    aggiornamentotabelle();
</script>

</html>