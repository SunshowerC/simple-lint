<!-- bad -->
<template>
  <div v-if="foo"/>
  <div v-else-if/>
  <!-- bad
    <div v-else-if:aaa="foo"/>
    <div v-else-if.bbb="foo"/> 
  -->
</template>
