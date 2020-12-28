# Jokenpo Backend

<p align="center">

</p>

> Status do Projeto: Concluido :heavy_check_mark:

### Tópicos :link:

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto-scroll)

:small_blue_diamond: [Funcionalidades](#funcionalidades-pushpin)

:small_blue_diamond: [Pré requisitos](#pré-requisitos-heavy_exclamation_mark)

:small_blue_diamond: [Dependências e Libs Instaladas](#dependência-e-libs-instaladas-books)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-computer)

:small_blue_diamond: [Como rodar os testes](#como-rodar-os-testes-computer)

:small_blue_diamond: [Padrões de commit](#padrões-de-commit-pencil)

:small_blue_diamond: [Rotas](#rotas-four_leaf_clover)

:small_blue_diamond: [Licença](#licença)

## Descrição do Projeto :scroll:

<p align="justify">
    Aplicação backend construida com typescript no nodejs para fornecer e criar dados sobre jogadores e suas jogadas no jogo jokenpo
</p>

## Funcionalidades :pushpin:

:heavy_check_mark: Criar jogador

:heavy_check_mark: Excluir jogador

:heavy_check_mark: Ver um jogador

:heavy_check_mark: Ver todos os jogadores

:heavy_check_mark: Registrar uma jogada

:heavy_check_mark: Apagar uma jogada

:heavy_check_mark: Ver todas as jogadas de um jogador

:heavy_check_mark: Ver todas as jogadas de todos os jogadores

## Pré-requisitos :heavy_exclamation_mark:

:warning: [Node](https://nodejs.org/en/download/)

:warning: [Yarn](https://yarnpkg.com/getting-started/install)

## Dependências e Libs Instaladas :books:

:small_blue_diamond: [Express](https://expressjs.com/pt-br/starter/installing.html)

:small_blue_diamond: [uuidv4](https://www.npmjs.com/package/uuidv4)

:small_blue_diamond: [jest](https://jestjs.io/docs/en/getting-started)

:small_blue_diamond: [eslint](https://eslint.org/docs/user-guide/getting-started)

:small_blue_diamond: [husky](https://www.npmjs.com/package/husky)

:small_blue_diamond: [lint-staged](https://github.com/okonet/lint-staged)

:small_blue_diamond: [prettier](https://prettier.io/docs/en/install.html)

:small_blue_diamond: [typescript](https://www.typescriptlang.org/download)

:small_blue_diamond: [git-commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter)

## Como rodar a aplicação :computer:

-   No terminal clone o projeto.

```
    $ git clone https://github.com/tedu14/jokenpo
```

-   Acesse a pasta do projeto

```
    $ cd jokenpo/backend
```

-   Instale as dependências

```
    $ yarn install
```

-   Rode o projeto

```
    $ yarn dev
```

## Como rodar os testes :computer:

-   Testes unitários

```
    $ yarn test:unit
```

-   Testes de integração

```
    $ yarn test:integration
```

-   Testes com mais informações

```
    $ yarn test:verbose
```

## Padrões de commit :pencil:

:warning: [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/)

## Rotas :four_leaf_clover:

**default path:** _/api_

**url:** _https://localhost:5858/api_

### Players :grinning:

-   Todas as rotas de jogades

#### GET :

**method** : index

-   Mostra as informações de um usuário em expecifico.

**rota**: "/show-player/:player_id"

##### parametros:

1. **player_id**: id para identificação do usuário passado através da url requisição.

**exemplo:**

```
     fetch("https://localhost:5858/api/show-player/:player_id", {
         "method": "GET",
         "headers": {
         "user-agent": "vscode-restclient"
         }
     })
```

#### GET

**method** : show

-   Mostra todos os usuários

**rota**: "/show-all-player"

**exemplo:**

```
    fetch("https://localhost:5858/api/show-all-player", {
        "method": "GET",
        "headers": {
        "user-agent": "vscode-restclient"
        }
    })
```

#### POST

**method**: "create"

-   Cria um novo jogador

**rota**: "/create-player"

**parametros**:

1. **name**: nome do jogador passado pelo body

**exemplo:**

```
     fetch("https://localhost:5858/api/create-player", {
         "method": "POST",
         "headers": {
         "user-agent": "vscode-restclient",
         "content-type": "application/json"
         },
         "body": {
         "name": "Jhon Doe"
         }
     })
```

#### DELETE

**method**: "remove"

-   Remove um jogador

**rota**: "/remove/:player_id"

**parametros**:

1. **player_id**: passado através da url da requisição

**exemplo:**

```
    fetch("https://localhost:5858/api/remove/:player_id", {
         "method": "DELETE",
         "headers": {
         "user-agent": "vscode-restclient"
         }
    })
```

### Moves :punch: :raised_hand: :v:

-   Todas as rotas para gerenciamento das jogadas

#### GET

**method**: index

-   Mostra todas as jogadas de um usuário.

**rota**: "/show-player-moves/:player_id"

**parametros**:

1. **player_id**: id para busca do das jogadas do jogador, passado através da url da requisição

**exemplo:**

```
    fetch("http://localhost:5858/api/show-player-moves/:player_id", {
        "method": "GET",
        "headers": {
        "user-agent": "vscode-restclient"
        }
    })
```

#### GET

**method**: show

-   Mostra todas as jogadas salvas de todos os usuários

**rota**: "/show-all-moves"

**exemplo:**

```
    fetch("http://localhost:5858/api/show-all-moves", {
        "method": "GET",
        "headers": {
        "user-agent": "vscode-restclient"
    }
    })
```

#### DELETE

**method**: remove

-   Exclui uma jogada de um jogador expecífico

**rota**: "/delete-move/:player_id/:move_id"

**parametros**:

1.  **player_id**: passado pela url, identifica o jogador

2.  **move_id**: passado pela url, é gerado na hora da criação da move

**exemplo:**

```
    fetch("http://localhost:5858/api/delete-move/:player_id/:move_id", {
        "method": "DELETE",
        "headers": {
        "user-agent": "vscode-restclient"
        }
    })
```

#### POST

**method**: create

-   registra uma nova jogada de um usuário

**rota**: "/create-move"

**parametros**:

1. **player_id**: passado através do body para identificação do usuário

2. **move**: passado através do body para registro, valores a serem passados:

-   pedra

-   papel

-   tesoura.

**exemplo:**

```
    fetch("https://localhost:5858/api//create-move", {
        "method": "POST",
        "headers": {
        "user-agent": "vscode-restclient",
        "content-type": "application/json"
        },
        "body": {
        "move": "Pedra",
        "player_id": "123"
        }
    })
```
