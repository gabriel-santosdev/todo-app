<template>
  <div class="groups-wrapper">
    <TodoGroup :status="TodoStatus.Pending" />
    <TodoGroup :status="TodoStatus.InProgress" />
    <TodoGroup :status="TodoStatus.Completed" />
  </div>
</template>

<script setup lang="ts">
import TodoGroup from './TodoGroup.vue'
import { TodoStatus } from '@/types'
</script>

<style scoped>
.groups-wrapper {
  display: flex;
  justify-content: space-around;
  gap: 20px;
}
</style>
