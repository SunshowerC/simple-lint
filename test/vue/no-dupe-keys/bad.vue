<!-- bad -->
<script>
export default {
  props: {
    foo: String
  },
  data: {
    foo: null
  },
  computed: {
    foo() {
      return ''
    }
  },
  methods: {
    foo() {}
  }
}
</script>
