# Cantina FIAP

Aplicativo mobile para pedidos na cantina da FIAP. Faca seu pedido pelo celular, receba uma senha e retire no balcao — sem filas, sem espera.

## Sobre o Projeto

### Problema

A fila na cantina da FIAP gera perda de tempo nos intervalos entre aulas. Alunos enfrentam incerteza sobre disponibilidade de itens e demora no atendimento, especialmente nos horarios de pico. Muitos desistem de comprar por falta de tempo.

### Solucao

Um app estilo fast-food (BK, McDonald's) onde o aluno:

1. Navega pelo cardapio digital
2. Monta seu pedido com quantidades
3. Confirma e recebe uma **senha de 3 digitos**
4. Retira no balcao quando o numero for chamado no painel

### Funcionalidades

- Cardapio digital organizado por categorias (Bebidas, Lanches, Sobremesas)
- Sistema de adicionar/remover itens com controle de quantidade
- Calculo automatico do total do pedido
- Tela de loading durante processamento do pedido
- Geracao de senha aleatoria para retirada
- Resumo completo do pedido na confirmacao
- Tratamento de estado vazio (sem itens no carrinho)
- Navegacao completa entre todas as telas

## Integrantes do Grupo

| Nome | RM |
|---|---|
| Joao Victor Franco | 556790 |

## Como Rodar o Projeto

### Pre-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [Expo Go](https://expo.dev/go) instalado no celular (para testar no dispositivo fisico)
- Git

### Passo a passo

```bash
# 1. Clone o repositorio
git clone https://github.com/SEU-USUARIO/fiap-mdi-cp1-cantina-app.git

# 2. Entre na pasta do projeto
cd fiap-mdi-cp1-cantina-app

# 3. Instale as dependencias
npm install

# 4. Rode o projeto
npx expo start
```

Depois escaneie o QR Code com o app **Expo Go** no celular, ou pressione `a` para abrir no emulador Android.

## Demonstracao

### Telas do App

#### Tela 1 — Home
Tela inicial com logo FIAP, secao "Como Funciona" em 3 passos e destaques do dia.

<!-- Substituir pelo print real -->
> _Print da tela Home aqui_

#### Tela 2 — Cardapio
Cardapio completo organizado por categorias. O aluno adiciona e remove itens com os botoes +/−. Uma barra inferior mostra o total em tempo real.

<!-- Substituir pelo print real -->
> _Print da tela Cardapio aqui_

#### Tela 3 — Confirmacao
Apos confirmar o pedido, uma tela de loading aparece por 1.5s simulando o processamento. Em seguida, a senha de 3 digitos e exibida junto com o resumo do pedido.

<!-- Substituir pelo print real -->
> _Print da tela Confirmacao aqui_

#### Tela 4 — Sobre
Informacoes sobre o projeto, problema identificado, solucao, integrantes e tecnologias utilizadas.

<!-- Substituir pelo print real -->
> _Print da tela Sobre aqui_

### Video / GIF

<!-- Substituir pelo GIF ou link do video -->
> _GIF ou link do video demonstrando o fluxo principal aqui_

## Decisoes Tecnicas

### Estrutura do Projeto

```
fiap-mdi-cp1-cantina-app/
├── app/
│   ├── _layout.js              # Stack root + carregamento da fonte Manrope
│   ├── (tabs)/
│   │   ├── _layout.js          # Tabs (Inicio, Cardapio, Sobre)
│   │   ├── index.js            # Tela Home
│   │   ├── cardapio.js         # Tela Cardapio com carrinho
│   │   └── sobre.js            # Tela Sobre
│   └── confirmacao.js          # Tela Confirmacao (Stack push)
├── components/
│   ├── ItemCardapio.js         # Componente reutilizavel de item do cardapio
│   └── FiapLogo.js             # Logo FIAP renderizada em SVG
├── data/
│   └── cardapio.js             # Dados do cardapio (8 itens, 3 categorias)
└── assets/
```

### Hooks utilizados

| Hook | Onde | Para que |
|---|---|---|
| `useState` | `cardapio.js` | Gerenciar quantidades dos itens no carrinho |
| `useState` | `confirmacao.js` | Controlar estado de loading e senha gerada |
| `useEffect` | `confirmacao.js` | Gerar senha aleatoria apos 1.5s (simula processamento) |
| `useFonts` | `_layout.js` | Carregar fonte Manrope do Google Fonts |

### Navegacao

- **Expo Router** com layout hibrido: `Tabs` (3 abas) + `Stack` (confirmacao empilhada)
- Tabs: Home, Cardapio, Sobre
- A tela de Confirmacao e acessada via `router.push()` com parametros (total, itens, resumo)
- Retorno ao inicio via `router.replace()` para limpar a pilha

### Estilizacao

- **StyleSheet** em todos os componentes
- Design minimalista dark (background `#0A0A0A`)
- Cor primaria FIAP: `#ED145B`
- Fonte **Manrope** (Google Fonts) com 5 pesos
- Todos os titulos em CAPS com letter-spacing
- Logo FIAP renderizada como SVG via `react-native-svg`

## Proximos Passos

- Integracao com backend para cardapio dinamico e precos em tempo real
- Sistema de pagamento integrado (PIX, cartao)
- Painel administrativo para a cantina gerenciar pedidos e chamar senhas
- Notificacoes push quando o pedido estiver pronto
- Historico de pedidos do aluno
- Autenticacao com RM do aluno
