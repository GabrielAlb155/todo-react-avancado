import { useTodos } from '../context/TodoContext';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos } = useTodos();

  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-500 py-4">
        Nenhuma tarefa encontrada.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-gray-200 mt-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}