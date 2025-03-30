## Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas:
- [Node.js]
- [NPM]
- [Prisma]

## Configuração do Projeto
1. Clone o repositório:
   ```sh
   git clone "link do repositório"
   cd nome-do-projeto
   ```
2. Instale as dependências:
   ```sh
   ou npm install
   ```
3. Configure as variáveis de ambiente:
   - Copie o arquivo `.env.example` e renomeie para `.env`
   - Configure os valores conforme necessário, como conexão com banco de dados, chaves API, etc.

## Executando a Aplicação
```sh
npm run start:dev
```
A aplicação estará disponível em `http://localhost:3000/`



## Boas Práticas
- Utilize **TypeScript** para manter a tipagem forte
- Siga os princípios de **arquitetura modular** do NestJS
- Use **DTOs** para validar e transferir dados entre camadas
- Utilize **dependências injetáveis** (Dependency Injection) sempre que possível
- Mantenha os logs e tratamentos de erros adequados

## Contribuindo
1. Crie um branch para a sua feature:
   ```sh
   git checkout -b minha-feature
   ```
2. Faça suas alterações e commit:
   ```sh
   git commit -m "feat: descrição da funcionalidade"
   ```
3. Suba seu código e crie um Pull Request

