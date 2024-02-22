<template>
  <div class="group-wrapper">
    <h3>{{ groupLabel[props.status] }}</h3>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">
        {{ todo.title }} <br />
        <span class="todo-description">{{ todo.description }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { TodoStatus, type Todo } from '@/types'
import { computed } from 'vue'
import useTodos from '@/store/useTodos'

interface Props {
  status: TodoStatus
}

const props = defineProps<Props>()

const { getTodoByStatus } = useTodos()
const todoList = getTodoByStatus(props.status)

const groupLabel = {
  [TodoStatus.Pending]: 'Pending',
  [TodoStatus.InProgress]: 'In progress',
  [TodoStatus.Completed]: 'Completed'
}
</script>

<style scoped>
.group-wrapper {
  flex: 1;
  padding: 20px;
  background-color: rgba(0, 162, 255, 0.603);
  width: 300px;
}

.group-wrapper ul {
  padding: 0;
}

.group-wrapper li {
  list-style-type: none;
  background-color: rgba(2, 56, 128, 0.486);
  color: black;
  padding: 2px 5px;
  cursor: grab;
  border-radius: 10px;
  margin-bottom: 10px;
}

.todo-description {
  font-size: 12px;
}
</style>
