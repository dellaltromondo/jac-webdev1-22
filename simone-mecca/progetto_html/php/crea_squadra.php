<!DOCTYPE html>
<html lang="it">

<head>
  <link rel="stylesheet" href="../css/progetto.css">
  <title>FantaBasket</title>
  <link rel="icon" type="image/x-icon" href="../immagini/favicon.ico">
  <h3 id="titolo">CREA LA TUA SQUADRA </h3>
  <?php include 'phpfunctions.php' ?>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <a href="../html/homepage.html"><button class="bottoninavigazione">Homepage</button></a>
  <a href="../php/elenco_squadre.php"><button class="bottoninavigazione">Elenco squadre</button></a>
  <img src="../immagini/nba.png" id="logo" />
  <img src="../immagini/schema1.png" id="schema" name="myImage" />
  <div id="divregole">
    <h2 id="regole">
      Regole:<br><br>
      - La somma stipendi deve essere massimo 99.999.999 $<br><br>
      - Il nome della squadra deve essere univoco<br><br>
      - I ruoli dei giocatori devono essere: 2PG, 2SG, 2SF, 2PF, 2C<br><br>
      - Devono esserci 10 giocatori<br><br>
      - I giocatori devono essere univoci<br><br>
    </h2>
  </div>
</head>

<!--CODICE PHP PER LA CONNESSIONE AL DATABASE E CREAZIONE DI DUE QUERY:
 LA PRIMA PER PRENDERE TUTTI I NOMI DEI GIOCATORI PER CREARCI I BOTTONI E LA SECONDA PER PRENDERE I SALARI
-->
<?php
$conn = connessione();
$sql = "SELECT * FROM giocatori";
$giocatoriesalari = "SELECT nome, salario, posizione FROM giocatori";
$result = mysqli_query($conn, $sql);
$result2 = mysqli_query($conn, $giocatoriesalari);
?>

<body style="zoom:90%">
  <div class="colonne colonna1 ">
    <form id="checkboxgiocatori">
      <h2 class="minititoli">GIOCATORI</h2>
      <input type="text" id="filter" placeholder="Cerca un giocatore..." class="search-box" autocomplete="off">
      <!-- CHECKBOX CHE SERVE PER FILTRARE I PULSANTI CON I GIOCATORI-->
      <div id="checkbox">
        <input type="checkbox" checked="true" class="PGgiocatori checkbox" value="PG" id="PG.giocatori"> <label for="PG"> PG</label>
        <input type="checkbox" checked="true" class="SGgiocatori checkbox" value="SG" id="SG.giocatori"> <label for="SG"> SG</label>
        <input type="checkbox" checked="true" class="SFgiocatori checkbox" value="SF" id="SF.giocatori"> <label for="SF"> SF</label>
        <input type="checkbox" checked="true" class="PFgiocatori checkbox" value="PF" id="PF.giocatori"> <label for="PF"> PF</label>
        <input type="checkbox" checked="true" class="Cgiocatori checkbox" value="C" id="C.giocatori"> <label for="C"> C</label>
      </div>
    </form>
    <br>
    <form id="listapulsantigiocatori">
      <!-- CODICE PHP CHE MI CREA UN PULSANTE PER OGNI GIOCATORE PRESENTE NELLA TABELLA GIOCATORI DEL DATABASE CAMPIONATO -->
      <?php
      while ($row = mysqli_fetch_assoc($result)) {
        $nome = $row["nome"];
        $posizione = $row["posizione"];
        echo "<button type='button' class='button bottonigiocatori $posizione.giocatori'  ondragend='aggiornacontruoli()' draggable='true' >$nome</button>";
      } ?>
    </form>
  </div>
  <!-- CREAZIONE DELLA TABELLA CON NOMI E STIPENDI -->
  <div class="colonne divtabella" id="divtabella" >
    <table id="tabella">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Stipendio</th>
          <th>Posizione</th>
        </tr>
      </thead>
      <tbody>
        <?php
        while ($row = mysqli_fetch_assoc($result2)) { ?>
          <tr>
            <td><?php echo $row["nome"]; ?></td>
            <td class="stipendio"><?php echo number_format($row["salario"], 0, ",", "."); ?></td>
            <td><?php echo $row["posizione"]; ?></td>
          </tr>
        <?php } ?>
      </tbody>
    </table>
  </div>
  <!--CREAZIONE MENU SELECT 10 INPUT BAR ED I CONTATORI RUOLI-->
  <div class="colonne colonna2">
    <h2 class="minititoli">SELEZIONA SCHEMA</h2>
    <div class="dropdown">
      <form id="formschemi" name="myForm" method="post">
        <div>
          <input id="nomesquadra" name="nomesquadra" placeholder="Nome Squadra" autocomplete="off">
          <select name="switch" id="switch" onchange="cambiaImmagine();" class="switch">
            <option value="1">SELEZIONA SCHEMA</option>
            <option value="2">1 PG -- 1 SG -- 1 SF -- 1 PF -- 1C</option>
            <option value="3">2 PG -- 0 SG -- 2 SF -- 0 PF -- 1C</option>
            <option value="4">1 PG -- 2 SG -- 1 SF -- 0 PF -- 1C</option>
            <option value="5">1 PG -- 1 SG -- 0 SF -- 1 PF -- 2C</option>
          </select>
          <input readonly id="contatore" name="contatore" placeholder="Somma stipendi:" />
        </div>
        <div>
          <input readonly type="text" id="giocatore1" name="giocatore1" class="giocatoriattivi" placeholder="Giocatore1">
          <input readonly type="text" id="giocatore2" name="giocatore2" class="giocatoriattivi" placeholder="Giocatore2">
          <input readonly type="text" id="giocatore3" name="giocatore3" class="giocatoriattivi" placeholder="Giocatore3">
          <input readonly type="text" id="giocatore4" name="giocatore4" class="giocatoriattivi" placeholder="Giocatore4">
          <input readonly type="text" id="giocatore5" name="giocatore5" class="giocatoriattivi" placeholder="Giocatore5">
          <input readonly type="text" id="giocatore6" name="giocatore6" class="giocatoriattivi" placeholder="Giocatore6">
          <input readonly type="text" id="giocatore7" name="giocatore7" class="giocatoriattivi" placeholder="Giocatore7">
          <input readonly type="text" id="giocatore8" name="giocatore8" class="giocatoriattivi" placeholder="Giocatore8">
          <input readonly type="text" id="giocatore9" name="giocatore9" class="giocatoriattivi" placeholder="Giocatore9">
          <input readonly type="text" id="giocatore10" name="giocatore10" class="giocatoriattivi" placeholder="Giocatore10">
        </div>
        <div id="contatori">
          <pre class="contatori">PG: <p id="contatoreruolopg" class="contatori">0</p></pre>
          <pre class="contatori">SG: <p id="contatoreruolosg" class="contatori">0</p></pre>
          <pre class="contatori">SF: <p id="contatoreruolosf" class="contatori">0</p></pre>
          <pre class="contatori">PF: <p id="contatoreruolopf" class="contatori">0</p></pre>
          <pre class="contatori">C: <p id="contatoreruoloc" class="contatori">0</p></pre>
          <input type="submit" name="submit" class="bottoninavigazione bottonesalvataggio" id="submit" value="Salva squadra">
        </div>
      </form>
      <?php
      if (array_key_exists('submit', $_POST)) {
        invioSquadra($conn);
      }
      //FUNZIONE PER INVIARE LA SQUADRA AL DATABASE
      function invioSquadra($conn)
      {
        $numerogiocatori = 10;
        $variabiliGiocatori = array();
        if (isset($_POST['submit'])) { //CREO LE VARIABILI DA INVIARE AL DATABASE
          for ($i = 1; $i <= $numerogiocatori; $i++) {
            ${"giocatore$i"} = $_POST['giocatore' . $i];
            array_push($variabiliGiocatori, ${"giocatore$i"});
          }
          $formazione = $_POST['switch'];
          $nomesquadra = $_POST['nomesquadra'];
          $spesa = $_POST['contatore'];
          $spesa = str_replace(".", "", $spesa);
        }
        //QUERY PER CONTROLLARE SE E' GIA' PRESENTE UNA SQUADRA CON LO STESSO NOME NEL DATABASE
        $sql = "SELECT COUNT(*) FROM squadre WHERE nome='$nomesquadra'";
        $risultato = mysqli_fetch_column(mysqli_query($conn, $sql));
        $risultato++;
        if (controlloSquadra($variabiliGiocatori, $risultato, $formazione, $spesa, $conn)) {
          $sql2 = "INSERT INTO squadre (nome, giocatore1, giocatore2, giocatore3, giocatore4, giocatore5, giocatore6, giocatore7, giocatore8, giocatore9, giocatore10, formazione, spesa) VALUES ('$nomesquadra', '$giocatore1', '$giocatore2', '$giocatore3', '$giocatore4', '$giocatore5', '$giocatore6', '$giocatore7', '$giocatore8', '$giocatore9', '$giocatore10','$formazione','$spesa')";
          $rs = null;
          //METTO LA QUERY DI INSERIMENTO IN UN BLOCCO TRY COSì DA TROVARE EVENTUALI ECCEZIONI
          try {
            $rs = mysqli_query($conn, $sql2);
          } catch (Exception $e) {
            echo " Eccezione trovata";
          }
          if ($rs) {
            echo "Squadra inserita correttamente!";
          }
        } else  echo " Riprova";

        mysqli_close($conn);
      }

      //FUNZIONE CHE CONTROLLA SE E' PRESENTE UNA SQUADRA CON LO STESSO NOME, SE UNO SCHEMA E' SELEZIONATO, SE QUALCHE GIOCATORE NON E' STATO INSERITO, SE E' DUPLICE E SE I RUOLI SONO GIUSTI
      function controlloSquadra($listagiocatori, $risultato, $formazione, $spesa, $con)
      {
        if ($formazione == 1) {
          echo "Formazione sbagliata!";
          return false;
        }

        if ($risultato > 1) {
          echo "Nome della squadra giá preso!";
          return false;
        }

        if ($spesa > 99999999) {
          echo "Spesa troppo alta! ";
          return false;
        }

        for ($i = 0; $i < count($listagiocatori); $i++) {
          if ($listagiocatori[$i] == null) {
            echo "Manca un giocatore nella formazione!";
            return false;
          }
        }

        for ($i = 0; $i < count($listagiocatori); $i++) {
          $conteggio = 0;
          for ($n = 0; $n < count($listagiocatori); $n++) {
            if ($listagiocatori[$i] == $listagiocatori[$n])
              $conteggio++;
          }
          if ($conteggio == 2) {
            echo "Giocatore duplice nella formazione!";
            return false;
          }
        }

        $sg = 0;
        $pg = 0;
        $c = 0;
        $pf = 0;
        $sf = 0;
        foreach ($listagiocatori as $giocatore) {
          $sql = "SELECT posizione FROM giocatori WHERE nome = '$giocatore' ";
          $ruolo =  mysqli_query($con, $sql);
          if ($row = $ruolo->fetch_assoc()) {
            if ($row['posizione'] == "PG")
              $pg++;
            if ($row['posizione'] == "SG")
              $sg++;
            if ($row['posizione'] == "PF")
              $pf++;
            if ($row['posizione'] == "SF")
              $sf++;
            if ($row['posizione'] == "C")
              $c++;
          }
        }
        if ($pg != 2 || $pf != 2 || $sg != 2 || $sf != 2 || $c != 2) {
          echo "Ruoli sbagliati!";
          return false;
        }


        return true;
      }
      ?>
    </div>
  </div>
</body>
<script src="../javascript/javascript.js"></script>

</html>