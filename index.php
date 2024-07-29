<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta CNPJ</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" 
    git integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="container">
    <img  id="i-img-cnpj" src="imagens/img-cnpj.png"/>

        <h1>Consulta de CNPJ</h1>
        <form id="consulta-form">
            <input type="text" id="cnpj" placeholder="Digite o CNPJ" minlength="3" maxlength="20" required>
            <div class="buttons">
                <button type="submit">Consultar</button>
            </div>
        </form>
        <div id="resultado"></div>
    </div>

    <button id="nConsult" type="button">Nova consulta</button>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script/script.js"></script>
</body>
</html>
