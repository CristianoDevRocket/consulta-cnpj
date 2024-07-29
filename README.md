Instruções para Rodar o Projeto


1. Configuração do Ambiente.

Instale o XAMPP:

Faça o download do XAMPP e instale-o no seu sistema.

Clone ou Baixe o Projeto:

Clone este repositório ou faça o download dos arquivos zipados e extraia-os para uma pasta.

2. Configuração do XAMPP
Inicie o Servidor Apache:

Abra o XAMPP Control Panel e inicie o servidor Apache clicando no botão "Start".

Mover os Arquivos para o Diretório do Servidor:

Mova os arquivos do projeto (HTML, CSS, JS) para o diretório htdocs do XAMPP. O caminho padrão geralmente é:

makefile
Copiar código
C:\xampp\htdocs
Crie uma pasta específica para este projeto, por exemplo, consulta_cnpj, e coloque todos os arquivos lá.

3. Acessar o Projeto
Abrir o Navegador:

No seu navegador, acesse o seguinte endereço para visualizar o projeto:

Copiar código
http://localhost/consulta_cnpj/
Aqui, consulta_cnpj é o nome da pasta onde você colocou os arquivos do projeto.

4. Uso do Sistema
Consultar CNPJ:

Insira um número de CNPJ válido no campo de texto.
Clique em "Consultar" para buscar as informações da empresa.
Os dados serão exibidos de forma editável na página.
Editar e Salvar Dados:

Os campos exibidos podem ser editados diretamente.
Após editar, clique no botão "Salvar Alterações" para realizar as ações desejadas com os dados modificados (por exemplo, enviar para um servidor, salvar localmente, etc.).
5. Observações
Certifique-se de que o CNPJ inserido está no formato correto (14 dígitos).
A API BrasilAPI deve estar acessível pela Internet para que o sistema funcione corretamente.
O exemplo não inclui funcionalidades de backend para armazenar ou processar as edições feitas nos dados; essa implementação é necessária para um sistema completo.
6. Problemas Comuns
Erro 404: Verifique se os arquivos estão no diretório correto (htdocs/consulta_cnpj).
Problemas de Conexão com a API: Certifique-se de que o dispositivo está conectado à Internet.