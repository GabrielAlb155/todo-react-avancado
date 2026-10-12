# 📝 Gerenciador de Tarefas Avançado (React + Vite + Tailwind CSS)

Aplicação Web para gerenciamento de tarefas desenvolvida em **React**, focada na implementação de conceitos avançados como **Context API**, **Custom Hooks**, técnicas de **Memoização (`useMemo`, `useCallback`, `memo`)** e estilização com **Tailwind CSS**.

🔗 **Demonstração Online:** [https://GabrielAlb155.github.io/todo-react-avancado/](https://GabrielAlb155.github.io/todo-react-avancado/)

---

## 🚀 Recursos e Funcionalidades

- 📌 **Gerenciamento Completo de Tarefas:** Adicionar, editar, concluir e remover tarefas.
- 🎯 **Nível de Prioridade:** Classificação de tarefas em prioridade Alta, Média e Baixa.
- 🔍 **Busca e Filtragem:** Pesquisa em tempo real por título e filtros por status (*Todas*, *Pendentes*, *Concluídas*).
- 📊 **Estatísticas Avançadas:** Métricas calculadas dinamicamente com indicador visual de progresso (barra de progresso).
- 💾 **Persistência de Dados:** Armazenamento automático no `localStorage` do navegador.
- 📱 **Interface Responsiva:** Design adaptável para dispositivos móveis e desktops construído com Tailwind CSS.

---

## 🛠️ Tecnologias e Conceitos Avançados Utilizados

- **React (Vite)** — Bootstrapping e estrutura da aplicação.
- **Context API (`TodoContext`)** — Gerenciamento de estado global descentralizado, eliminando *prop drilling*.
- **Custom Hook (`useTodos`)** — Encapsulamento da lógica de acesso e validação do contexto das tarefas.
- **Memoização (`useMemo`)** — Otimização no cálculo das estatísticas e na filtragem/busca de tarefas para evitar re-computações desnecessárias.
- **Funções Memoizadas (`useCallback`)** — Estabilização das referências das funções de manipulação de estado (`addTodo`, `removeTodo`, `completeTodo`, `editTodo`).
- **Componentes Memoizados (`memo`)** — Prevenção de re-renderizações desnecessárias em `TodoItem`.
- **Tailwind CSS (`@tailwindcss/vite`)** — Estilização utilitária e responsiva.
- **GitHub Pages (`gh-pages`)** — Automação do deploy e hospedagem estática.

---

## 📁 Estrutura do Projeto

```text
catalogo-produtos/
├── public/
├── src/
│   ├── components/
│   │   ├── TodoFilter.jsx   # Filtros por status e busca
│   │   ├── TodoForm.jsx     # Formulário de criação de tarefas
│   │   ├── TodoItem.jsx     # Item individual da lista (memoizado)
│   │   ├── TodoList.jsx     # Lista container de tarefas
│   │   └── TodoStats.jsx    # Painel de métricas e progresso
│   ├── context/
│   │   └── TodoContext.jsx  # Contexto, Provider e Hook useTodos
│   ├── App.jsx              # Componente raiz encapsulado pelo Provider
│   ├── main.jsx             # Ponto de entrada do React
│   └── index.css            # Estilos globais e Tailwind CSS
├── eslint.config.js         # Configurações do ESLint e Fast Refresh
├── vite.config.js           # Configurações do Vite (base path e plugins)
└── package.json             # Dependências e scripts do projeto
