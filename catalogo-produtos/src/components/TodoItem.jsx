import { useState } from "react";

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [editando, setEditando] = useState(false);
  const [novoTexto, setNovoTexto] = useState(todo.texto);

  const handleSalvarEdicao = () => {
    if (novoTexto.trim()) {
      onEdit(todo.id, novoTexto.trim());
      setEditando(false);
    }
  };

  const coresPrioridade = {
    baixa: "bg-blue-100 text-blue-700 border-blue-200",
    media: "bg-amber-100 text-amber-700 border-amber-200",
    alta: "bg-rose-100 text-rose-700 border-rose-200",
  };

  return (
    <div className={`p-4 rounded-xl bg-white border shadow-sm transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
      todo.concluida ? "opacity-60 bg-gray-50 border-gray-200" : "border-gray-100 hover:shadow-md"
    }`}>
      <div className="flex items-center gap-3 w-full sm:w-auto flex-1">
        <input
          type="checkbox"
          checked={todo.concluida}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 accent-emerald-600 rounded cursor-pointer"
        />

        {editando ? (
          <input
            type="text"
            value={novoTexto}
            onChange={(e) => setNovoTexto(e.target.value)}
            className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            autoFocus
          />
        ) : (
          <span className={`text-sm flex-1 ${todo.concluida ? "line-through text-gray-400" : "text-gray-800 font-medium"}`}>
            {todo.texto}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 self-end sm:self-center">
        <span className={`text-xs px-2 py-0.5 rounded-full border ${coresPrioridade[todo.prioridade]}`}>
          {todo.prioridade}
        </span>

        {editando ? (
          <button
            onClick={handleSalvarEdicao}
            className="text-xs bg-emerald-600 text-white px-3 py-1 rounded hover:bg-emerald-700 cursor-pointer"
          >
            Salvar
          </button>
        ) : (
          <button
            onClick={() => setEditando(true)}
            className="text-xs text-gray-500 hover:text-gray-800 px-2 py-1 rounded cursor-pointer"
          >
            Editar
          </button>
        )}

        <button
          onClick={() => onDelete(todo.id)}
          className="text-xs text-rose-600 hover:text-rose-800 px-2 py-1 rounded cursor-pointer"
        >
          Excluir
        </button>
      </div>
    </div>
  );
}