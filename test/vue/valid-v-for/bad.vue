<!-- bad require-v-for-key 也属于一部分 -->

<template>
  <div>
    <div v-for/>
    <div v-for:aaa="todo in todos"/>
    <div v-for.bbb="todo in todos"/>
    <div
      v-for="todo in todos"
      is="MyComponent"
    />
    <MyComponent v-for="todo in todos"/>
    <MyComponent
      v-for="todo in todos"
      :key="foo"
    />
  </div>
  
</template>