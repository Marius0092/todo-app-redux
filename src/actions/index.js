let nextTodoId = 1;

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: nextTodoId++,
      text,
      completed: false,
    },
  };
};

export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    payload: id,
  };
};

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    payload: id,
  };
};
