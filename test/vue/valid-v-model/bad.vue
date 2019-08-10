<!-- bad -->
<template>
  <div>
    <input v-model>
    <input v-model:aaa="foo">
    <input v-model.bbb="foo">
    <input v-model="foo + bar">
    <div v-model="foo"/>
    <div v-for="todo in todos">
      <input v-model="todo">
    </div>
  </div>
</template>

