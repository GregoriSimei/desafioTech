<p align='center' style='padding: 20px 0px 0px 0px;'>
  <img src='https://img.shields.io/static/v1?label=Node&message=^+16.0&color=blue&logo=javascript'>
  <img src='https://img.shields.io/static/v1?label=npm&message=^+8.0&color=blue&logo=npm'>
  <img src='https://img.shields.io/static/v1?label=Built_With&message=TypeScript&color=blue&logo=typescript'>
  <img src='https://img.shields.io/static/v1?label=Tests&message=Jest&color=orange&logo=jest'>
  <img src='https://img.shields.io/static/v1?label=API_Documentation&message=Swagger&color=green&logo=swagger'>
</p>

<p align='center' style='padding: 20px 0px 20px 0px;'> Desafio Tech - REST API </p>

</br>
</br>

## Sumário

<!--ts-->
* [Requisitos](#requisitos)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Como executar a aplicacao](#como-executar-a-aplicacao)
<!--te-->
</br></br>

## Requisitos

---

Para executar o projeto serão necessárias as seguintes ferramentas instaladas:

* `npm` para instalação do projeto NodeJs;
* `docker-compose` para execução do ambiente Docker;

</br></br>

## Tecnologias utilizadas

---

1. Para a execução do ambiente `dev`, foi criado um arquivo `docker-compose.yaml` que utilizará o `Dokcer` para criar um ambiente de desenvolvimento padrão para todos os desenvolvedores.

2. Para facilitar a visualização das rotas ja criadas no sistema, foi utilizado o `Swagger` para documenta-las.

3. Foi criado, também, uma implementação DevOps no `Github` com a utilização do `Git Actions`. Onde é executada uma ação a todo momento que é criada uma PR apontando para a branch main. Assim, a implementação fica responsável por verificar o `lint` dos arquivos e, também, executa todos os testes criados com a ferramenta `Jest`.

</br></br>

# Como executar a aplicacao

---

Para executar a aplicação, após a realização do clone do repositório, rode os seguintes comandos:

```bash

npm install

```

***Note***: Ele será responsável por instalar todos os pacotes necessários para rodar a aplicação.

</br>

Em seguida, crie um arquivo `.env` com as seguintes variáveis:

```bash
MYSQL_USER= # Usuário do banco de dados, Ex: desafioTechUser
MYSQL_ROOT_PASSWORD= # Senha do usuário root do banco de dados, Ex: desafio123
MYSQL_DATABASE= # Nome do banco de dados, Ex: desafio_tech_db
MYSQL_PORT_OS= # Porta para acessar o banco de dados, Ex: 1234
MYSQL_PORT= # Porta do MYSQL dentro do container docker, deixar padrão: 3306
MYSQL_HOST= # Host para o backend conectar com o banco, deixar padrão:  database

BACKEND_PORT= # Porta para consulta de rotas do backend 3000

PASS_HASH_SALT= # qualquer hash para criptografar senhas, Ex: 5d8ba383526af097fe0790c53e915a3886ca93ec
PASS_HASH_ITERATION= # numero de iterações da criptografia, Ex: 1000
PASS_HASH_TYPE= # Tipo de criptografia, Ex: sha512

JWT_SECRET= # qualquer chave segredo para validação do, Ex: JWT5d8ba383526af097fe0790c53e915a3886ca93ec
```

</br>

Após a criação do arquivo de variáveis de ambiente, execute o seguinte comando:

```bash
docker-compose up
```

***Note***: Ele será responsável pela criação dos containers Docker e execução do ambiente de `dev`.
