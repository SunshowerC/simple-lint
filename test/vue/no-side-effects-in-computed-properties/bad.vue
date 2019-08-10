<!-- bad -->
<script>
export default {
  data() {
    return {
      firstName: 'a',
      lastName: 'b'
    }
  },
  computed: {
    fullName() {
      this.firstName = 'lorem' // <- side effect
      return `${this.firstName} ${this.lastName}`
    }
  }
}
</script>
