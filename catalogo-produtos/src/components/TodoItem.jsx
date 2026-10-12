import { memo, useState } from 'react';
import { useTodos } from '../context/TodoContext';

const TodoItem = memo(function TodoItem({ todo }) {
  const { completeTodo, removeTodo, editTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.texto);

  const handleSave = () => {
    if (editText.trim()) {
      editTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center justify-between p-3 bg-gray-50 rounded mb-2 border border-gray-200">
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo.id)}
          className="h-5 w-5 accent-blue-600"
        />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border p-1 rounded w-full text-gray-800"
          />
        ) : (
          <span
            className={`text-gray-800 ${
              todo.completed ? 'line-through text-gray-400' : ''
            }`}
          >
            {todo.texto}
          </span>
        )}
      </div>

      <div className="flex gap-2 ml-4">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
          >
            Salvar
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600"
          >
            Editar
          </button>
        )}
        <button
          onClick={() => removeTodo(todo.id)}
          className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
        >
          Excluir
        </button>
      </div>
    </li>
  );
});

export default TodoItem;