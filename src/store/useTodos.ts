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
      title: 'Teste Card',
      description: 'Descrição teste card',
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
  const getTodosByStatus = (TodoStatus: TodoStatus) => {
    return computed(() => todoStore[TodoStatus])
  }

  const updateTodo = (todo: Todo, newStatus: TodoStatus) => {
    todo.status = newStatus
  }

  const addNewTodo = (todo: Todo) => {
    todoStore[todo.status].push(todo)
  }

  const deleteTodo = (todoToDelete: Todo) => {
    todoStore[todoToDelete.status] =
      todoStore[todoToDelete.status].filter[(todo) => todo.id !== todoToDelete.id]
  }

  return { getTodosByStatus, addNewTodo, deleteTodo, updateTodo }
}
