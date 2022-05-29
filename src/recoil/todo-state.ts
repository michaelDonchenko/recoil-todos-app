import { atom, selector } from 'recoil'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export const todosState = atom<Todo[]>({
  key: 'todosState',
  default: [],
})

export const todosSelector = selector({
  key: 'todosSelector',
  get: ({ get }) => ({
    total: get(todosState).length,
    completed: get(todosState).filter((todo) => todo.completed).length,
    notCompleted: get(todosState).filter((todo) => !todo.completed).length,
  }),
})

export const todosFilterState = atom({
  key: 'TodosFilterState',
  default: 'Show All',
})

export const filteredTodosState = selector({
  key: 'FilteredTodosState',
  get: ({ get }) => {
    const filter = get(todosFilterState)
    const todos = get(todosState)

    switch (filter) {
      case 'Show Completed':
        return todos.filter((todo) => todo.completed)
      case 'Show Uncompleted':
        return todos.filter((todo) => !todo.completed)
      default:
        return todos
    }
  },
})
