import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { deleteTodo, toggleTodo, addTodo } from './actions';

function App() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const handleDeleteTodo = id => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = id => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className='App'>
      <h1>To-Do List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            {todo.text}
            {''}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type='text'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
