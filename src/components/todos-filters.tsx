import React from 'react'
import { useRecoilState } from 'recoil'
import { todosFilterState } from '../recoil/todo-state'

const TodosFilters = () => {
  const [filter, setFilter] = useRecoilState(todosFilterState)

  const updateFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value)
  }

  return (
    <div className='filters'>
      <span>Filter: </span>
      <select value={filter} onChange={(event) => updateFilter(event)}>
        <option value='Show All'>All</option>
        <option value='Show Completed'>Completed</option>
        <option value='Show Uncompleted'>Uncompleted</option>
      </select>
    </div>
  )
}

export default TodosFilters
