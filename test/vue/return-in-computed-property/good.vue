<!-- good -->
<script>
export default {
  computed: {
    foo() {
      if (this.bar) {
        return this.baz
      }
      return this.baf
    },
    bar() {
      return false
    }
  }
}
</script>
