<!-- good -->
<template>
  <div>
    <input v-model="foo" />
    <input v-model.lazy="foo" />
    <textarea v-model="foo" />
    <MyComponent v-model="foo" />
    <div v-for="todo in todos" :key="todo.key">
      <input v-model="todo.name" />
    </div>
  </div>
</template>
