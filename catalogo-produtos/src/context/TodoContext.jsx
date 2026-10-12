import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState('todas');
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = useCallback((texto, prioridade) => {
    if (!texto.trim()) return;
    const newTodo = {
      id: Date.now(),
      texto,
      prioridade,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  }, []);

  const removeTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const completeTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const editTodo = useCallback((id, novoTexto) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, texto: novoTexto } : todo
      )
    );
  }, []);

  const todosFiltrados = useMemo(() => {
    return todos.filter((todo) => {
      const bateuFiltro =
        filter === 'todas'
          ? true
          : filter === 'concluidas'
          ? todo.completed
          : !todo.completed;

      const bateuBusca = todo.texto
        .toLowerCase()
        .includes(search.toLowerCase());

      return bateuFiltro && bateuBusca;
    });
  }, [todos, filter, search]);

  const stats = useMemo(() => {
    const total = todos.length;
    const concluidas = todos.filter((t) => t.completed).length;
    const pendentes = total - concluidas;
    const progresso = total > 0 ? Math.round((concluidas / total) * 100) : 0;
    return { total, concluidas, pendentes, progresso };
  }, [todos]);

  const value = useMemo(
    () => ({
      todos: todosFiltrados,
      stats,
      filter,
      setFilter,
      search,
      setSearch,
      addTodo,
      removeTodo,
      completeTodo,
      editTodo,
    }),
    [
      todosFiltrados,
      stats,
      filter,
      search,
      addTodo,
      removeTodo,
      completeTodo,
      editTodo,
    ]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos deve ser usado dentro de um TodoProvider');
  }
  return context;
}