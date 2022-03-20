import { useEffect, useState } from 'react'
import axios from 'axios'
import { ITodo } from './types/types';
import TodoItem from './components/TodoItem';
import List from './components/List';

const TodoPage = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const fetchTodos = async () => {
      try {
        const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
        setTodos(response.data)
      } catch (err) {
        alert(err + ": ERROR")
      }
    }
  
    useEffect(() => {
      fetchTodos()
    }, [])

    return (
      <List 
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    )
}

export default TodoPage