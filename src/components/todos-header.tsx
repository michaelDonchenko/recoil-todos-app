import React from 'react'
import { useRecoilValue } from 'recoil'
import { todosSelector } from '../recoil/todo-state'

const TodosHeader = () => {
  const todos = useRecoilValue(todosSelector)

  return (
    <div>
      <p>Total todos: {todos.total}</p>
      <p>Completed todos: {todos.completed}</p>
      <p>Uncompleted todos: {todos.notCompleted}</p>
    </div>
  )
}

export default TodosHeader
