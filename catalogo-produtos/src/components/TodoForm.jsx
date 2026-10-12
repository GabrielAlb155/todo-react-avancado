import { useState } from 'react';
import { useTodos } from '../context/TodoContext';

export default function TodoForm() {
  const [texto, setTexto] = useState('');
  const [prioridade, setPrioridade] = useState('media');
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;
    addTodo(texto, prioridade);
    setTexto('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Digite uma nova tarefa..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        className="flex-1 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
      />
      <select
        value={prioridade}
        onChange={(e) => setPrioridade(e.target.value)}
        className="border border-gray-300 p-2 rounded text-gray-700"
      >
        <option value="baixa">Baixa</option>
        <option value="media">Média</option>
        <option value="alta">Alta</option>
      </select>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Adicionar
      </button>
    </form>
  );
}