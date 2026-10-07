export default function TodoStats({ todos }) {
  const total = todos.length;
  const concluidas = todos.filter((t) => t.concluida).length;
  const porcentagem = total === 0 ? 0 : Math.round((concluidas / total) * 100);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 mb-6">
      <div className="flex justify-between items-center mb-2 text-sm font-semibold text-gray-700">
        <span>Progresso Geral</span>
        <span>{porcentagem}% ({concluidas}/{total})</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-emerald-600 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${porcentagem}%` }}
        ></div>
      </div>
    </div>
  );
}