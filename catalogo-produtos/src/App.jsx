import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import TodoStats from './components/TodoStats';

export default function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Gerenciador de Tarefas
          </h1>
          <TodoStats />
          <TodoForm />
          <TodoFilter />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}