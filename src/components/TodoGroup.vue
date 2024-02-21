<template>
  <div>
    <h3>{{ groupLabel[props.status] }}</h3>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { TodoStatus, type Todo } from '@/types'
import { computed } from 'vue';
import useTodos from '@/store/useTodos';

interface Props {
    status: TodoStatus
}

const props = defineProps<Props>()

const { getTodoByStatus } = useTodos()
const todoList = getTodoByStatus(props.status)

const groupLabel = {
  [TodoStatus.Pending]: "Pending",
  [TodoStatus.InProgress]: "In progress",
  [TodoStatus.Completed]: "Completed"
}
</script>
