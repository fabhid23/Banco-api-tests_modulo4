# Banco API Tests - Módulo 4

Este projeto contém uma suíte de testes automatizados para a API REST do repositório [`banco-api`](https://github.com/fabhid23/banco-api). Os testes são implementados em **JavaScript** e utilizam ferramentas modernas para validação e verificação de endpoints RESTful.

## 🎯 Objetivo

Garantir o funcionamento adequado dos endpoints da API REST do projeto `banco-api` por meio de testes automatizados.

## 🛠️ Stack Utilizada

- **Linguagem:** JavaScript (Node.js)
- **Framework de Testes:** [Mocha](https://mochajs.org/)
- **Biblioteca de Assertivas:** [Chai](https://www.chaijs.com/)
- **Biblioteca de Requisições HTTP:** [Supertest](https://github.com/visionmedia/supertest)
- **Relatórios:** [Mochawesome](https://github.com/adamgruber/mochawesome)
- **Gerenciador de Pacotes:** npm

## 📁 Estrutura de Diretórios

```
banco-api-tests_modulo4/
├── test/               # Testes organizados por funcionalidades
│   └── ...             # Arquivos de teste (ex: contas.test.js, login.test.js)
├── mochawesome-report/ # Relatórios HTML gerados automaticamente (após execução)
├── .env                # Arquivo com variáveis de ambiente (não incluído no repo)
├── .gitignore
├── package.json
└── README.md
```


## ▶️ Executando os Testes

1. Clone esses dois repositórios para funcionar os testes.

git clone https://github.com/fabhid23/Banco-api-tests_modulo4.git
cd Banco-api-tests_modulo4

git clone https://github.com/fabhid23/banco-api
cd banco-api

** Precisa estar rodando o backend **

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
BASE_URL=http://localhost:3000
```

Substitua a URL conforme o endereço onde a API `banco-api` estiver rodando.

2. Instale as dependências:

```bash
npm install
```

3. Execute os testes e gere relatório:

```bash
npm test
```
Isso executa os testes Mocha com reporter Mochawesome.

4. pós execução, o relatório HTML estará disponível em:

```bash
mochawesome/mochawesome.html
```

O relatório será salvo na pasta `mochawesome-report/` como um arquivo HTML que pode ser aberto em qualquer navegador.

## 📚 Documentação das Dependências

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/visionmedia/supertest)
- [Mochawesome](https://github.com/adamgruber/mochawesome)
- [dotenv](https://github.com/motdotla/dotenv)


