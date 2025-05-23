import { Todo } from "../data/Todo";

const todos: Todo[] = [
  { id: 1, title: 'todo1', completed: false },
  { id: 2, title: 'todo2', completed: false },
  { id: 3, title: 'todo3', completed: true },
]

export default function Task() {
  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className='flex items-center justify-between bg-gray-200 p-2 rounded mb-2'
        >
          <div className='flex items-center'>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => console.log('UPDATE: completed')}
              className='mr-2'
            />
            <p className={`text-black ${todo.completed ? 'line-through' : ''}`}>
              {todo.title}
            </p>
          </div>
          <button
            onClick={() => console.log('DELETE')}
            className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded'
          >
            Delete
          </button>
        </div>
      ))
      }
    </div>
  );
}
