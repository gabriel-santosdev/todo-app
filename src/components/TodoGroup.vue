<template>
  <div class="group-wrapper">
    <h3>{{ groupLabel[props.status] }}</h3>

    <Draggable
      class="draggable"
      :list="todoList"
      group="todos"
      itemKey="id"
      @change="onDraggableChange"
    >
      <template #item="{ element: todo }">
        <li>
          {{ todo.title }}
          <span class="delete-icon" @click="deleteTodo(todo)">X</span>
          <div>
            <span class="todo-description">{{ todo.description }}</span>
          </div>
        </li>
      </template>
    </Draggable>

    <CreatedTodo :status="props.status" />
  </div>
</template>

<script setup lang="ts">
import { TodoStatus } from '@/types'
import Draggable from 'vuedraggable'
import useTodos from '@/store/useTodos'
import CreatedTodo from './CreatedTodo.vue'
interface Props {
  status: TodoStatus
}

const props = defineProps<Props>()

const { getTodosByStatus, deleteTodo, updateTodo } = useTodos()
const todoList = getTodosByStatus(props.status)

const groupLabel = {
  [TodoStatus.Pending]: 'Pending',
  [TodoStatus.InProgress]: 'In Progress',
  [TodoStatus.Completed]: 'Completed'
}

const onDraggableChange = (payload: any) => {
  console.log('payload', payload)
  if (payload?.added?.element) {
    //atualizar a props status (pending, progress, complete)
    updateTodo(payload?.added?.element, props.status)
  }
}
</script>

<style scoped>
.group-wrapper {
  flex: 1;
  padding: 20px;
  background-color: rgba(0, 162, 255, 0.603);
  width: 300px;
}

.group-wrapper li {
  list-style-type: none;
  background-color: rgba(2, 56, 128, 0.486);
  color: black;
  padding: 2px 5px;
  cursor: grab;
  margin-bottom: 10px;
}

.draggable {
  min-height: 200px;
}

.delete-icon {
  float: right;
  cursor: pointer;
  font-weight: bold;
}

.todo-description {
  font-size: 12px;
}
</style>
