<h1>
<a href="https://www.dio.me/">
     <img align="center" width="40px" src="https://hermes.digitalinnovation.one/assets/diome/logo-minimized.png"></a>
    <span>Microsoft Azure Advanced</span>
</h1>

# :computer: Trabalhando Aplicações Serverless na Azure

Nesse desafio vamos configurar um logic app na azure com um request http para enviar dados (post) seguindo um template json. Utilizando o link fornecido pelo http request realizamos a operação de post utilizando o postman.

## :buld: Solução do desafio

Criando um workspace do log analytics:

<p align=center>
<img src="./images/log_workspace.png">
</p>

Criando o logic app, usando o log analytics workspace:

<p align=center>
<img src="./images/logic_app.png">
</p>

Ligando a identidade sistema atribuída:

<p align=center>
<img src="./images/serverless_id.png">
</p>

Criando o service bus:

<p align=center>
<img src="./images/service_bus.png">
</p>

Criando a fila (service bus):

<p align=center>
<img src="./images/fila_acesso.png">
</p>

Checando acesso ao service bus:

<p align=center>
<img src="./images/acesso_service_bus.png">
</p>

Checando acesso a fila: 

<p align=center>
<img src="./images/acesso_fila.png">
</p>

HTTP request

<p align=center>
<img src="./images/http_post.png">
</p>

Enviando dados:

<p align=center>
<img src="./images/postman_accepted.png">
</p>

Checando histórico:

<p align=center>
<img src="./images/history.png">
</p>

Vemos que nosso post funcionou corretamente.

Mesmo com acesso completo ao service bus e fila não aparece a opção de adicionar o service bus ao logic app.

<p align=center>
<img src="./images/no_service_bus.png">
</p>

