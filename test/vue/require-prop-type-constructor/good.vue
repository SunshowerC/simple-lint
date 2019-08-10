<!-- good -->
<script>
export default {
  props: {
    myProp: Number,
    anotherProp: [Number, String],
    myFieldWithBadType: {
      type: Object,
      default: () => ({})
    },
    myOtherFieldWithBadType: {
      type: Number,
      default: 1
    }
  }
}
</script>
