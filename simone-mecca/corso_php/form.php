<?php
$mostra_form = true;
$mailerrata = false;
$stileerrore = "";
$inputmail = "";
$inputbodymail = "";
$inputselect = 1;

$arrayselect = [
    "1" => "UNO",
    "2" => "DUE",
    "3" => "TRE"
];

function controllomail($email)
{
    return !filter_var($email, FILTER_VALIDATE_EMAIL);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $stileerrore = "border: 1px solid red";
    $inputmail = $_POST["mail"];
    $inputbodymail = $_POST["corpomail"];
    $inputselect = $_POST["selectmail"];
    $mailerrata = controllomail($inputmail);
    if (!$mailerrata) {
        $mostra_form = false;
        $stileerrore = "";
    }
} else {
?>

<?php
}
?>
<!--INIZIO CODICE HMTL -->
<html>

<head>

</head>

<body>
    <?php if ($mostra_form) { ?>
        <form action="form.php" method="POST">
            <label for="mail">mail</label>
            <input id="mail" value="<?php echo ($inputmail) ?>" style="<?php echo ($stileerrore) ?>" autocomplete="off" type="text" name="mail">
            <?php if ($mailerrata) { ?>
                <p style="color:red">Mail errata</p>
            <?php } ?>
            <br>
            <label for="corpo">Corpo mail</label><br>
            <textarea name="corpomail" id="corpo" cols="30" rows="10"><?php echo ($inputbodymail) ?></textarea><br>
            <select name="selectmail" id="selectmail">
                <?php
                foreach ($arrayselect as $key => $option) {
                ?>
                    <option value="<?php echo $key; ?>" <?php echo $inputselect == $key ? "selected" : ""; ?>><?php echo $option ?></option>
                <?php
                }
                ?>
            </select><br>
            <input type="submit" value="Salva" name="form1">
        </form>
    <?php } else {
    ?>
        <p>Ciao i dati che hai inviato sono i seguenti:</p>
        <table>
            <tr>
                <td>Mail</td>
                <td><?php echo ($inputmail) ?></td>
            </tr>
            <tr>
                <td>Corpo Mail</td>
                <td><?php echo ($inputbodymail) ?></td>
            </tr>
            <tr>
                <td>Select</td>
                <td><?php echo ($arrayselect[$inputselect]) ?></td>
            </tr>
        </table>
    <?php } ?>
</body>

</html>