import React from 'react'
import './App.css'
import TodosHeader from './components/todos-header'
import { RecoilRoot } from 'recoil'
import TodosAddForm from './components/todos-add-form'
import TodosList from './components/todos-list'
import TodosFilters from './components/todos-filters'

function App() {
  return (
    <RecoilRoot>
      <div className='App'>
        <h1>Todo App</h1>

        <TodosHeader />
        <TodosAddForm />
        <TodosFilters />
        <TodosList />
      </div>
    </RecoilRoot>
  )
}

export default App
