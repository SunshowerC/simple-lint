<!-- good -->

<template>
  <div>
    <div v-for="todo in todos" :key="todo.id" />
    <MyComponent v-for="todo in todos" :key="todo.id" />
    <div v-for="todo in todos" :is="MyComponent" :key="todo.id" />
  </div>
</template>
