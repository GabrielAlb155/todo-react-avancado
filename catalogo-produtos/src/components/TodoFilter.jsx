export default function TodoFilter({ filtroStatus, setFiltroStatus, busca, setBusca }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
      {/* Busca */}
      <input
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Buscar tarefas..."
        className="w-full sm:w-64 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />

      {/* Botões de Filtro */}
      <div className="flex gap-2 w-full sm:w-auto justify-center">
        {["todas", "pendentes", "concluidas"].map((status) => (
          <button
            key={status}
            onClick={() => setFiltroStatus(status)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors cursor-pointer ${
              filtroStatus === status
                ? "bg-emerald-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
}