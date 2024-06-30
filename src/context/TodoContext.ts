import { createContext } from 'react'
import { TodoContextInterface } from '../types/TodoContext.interface'
import { initialState } from './initialState'

export const TodoContext = createContext<TodoContextInterface>(initialState)
