<!-- bad -->
<template>
  <div>
    <TodoItem
      v-if="complete"
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    />
    <TodoItem
      v-for="todo in todos"
      v-if="todo.shown"
      :key="todo.id"
      :todo="todo"
    />
  </div>
</template>
