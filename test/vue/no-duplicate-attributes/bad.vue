<!-- bad -->

<template>
  <div>
    <MyComponent :foo="abc" foo="def" />
    <MyComponent foo="abc" :foo="def" />
    <MyComponent foo="abc" foo="def" />
    <MyComponent :foo="abc" :foo="def" />
    <MyComponent class="abc" class="def" />
  </div>
</template>
