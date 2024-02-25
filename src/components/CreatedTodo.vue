<template>
  <div>
    <h3 v-if="!shouldDisplayForm" @click="shouldDisplayForm = !shouldDisplayForm" class="buttonNew">
      Add New
    </h3>
    <template v-else>
      <form @submit.prevent="handleOnSubmit">
        <div>
          <input type="text" placeholder="Title" v-model="newTodo.title" />
        </div>
        <div>
          <textarea type="text" placeholder="Description" v-model="newTodo.description" />
        </div>

        <button type="submit">Submit</button>
        <button type="button" @click="resetForm">Cancel</button>
      </form>
    </template>
  </div>
</template>

<script setup lang="ts">
import useTodos from '@/store/useTodos'
import type { TodoStatus, Todo } from '@/types'
import { reactive, ref } from 'vue'

interface Props {
  status: TodoStatus
}

const props = defineProps<Props>()

const { addNewTodo } = useTodos()

const shouldDisplayForm = ref(false)

const newTodo = reactive<Omit<Todo, 'id'>>({ title: '', description: '', status: props.status })

const resetForm = () => {
  shouldDisplayForm.value = false
  newTodo.title = ''
  newTodo.description = ''
}

const handleOnSubmit = () => {
  addNewTodo({
    id: Math.random() * 10000000000000000,
    ...newTodo
  })

  resetForm()
}
</script>

<style scoped>
.buttonNew {
  cursor: pointer;
}
</style>
