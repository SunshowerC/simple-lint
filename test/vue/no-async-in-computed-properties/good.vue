<!-- good -->
<script>
export default {
  computed: {
    foo() {
      let bar = 0
      try {
        bar /= this.a
      } catch (e) {
        return 0
      }
      return 1
    }
  }
}
</script>
