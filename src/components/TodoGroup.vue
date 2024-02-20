<template>
  <div>
    <h3>{{ groupLabel }}</h3>
    <ul>
      <li v-for="todo in pendingTodos" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { TodoStatus, type Todo } from '@/types'
import { computed } from 'vue';

interface Props {
    status: TodoStatus
}

const props = defineProps<Props>()

const pendingTodos: Todo[] = [
  {
    id: 1,
    title: 'Learn Vuejs',
    description: 'Watch videos',
    status: TodoStatus.Pending
  }
]

const groupLabel = computed(() => {
    switch(props.status) {
        case TodoStatus.Pending:
            return "Pending";
        case TodoStatus.InProgress:
            return "In Progress";
        case TodoStatus.Completed:
            return "Completed";
        default:
            return "Todo Group"
    }
})
</script>
