import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { deleteTodo, toggleTodo, addTodo } from './actions';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className='App d-flex flex-column justify-content-center align-items-center'>
      <h1>To-Do List</h1>
      <ul
        className='d-flex flex-column align-items-end'
        style={{
          width: '230px',
          margin: '0',
          marginBottom: '10px',
          padding: '0',
          gap: '5px',
        }}
      >
        {todos.map(todo => (
          <li
            className='d-flex flex-row justify-content-center align-items-center'
            style={{ gap: '5px' }}
            key={todo.id}
          >
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            {todo.text}{' '}
            <Button
              variant='danger'
              size='sm'
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
      <div className='d-flex flex-row justify-content-center align-items-center'>
        <input
          type='text'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <Button variant='primary' size='sm' onClick={handleAddTodo}>
          Add
        </Button>
      </div>
    </div>
  );
}

export default App;
