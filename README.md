# ASSESCOR - Assessoria Contábil & Corretagem Imobiliária

🌐 **Link de Acesso:** [https://wlidemberg.github.io/assescor_project/](https://wlidemberg.github.io/assescor_project/)

Este projeto é uma plataforma web moderna e interativa para a **ASSESCOR**, uma empresa especializada em serviços integrados de contabilidade corporativa, BPO financeiro e corretagem imobiliária de alto padrão (venda, locação e avaliação de imóveis).

A aplicação foi desenvolvida com foco em oferecer uma experiência de usuário premium, combinando design elegante, simulações em tempo real e fluxos de contratação automatizados.

---

## 🚀 Funcionalidades Principais

- **Simulador Fiscal Interativo**: Permite calcular e projetar a economia estimada mensal ao migrar ou otimizar o planejamento tributário com a Assescor.
- **Divisão de Especialidades**:
  - **Contabilidade & BPO**: Abertura de empresas, planejamento tributário e terceirização financeira (BPO).
  - **Corretagem Imobiliária**: Compra/venda de imóveis, administração de locações e emissão de laudos de avaliação mercadológica (PTAM).
- **Painel de Planos Claros**: Tabela detalhada de planos (Bronze, Prata e Ouro) com faturamento mensal simulado e toggles de cobrança (mensal e anual).
- **Onboarding de Clientes (Contratação)**: Fluxo passo a passo automatizado em React para abertura de novas empresas ou transição/migração de contador.
- **Área do Cliente (Painel/Dashboard)**: Dashboard simulado para acesso a guias fiscais, impostos a vencer, status de faturamento e obrigações mensais.
- **Widget de Atendimento por Inteligência Artificial**: Assistente virtual de IA interativo no canto da tela para sanar dúvidas tributárias frequentes e direcionar para o time humano.
- **Formulário de Contato & Integrações**: Página de contato com canais corporativos e seção de Perguntas Frequentes (FAQ) interativa.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as melhores e mais modernas práticas do ecossistema front-end:

- **React 19**: Biblioteca base para construção da interface de usuário em componentes reativos.
- **TypeScript**: Tipagem estática para maior segurança, escalabilidade e produtividade no desenvolvimento.
- **Vite**: Build tool ultrarrápida com Hot Module Replacement (HMR) instantâneo para ambiente de desenvolvimento.
- **Tailwind CSS**: Framework utilitário de CSS para estilização moderna, responsiva e alinhada ao design system premium da Assescor.
- **Lucide React**: Biblioteca de ícones vetoriais modernos e limpos.
- **React Router DOM v7**: Roteamento SPA flexível e integrado com suporte a hash routing.
- **Oxlint**: Linter de alta performance baseado em Rust para otimizar a qualidade do código.

---

## 📦 Estrutura do Projeto

```text
src/
├── assets/         # Arquivos estáticos (imagens, logotipos, etc.)
├── components/     # Componentes globais e reutilizáveis (Navbar, Footer, AIChatWidget, WhatsAppButton)
├── pages/          # Páginas principais da aplicação:
│   ├── Home.tsx        # Página de apresentação com o Simulador Fiscal
│   ├── Services.tsx    # Listagem de serviços (Contabilidade & Corretagem Imobiliária)
│   ├── Plans.tsx       # Tabela de planos e investimentos
│   ├── Hire.tsx        # Fluxo de onboarding passo a passo para contratação
│   ├── Contact.tsx     # Canais de atendimento e FAQ interativo
│   └── ClientArea.tsx  # Dashboard simulado da Área do Cliente
├── App.tsx         # Configuração de rotas e layout global
├── main.tsx        # Ponto de entrada do React
└── index.css       # Configuração global de estilos e design system do Tailwind
```

---

## 💻 Como Rodar o Projeto Localmente

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/assescor_project.git
   ```

2. **Acesse a pasta do projeto**:
   ```bash
   cd assescor_project
   ```

3. **Instale as dependências**:
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

5. **Acesse no navegador**:
   A aplicação estará rodando no endereço informado no terminal (geralmente [http://localhost:5173](http://localhost:5173)).

---

## ⚙️ Scripts Disponíveis

No diretório do projeto, você pode executar:

- `npm run dev`: Executa a aplicação em modo de desenvolvimento.
- `npm run build`: Compila a aplicação para produção na pasta `dist`.
- `npm run lint`: Executa a validação de regras de código usando o Oxlint.
- `npm run preview`: Executa localmente o build de produção gerado para visualização prévia.
