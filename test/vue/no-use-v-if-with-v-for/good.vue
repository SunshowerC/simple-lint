<!-- good -->
<template>
  <div>
    <ul v-if="shown">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        :yemb="yemb"
        :cws="cws"
        :sdafd="asdf"
      />
    </ul>
  </div>
</template>
