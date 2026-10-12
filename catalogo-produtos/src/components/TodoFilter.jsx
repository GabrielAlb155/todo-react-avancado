import { useTodos } from '../context/TodoContext';

export default function TodoFilter() {
  const { filter, setFilter, search, setSearch } = useTodos();

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-4 justify-between">
      <input
        type="text"
        placeholder="Buscar tarefa..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 p-2 rounded text-sm flex-1 text-gray-800"
      />
      <div className="flex gap-1 bg-gray-200 p-1 rounded">
        {['todas', 'pendentes', 'concluidas'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 text-xs rounded capitalize font-medium ${
              filter === f
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
}