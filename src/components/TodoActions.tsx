import { RiCheckboxCircleLine, RiDeleteBin2Line } from 'react-icons/ri'
import Button from './Button'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext.ts'

const TodoActions = () => {
  const { todos, deleteAllTodos, clearAllTodos } = useContext(TodoContext)
  const completedTodosExists = todos.some((todo) => todo.completed)

  if (!todos.length) return null
  return (
    <div className="todos__actions">
      <Button title="Delete All Todos" onClick={() => deleteAllTodos()}>
        <RiDeleteBin2Line />
      </Button>
      <Button title="Clear All Todos" onClick={() => clearAllTodos()} disabled={!completedTodosExists}>
        <RiCheckboxCircleLine />
      </Button>
    </div>
  )
}

export default TodoActions
