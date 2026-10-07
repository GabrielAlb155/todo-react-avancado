import { useState } from "react";

export default function TodoForm({ onAddTodo }) {
  const [texto, setTexto] = useState("");
  const [prioridade, setPrioridade] = useState("media");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;

    onAddTodo({
      id: Date.now(),
      texto: texto.trim(),
      concluida: false,
      prioridade,
      criadaEm: new Date().toLocaleDateString("pt-BR"),
    });

    setTexto("");
    setPrioridade("media");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-100 mb-6 space-y-4">
      <h2 className="text-lg font-bold text-gray-800">Nova Tarefa</h2>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="O que você precisa fazer?"
          className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
        />
        <select
          value={prioridade}
          onChange={(e) => setPrioridade(e.target.value)}
          className="px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-white cursor-pointer"
        >
          <option value="baixa">Baixa Prioridade</option>
          <option value="media">Média Prioridade</option>
          <option value="alta">Alta Prioridade</option>
        </select>
        <button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm cursor-pointer whitespace-nowrap"
        >
          Adicionar
        </button>
      </div>
    </form>
  );
}