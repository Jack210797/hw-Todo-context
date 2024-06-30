import Form from './components/Form'
import Todos from './components/Todos'
import './index.css'
import TodoActions from './components/TodoActions'
import { TodoProvider } from './components/TodoProvider'

const App = () => {
  return (
    <TodoProvider>
      <div className="container">
        <h1>Todo App</h1>
        <Form />
        <TodoActions />
        <Todos />
      </div>
    </TodoProvider>
  )
}

export default App
