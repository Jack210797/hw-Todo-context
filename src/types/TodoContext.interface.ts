import { TodoInterface } from './Todo.interface'

export interface TodoContextInterface {
  todos: TodoInterface[]
  addTodo: (todo: TodoInterface) => void
  deleteTodo: (id: string) => void
  toggleTodo: (id: string) => void
  deleteAllTodos: () => void
  clearAllTodos: () => void
  completedTodosCount: number
  completedTodosExists: boolean
}
