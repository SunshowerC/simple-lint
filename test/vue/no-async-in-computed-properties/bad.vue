<!-- bad computed 内禁止包含异步方法 -->
<script>
export default {
  computed: {
    pro () {
      return Promise.all([new Promise((resolve, reject) => {})])
    },
    foo1: async function () {
      return await someFunc()
    },
    bar () {
      return fetch(url).then(response => {})
    },
    tim () {
      setTimeout(() => { }, 0)
    },
    inter () {
      setInterval(() => { }, 0)
    },
    anim () {
      requestAnimationFrame(() => {})
    }
  }
}
</script>
