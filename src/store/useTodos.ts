import { TodoStatus, type Todo } from '@/types'
import { computed, reactive } from 'vue'

interface TodoStore {
  [TodoStatus.Pending]: Todo[]
  [TodoStatus.InProgress]: Todo[]
  [TodoStatus.Completed]: Todo[]
}

const defaultVal = {
  [TodoStatus.Pending]: [
    {
      id: 1,
      title: 'Learn Vuejs',
      description: 'Watch videos',
      status: TodoStatus.Pending
    },
    {
      id: 2,
      title: 'Teste',
      description: 'Testando',
      status: TodoStatus.Pending
    }
  ],
  [TodoStatus.InProgress]: [],
  [TodoStatus.Completed]: []
}

const todoStore = reactive<TodoStore>(defaultVal)

export default () => {
  const getTodoByStatus = (TodoStatus: TodoStatus) => {
    return computed(() => todoStore[TodoStatus])
  }

  return { getTodoByStatus }
}
