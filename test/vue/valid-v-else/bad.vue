<!-- bad -->
<template>
  <div v-if="foo"/>
  <div v-else="foo"/>
  <!-- bad
    <div v-else:aaa/>
    <div v-else.bbb/>
  -->
</template>
