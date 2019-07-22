$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("teste_anima.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Cadastro de Usuário",
  "description": "  Sendo um usuário do site\n  Posso acessar o site de Automação\n  Para realizar cadastros de um novo usuário",
  "id": "cadastro-de-usuário",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 7,
  "name": "Cadastro com sucesso",
  "description": "",
  "id": "cadastro-de-usuário;cadastro-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 8,
  "name": "que estou na pagina de cadastro",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "os campos são preenchidos com",
  "rows": [
    {
      "cells": [
        "Nome",
        "Fernanda"
      ],
      "line": 10
    },
    {
      "cells": [
        "Ultimo nome",
        "Teixeira"
      ],
      "line": 11
    },
    {
      "cells": [
        "email",
        "fernanda12456@gmail.combr"
      ],
      "line": 12
    },
    {
      "cells": [
        "endereço",
        "Rua X, 1234"
      ],
      "line": 13
    },
    {
      "cells": [
        "Universidade",
        "Unibh"
      ],
      "line": 14
    },
    {
      "cells": [
        "Prosissão",
        "QA"
      ],
      "line": 15
    },
    {
      "cells": [
        "Gênero",
        "Ferminino"
      ],
      "line": 16
    },
    {
      "cells": [
        "Idade",
        "26"
      ],
      "line": 17
    }
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "envio um formulario dados usuario para cadastro",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "visualizo uma mensagem de sucesso \"Usuário Criado com sucesso\"",
  "keyword": "Então "
});
formatter.match({
  "location": "testeAnimaSteps.queEstouNaPaginaDeCadastro()"
});
formatter.result({
  "duration": 13562258966,
  "status": "passed"
});
formatter.match({
  "location": "testeAnimaSteps.osCamposSãoPreenchidosCom(DataTable)"
});
formatter.result({
  "duration": 584441028,
  "status": "passed"
});
formatter.match({
  "location": "testeAnimaSteps.envioUmFormularioDadosUsuarioParaCadastro()"
});
formatter.result({
  "duration": 958736752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Usuário Criado com sucesso",
      "offset": 35
    }
  ],
  "location": "testeAnimaSteps.visualizoUmaMensagemDeSucesso(String)"
});
formatter.result({
  "duration": 44481244,
  "status": "passed"
});
});