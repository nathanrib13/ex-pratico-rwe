# ex-pratico-rwe

Iniciando projeto maquina local.
Nesse projeto você pode inicia-lo de 2 formas, usando o docker ou subindo todos os serviços localmente de forma manual, 
segue as instruções de ambas opções. 


## Pré-requisitos

Opção 1
- Docker: [Instalação do Docker](https://docs.docker.com/get-docker/)

Opção 2
- Node: [Instalação do Node](https://nodejs.org/pt-br/download)
- Postegresql : [Instalação do Postegresql](https://www.postgresql.org/download/) 

<br />

## Instruções usando docker para iniciar o projeto (Opção 1)

1. Clone este repositório para o seu ambiente local.

```bash
git clone https://github.com/nathanrib13/ex-pratico-rwe.git
cd ex-pratico-rwe
```

3. No terminal, dentro do diretório do projeto, execute o seguinte comando para iniciar os serviços usando Docker Compose.
```bash
docker-compose up
```
Agora, seus serviços estão em execução:

* O serviço bd está executando o PostgreSQL na porta 5445
* O serviço api está executando a API na porta 3000
* O serviço front está executando a aplicação React na porta 5173

Abra o navegador e acesse a aplicação React:
```bash
http://localhost:5173
```
<br />

## Instruções usando Node local + Postegresql para iniciar o projeto (Opção 2)

1. Clone este repositório para o seu ambiente local.

```bash
git clone https://github.com/nathanrib13/ex-pratico-rwe.git
cd ex-pratico-rwe
```

2. Certifique-se que no seu ambiente o postregresql esteja em execução. 

3. Entre na pasta back do projeto.

4. Crie um arquivo .env na raiz do diretório do backend do projeto (pasta back) e configure as variáveis de ambiente necessárias. 
Um exemplo de conteúdo para o arquivo .env está incluído em env.example.

5. No terminal, dentro do diretório do backend projeto, execute o seguinte comando para instalar todas as dependências do projeto.
```bash
npm i 
```

6. No terminal, dentro do diretório do backend projeto, execute o seguinte comando para iniciar os serviços da api.
```bash
npm rum dev 
```

Agora, seu serviço está em execução:
* O serviço api está executando a API na porta 3000


7. Entre na pasta front do projeto.

8. No terminal, dentro do diretório do front projeto, execute o seguinte comando para instalar todas as dependências do projeto.
```bash
npm i 
```

9. No terminal, dentro do diretório do front projeto, execute o seguinte comando para iniciar o serviço do front.
```bash
npm rum dev 
```

Agora, seu serviço está em execução:
O serviço front está executando a aplicação React na porta 5173.


Abra o navegador e acesse a aplicação React:
```bash
http://localhost:5173
```
