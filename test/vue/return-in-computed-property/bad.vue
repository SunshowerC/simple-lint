<!-- bad -->
<script>
export default {
  computed: {
    baz() {
      if (this.baf) {
        return this.baf
      }
    },
    baf() {}
  }
}
</script>
