import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoFilter from "./components/TodoFilter";
import TodoStats from "./components/TodoStats";
import TodoItem from "./components/TodoItem";

export default function App() {
  // Inicialização do estado lendo do LocalStorage (Carregamento Assíncrono/Simulado)
  const [todos, setTodos] = useState(() => {
    const salvos = localStorage.getItem("@todo-list:tarefas");
    if (salvos) {
      try { return JSON.parse(salvos); } catch { return []; }
    }
    return [
      { id: 1, texto: "Estudar React e Hooks avançados", concluida: true, prioridade: "alta", criadaEm: "01/10/2026" },
      { id: 2, texto: "Construir projeto Todo List", concluida: false, prioridade: "alta", criadaEm: "02/10/2026" },
      { id: 3, texto: "Enviar link do GitHub para avaliação", concluida: false, prioridade: "media", criadaEm: "02/10/2026" }
    ];
  });

  const [filtroStatus, setFiltroStatus] = useState("todas");
  const [busca, setBusca] = useState("");

  // Persiste as tarefas no LocalStorage sempre que houver alteração
  useEffect(() => {
    localStorage.setItem("@todo-list:tarefas", JSON.stringify(todos));
  }, [todos]);

  // Handlers para manipulação de tarefas
  const handleAddTodo = (novoTodo) => {
    setTodos((prev) => [novoTodo, ...prev]);
  };

  const handleToggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t))
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleEditTodo = (id, novoTexto) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, texto: novoTexto } : t))
    );
  };

  // Filtragem dinâmica das tarefas
  const todosFiltrados = todos.filter((todo) => {
    const atendeBusca = todo.texto.toLowerCase().includes(busca.toLowerCase());
    if (filtroStatus === "pendentes") return atendeBusca && !todo.concluida;
    if (filtroStatus === "concluidas") return atendeBusca && todo.concluida;
    return atendeBusca;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            Gerenciador de Tarefas
          </h1>
          <p className="text-sm text-gray-600">
            Aplicação React com estado avançado, filtros e persistência local
          </p>
        </header>

        <TodoStats todos={todos} />
        <TodoForm onAddTodo={handleAddTodo} />
        <TodoFilter
          filtroStatus={filtroStatus}
          setFiltroStatus={setFiltroStatus}
          busca={busca}
          setBusca={setBusca}
        />

        <div className="space-y-3">
          {todosFiltrados.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-100 shadow-sm text-gray-500">
              Nenhuma tarefa encontrada.
            </div>
          ) : (
            todosFiltrados.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleToggleTodo}
                onDelete={handleDeleteTodo}
                onEdit={handleEditTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}