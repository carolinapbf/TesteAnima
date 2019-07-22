#language: pt
Funcionalidade: Cadastro de Usuário
    Sendo um usuário do site
    Posso acessar o site de Automação
    Para realizar cadastros de um novo usuário

  Cenário: Cadastro com sucesso
    Dado que estou na pagina de cadastro
    Quando os campos são preenchidos com 
      | Nome         | Fernanda                  |
      | Ultimo nome  | Teixeira                  |
      | email        | fernanda12456@gmail.combr |
      | endereço     | Rua X, 1234               |
      | Universidade | Unibh                     |
      | Prosissão    | QA                        |
      | Gênero       | Ferminino                 |
      | Idade        |                        26 |
    E envio um formulario dados usuario para cadastro 
    Então visualizo uma mensagem de sucesso "Usuário Criado com sucesso"
    
   
