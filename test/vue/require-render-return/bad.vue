<!-- bad  -->
<script>
export default {
  render(h) {
    if (foo) {
      return h('div', 'hello')
    }
  }
}
</script>
