import { useTodos } from '../context/TodoContext';

export default function TodoStats() {
  const { stats } = useTodos();

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <div className="grid grid-cols-3 gap-2 text-center mb-3">
        <div>
          <span className="block text-xs text-gray-500 font-medium">TOTAL</span>
          <span className="text-xl font-bold text-gray-800">{stats.total}</span>
        </div>
        <div>
          <span className="block text-xs text-green-600 font-medium">CONCLUÍDAS</span>
          <span className="text-xl font-bold text-green-600">{stats.concluidas}</span>
        </div>
        <div>
          <span className="block text-xs text-orange-500 font-medium">PENDENTES</span>
          <span className="text-xl font-bold text-orange-500">{stats.pendentes}</span>
        </div>
      </div>

      {/* Barra de Progresso */}
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${stats.progresso}%` }}
        ></div>
      </div>
      <p className="text-right text-xs text-gray-500 mt-1">
        {stats.progresso}% concluído
      </p>
    </div>
  );
}