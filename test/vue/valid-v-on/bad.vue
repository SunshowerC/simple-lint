<!-- bad -->
<template>
  <div>
    <div v-on/>
    <div v-on:click/>
    <div v-on:click.aaa="foo"/>
    <div @click/>
  </div>
</template>
