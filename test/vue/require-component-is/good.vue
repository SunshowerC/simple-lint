<!-- good -->
<template>
  <div>
    <div :is="type" />
    <div v-bind:is="type" />
  </div>
</template>
