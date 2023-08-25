# ex-pratico-rwe

Iniciando projeto maquina local

## Pré-requisitos

- Docker: [Instalação do Docker](https://docs.docker.com/get-docker/)

## Instruções

1. Clone este repositório para o seu ambiente local.

```bash
git clone https://github.com/nathanrib13/ex-pratico-rwe.git
cd ex-pratico-rwe
```

2. Crie um arquivo .env na raiz do diretório do projeto e configure as variáveis de ambiente necessárias. Um exemplo de conteúdo para o arquivo .env está incluído em env.example.


3. No terminal, dentro do diretório do projeto, execute o seguinte comando para iniciar os serviços usando Docker Compose.
```bash
docker-compose up
```
Agora, seus serviços estão em execução:

O serviço bd está executando o PostgreSQL na porta 5445.
O serviço api está executando a API na porta 3000.
O serviço front está executando a aplicação React na porta 5173.


Abra o navegador e acesse a aplicação React:
```bash
http://localhost:5173
```
