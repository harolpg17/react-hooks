import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
  
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) );
    }, [todos])
    
    const todosCount = todos.length;
    const pendingTodosCount = todos.filter(todo => !todo.done).length;

    const handleNewTodo = (todo) => {
        const action = {
            type: 'add',
            payload: todo
        };

        dispatch(action);
    }

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        };

        dispatch(action);
    }

    const handleToggleTodo = (todoId) => {
        const action = {
            type: 'toggle',
            payload: todoId
        };

        dispatch(action);
    }
  
    return {
        todos,
        todosCount, 
        pendingTodosCount,
        handleNewTodo,
        handleDelete,
        handleToggleTodo
    }
}
