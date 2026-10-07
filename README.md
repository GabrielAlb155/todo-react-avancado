# 📝 Todo List - Gerenciador de Tarefas em React

Uma aplicação front-end moderna e responsiva para gerenciamento de tarefas (Todo List), desenvolvida com **React**, **Vite** e **Tailwind CSS**. O projeto demonstra a aplicação prática de componentes reutilizáveis, gerenciamento de estado avançado com hooks (`useState`, `useEffect`) e persistência de dados.

---

## 🚀 Demonstração & Funcionalidades

- **Gerenciamento de Tarefas:** Adição, edição inline, exclusão e alternância de status (concluída/pendente).
- **Categorização por Prioridade:** Níveis de prioridade (Baixa, Média e Alta) com marcadores visuais.
- **Filtros e Busca Dinâmica:**
  - Filtragem por status: *Todas*, *Pendentes* e *Concluídas*.
  - Busca por palavra-chave em tempo real.
- **Painel de Métricas:** Barra de progresso dinâmica e contadores de tarefas concluídas/totais.
- **Persistência de Dados:** Armazenamento automático no `localStorage` do navegador via `useEffect`.
- **Design Responsivo:** Layout fluido e adaptável para dispositivos móveis, tablets e desktops com Tailwind CSS.

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/):** Biblioteca principal para construção da interface declarativa em componentes.
- **[Vite](https://vitejs.dev/):** Ferramenta de build rápida e ambiente de desenvolvimento.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework utilitário de CSS para estilização moderna e responsiva.
- **[JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript):** Manipulação de arrays, métodos imutáveis (`map`, `filter`) e arrow functions.

---

## 🧩 Recursos e Hooks do React Aplicados

1. **`useState`:** 
   - Gerenciamento do estado central de tarefas (array de objetos).
   - Controle do formulário (inputs de texto e prioridade).
   - Controle de estados de filtro, busca e modo de edição inline.
2. **`useEffect`:** 
   - Sincronização e persistência automática do estado de tarefas no `localStorage` a cada alteração.
3. **Props & Comunicação entre Componentes:**
   - Elevação de estado (*Lifting State Up*) e passagem de callbacks (`onAddTodo`, `onToggle`, `onDelete`, `onEdit`) para manter o fluxo unidirecional de dados.
4. **Renderização Condicional e de Listas:**
   - Renderização dinâmica de itens com `.map()` e uso de `key` única baseada em timestamp (`Date.now()`).

---

## 📁 Estrutura do Projeto

```text
src/
├── components/
│   ├── TodoFilter.jsx   # Componente de filtros por status e busca
│   ├── TodoForm.jsx     # Formulário controlado para cadastro de tarefas
│   ├── TodoItem.jsx     # Item individual da lista com edição e exclusão
│   └── TodoStats.jsx    # Painel com estatísticas e barra de progresso
├── App.jsx              # Componente principal / Gerenciamento de estado global
├── index.css            # Configuração das diretivas do Tailwind CSS
└── main.jsx             # Ponto de entrada da aplicação React
