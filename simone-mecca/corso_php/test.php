<!doctype html>
<html lang="it">​
<?php $titolo = "Pagina dinamica";
?>

<head>​
    <title>Ciao JAC!</title>​
</head>​

<body>
    <?php
    $studenti = [
        ['nome' => 'fabio', 'classe' => '5E'],
        ['nome' => 'roberto', 'classe' => '2F'],
        ['nome' => 'giorgio', 'classe' => '5F'],
    ];
    setcookie("cognome", "rossi", 0)
    ?>​
    <h1>Lista Studenti</h1>​
    <table>​
        <?php foreach ($studenti as $studente) { ?>​
        <tr>​
            <td><?php echo $studente['nome']; ?></td>​
            <td><?php echo $studente['classe']; ?></td>
            <td><a href="http://localhost/corso_php/test2.php?nome=<?php echo $studente['nome'] ?>&classe=<?php echo $studente['classe'] ?>">link</a></td>​​
        </tr>​
        <?php } ?>​
    </table>​
</body>​

</html>​

​