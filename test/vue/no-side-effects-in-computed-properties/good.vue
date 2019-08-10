<!-- good -->
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
      return `${this.firstName} ${this.lastName}`
    }
  }
}
</script>
