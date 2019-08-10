<!-- bad -->
<template>
  <div>
    <div     class="foo"
      :style =  "bar"         />
    <i
      :class="{
        'fa-angle-up'   : isExpanded,
        'fa-angle-down' : !isExpanded,
      }"
    />
  </div>
</template>
