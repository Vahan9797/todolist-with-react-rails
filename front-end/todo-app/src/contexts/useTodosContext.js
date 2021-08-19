import { useContext } from 'react';
import { TodosContext } from './TodosContext';

const useTodosContext = () => {
  const [todos, setTodos] = useContext(TodosContext);

  const createTodo = (todo) => {
    todos.push(todo);
    setTodos(todos);
  }

  const updateTodo = ({ id, content, imgUrl }) => {
    todos.some(todo => {
      if(todo.id === id) {
        todo.content = content;
        todo.imgUrl = imgUrl;
      }
      return todo.id === id;
    });

    setTodos(todos);
  }

  const updateChecked = ({ data }) => {
    todos.some(todo => {
      //debugger;
      if(todo.id === data.updateTodo.todo.id) todo.checked = data.updateTodo.todo.checked;
      return todo.id === data.updateTodo.todo.id;
    });

    setTodos(todos);
  }

  const deleteTodo = ({ data }) => {
    setTodos(todos.filter(todo => todo.id !== data.deleteTodo.id));
  }

  return { createTodo, updateTodo, updateChecked, deleteTodo }
}

export default useTodosContext;