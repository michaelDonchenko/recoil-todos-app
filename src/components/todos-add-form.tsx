import React from 'react'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todosState } from '../recoil/todo-state'

const TodosAddForm = () => {
  const [title, setTitle] = useState('')
  const setTodos = useSetRecoilState(todosState)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!title) return

    setTodos((todos) => [
      ...todos,
      { id: Math.random(), title, completed: false },
    ])
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <h4>Add new todo:</h4>
      <input
        onChange={(event) => setTitle(event.target.value)}
        type='text'
        placeholder='New todo'
      />

      <button>Add</button>
    </form>
  )
}

export default TodosAddForm
