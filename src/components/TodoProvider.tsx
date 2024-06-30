import { useState } from 'react'
import { MOCK_TODOS } from '../data/mock.todos.ts'
import { TodoInterface } from '../types/Todo.interface.ts'
import { TodoProviderPropsInterface } from '../types/TodoProviderProps.interface.ts'
import { TodoContext } from '../context/TodoContext.ts'

export const TodoProvider = ({ children }: TodoProviderPropsInterface) => {
  const [todos, setTodos] = useState(MOCK_TODOS as TodoInterface[])

  const addTodo = (todo: TodoInterface) => {
    setTodos([...todos, todo])
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map((todo: TodoInterface) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteAllTodos = () => {
    setTodos([])
  }

  const clearAllTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const completedTodosCount = todos.filter((todo) => todo.completed).length

  const completedTodosExists = todos.some((todo) => todo.completed)

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        deleteAllTodos,
        clearAllTodos,
        completedTodosCount,
        completedTodosExists
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
