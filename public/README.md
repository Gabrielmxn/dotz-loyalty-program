
# Dotz Loyalty Program

Este é o projeto Dotz Loyalty Program, uma aplicação front-end utilizando React, TypeScript, Vite, e outras bibliotecas para desenvolvimento de interfaces e interação com APIs.

## Tecnologias

- React
- TypeScript
- Vite
- Axios
- React Hook Form
- Radix UI
- JSON Server (para simulação de backend)
- Sonner (para toasts)
- Styled Components

## Dependências

Este projeto possui as seguintes dependências principais:

- `@hookform/resolvers`: Integração com resolvers para React Hook Form.
- `@phosphor-icons/react`: Ícones para a interface.
- `@radix-ui/react-checkbox` e `@radix-ui/react-dialog`: Componentes da Radix UI.
- `@tanstack/react-query`: Gerenciamento de estados e requisições assíncronas.
- `axios`: Cliente HTTP para fazer requisições.
- `react-hook-form`: Manipulação de formulários.
- `react-router`: Roteamento para navegação entre páginas.
- `sonner`: Toasts de notificações.
- `styled-components`: Estilização de componentes.

## Instalação

Para rodar este projeto localmente, siga os passos abaixo:

1. Clone este repositório:
   ```bash
   git clone <url-do-repositório>
   cd dotz-loyalty-program
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Scripts

Este projeto possui os seguintes scripts disponíveis:

- `start`: Inicia a aplicação em modo de desenvolvimento e o servidor JSON.
  ```bash
  npm start
  ```
  - Inicia o Vite (`npm run dev`).
  - Inicia o servidor JSON com `json-server db.json` para simular o backend.
  
- `dev`: Executa o Vite no modo de desenvolvimento.
  ```bash
  npm run dev
  ```

- `build`: Compila o código TypeScript e constrói a versão de produção com Vite.
  ```bash
  npm run build
  ```

- `lint`: Executa o ESLint para verificar a qualidade do código.
  ```bash
  npm run lint
  ```

- `server`: Inicia o servidor JSON para simulação de backend.
  ```bash
  npm run server
  ```

- `preview`: Preview da build de produção gerada pelo Vite.
  ```bash
  npm run preview
  ```

## Como Rodar a Aplicação

Para rodar a aplicação no modo de desenvolvimento com o servidor local:

1. Execute o comando:
   ```bash
   npm start
   ```

2. O Vite iniciará o servidor de desenvolvimento e o servidor JSON será executado para fornecer dados simulados.

## Desenvolvimento

Se você for fazer modificações no código, é recomendável usar o script `dev` para executar a aplicação em modo de desenvolvimento.

Para verificar o código, use o script `lint` para garantir que o código segue os padrões definidos no ESLint.

## Contribuição

Sinta-se à vontade para enviar pull requests ou abrir issues para discutir melhorias!

---

Obrigado por usar o Dotz Loyalty Program! 🚀
