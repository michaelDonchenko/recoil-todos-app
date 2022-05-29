import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { todosState, filteredTodosState } from '../recoil/todo-state'

const TodosList = () => {
  const [todos, setTodos] = useRecoilState(todosState)
  const filteredTodos = useRecoilValue(filteredTodosState)

  const onToggle = (id: number) =>
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    )

  const onRemove = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <ol>
      {filteredTodos.map((todo) => (
        <li key={todo.id}>
          <span
            style={
              todo.completed
                ? { textDecoration: 'line-through', color: 'crimson' }
                : { color: 'green' }
            }
          >
            {todo.title}
          </span>
          <button className='list-button' onClick={() => onToggle(todo.id)}>
            Toggle
          </button>
          <button className='list-button' onClick={() => onRemove(todo.id)}>
            Remove
          </button>
        </li>
      ))}
    </ol>
  )
}

export default TodosList
