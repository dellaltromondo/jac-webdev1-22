<!DOCTYPE html>
<html lang="it">
<html>

<head>
    <?php include 'phpfunctions.php' ?>
    <link rel="stylesheet" href="../css/progetto.css">
    <title>Elenco squadre</title>
    <link rel="icon" type="image/x-icon" href="../immagini/favicon.ico">
    <script src="../javascript/javascript.js"></script>
    <h3 id="titolo">ELENCO SQUADRE </h3>
</head>

<body>
    <a href="../html/homepage.html"><button class="bottoninavigazione">Homepage</button></a>
    <a href="../php/crea_squadra.php"><button class="bottoninavigazione">Crea squadra</button></a>
    <a href="../php/campionato2.php"><button class="bottoninavigazione">Campionato</button></a>
    <br>
    <?php //CONNESSIONE AL DATABASE E QUERY PER PRENDERE TUTTE LE SQUADRE E LE LORO INFORMAZIONI
    $conn = connessione();
    $sql = "SELECT nome, giocatore1, giocatore2, giocatore3, giocatore4, giocatore5, giocatore6, giocatore7, giocatore8, giocatore9, giocatore10, formazione, spesa FROM SQUADRE";
    $result = $conn->query($sql);
    $sql2 = "SELECT nome FROM squadre";
    $result2 = $conn->query($sql2);
    ?>
    <!--CREAZIONE DELLA TABELLA E INSERIMENTO DELLE INFORMAZIONI -->
    <table id="tabella">
        <thead>
            <tr>
                <th>Nome</th>
                <th>giocatore1</th>
                <th>giocatore2</th>
                <th>giocatore3</th>
                <th>giocatore4</th>
                <th>giocatore5</th>
                <th>giocatore6</th>
                <th>giocatore7</th>
                <th>giocatore8</th>
                <th>giocatore9</th>
                <th>giocatore10</th>
                <th>formazione</th>
                <th>monte <br> ingaggi</th>
            </tr>
        </thead>
        <tbody>
            <?php
            while ($row = mysqli_fetch_assoc($result)) { ?>
                <tr>
                    <td><?php echo $row["nome"]; ?></td>
                    <td><?php echo $row["giocatore1"]; ?></td>
                    <td><?php echo $row["giocatore2"]; ?></td>
                    <td><?php echo $row["giocatore3"]; ?></td>
                    <td><?php echo $row["giocatore4"]; ?></td>
                    <td><?php echo $row["giocatore5"]; ?></td>
                    <td><?php echo $row["giocatore6"]; ?></td>
                    <td><?php echo $row["giocatore7"]; ?></td>
                    <td><?php echo $row["giocatore8"]; ?></td>
                    <td><?php echo $row["giocatore9"]; ?></td>
                    <td><?php echo $row["giocatore10"]; ?></td>
                    <td><?php echo $row["formazione"]; ?></td>
                    <td><?php echo  number_format($row["spesa"], 0, ",", ".") . " $"; ?></td>
                </tr>
            <?php } ?>
        </tbody>
    </table>
    <br>
    <!--CREAZIONE DEL BOTTONE E DEL DROPDOWN MENU PER L'ELIMINAZIONE DELLA SQUADRA -->
    <form id="formdelete" name="myForm2" method="post">
        <input type="submit" name="submit" class="bottoninavigazione" value="Elimina squadra">
        <?php
        if (array_key_exists('submit', $_POST)) {
            eliminasquadra($conn);
        }
        $nomi = array();
        if ($result2->num_rows > 0) {
            while ($row = $result2->fetch_assoc()) {
                $nomi[] = $row['nome'];
            }
        }
        echo "<select name='menu' id='menu'>";
        foreach ($nomi as $nome) {
            echo "<option value='$nome'>$nome</option>";
        }
        ?>
    </form>
    <?php //FUNZIONE PER ELIMINARE LA SQUADRA
    function eliminasquadra($conn)
    {
        $squadra = $_POST['menu'];
        $sql3 = "DELETE from squadre WHERE nome='$squadra'";
        try {
            $rs = mysqli_query($conn, $sql3);
        } catch (Exception $e) {
            echo " Eccezione trovata";
        }
        if ($rs) {
            echo "Squadra eliminata correttamente!";
        }
    }
    $conn->close();
    ?>
</body>

</html>