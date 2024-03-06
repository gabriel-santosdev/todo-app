<template>
  <div>
    <h3 v-if="!shouldDisplayForm" @click="shouldDisplayForm = !shouldDisplayForm" class="buttonNew">
      Add New
    </h3>
    <template v-else>
      <form class="container-form" @submit.prevent="handleOnSubmit">
        <div>
          <input class="input-title" type="text" placeholder="Title" v-model="newTodo.title" />
        </div>
        <div class="todo-description">
          <textarea class="textarea" type="text" placeholder="Description" v-model="newTodo.description" />
        </div>

        <div class="buttons-form">
          <button type="submit" class="submit">Submit</button>
          <button type="button" class="cancel" @click="resetForm">Cancel</button>
        </div>
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

const newTodo = reactive<Omit<Todo, 'id' | 'createdAt'>>({ title: '', description: '', status: props.status, hours: 0 })

const resetForm = () => {
  shouldDisplayForm.value = false
  newTodo.title = ''
  newTodo.description = ''
  newTodo.hours = 0
}

const handleOnSubmit = () => {

  const createdAt = new Date().toISOString()

  addNewTodo({
    id: Math.random() * 10000000000000000,
    ...newTodo,
    createdAt

  })

  resetForm()
}
</script>

<style scoped>
.buttonNew {
  cursor: pointer;
}

.container-form {
  justify-content: center;
  align-items: center;
}

.todo-description {
  margin-top: 7px;
}

.submit {
  font-weight: bold;
  color: black;
  background-color: rgba(0, 128, 0, 0.582);
  border-radius: 15px 15px;
  border-color: gray;
}

.cancel {
  font-weight: bold;
  color: black;
  background-color: rgba(255, 0, 0, 0.651);
  border-radius: 15px 15px;
  border-color: gray;
}

.buttons-form {
  flex-wrap: wrap;
  display: flex;
  gap: 1em;
}

.textarea {
  border-radius: 8px 8px;
}

.input-title {
  border-radius: 8px 8px;
}
</style>
