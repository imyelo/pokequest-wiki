import scrollIntoView from 'scroll-into-view'

const mixin = {
  mounted () {
    this.scrollToAnchor()
  },
  methods: {
    scrollToAnchor (anchor) {
      if (!this.$route) {
        return
      }
      anchor = anchor || this.$route.query.anchor
      if (!anchor) {
        return
      }
      let node = document.querySelector(`[data-anchor=${anchor}]`)
      if (!node) {
        return
      }
      scrollIntoView(node, {
        time: 400,
        align: {
          top: 0,
        },
      })
    },
  },
}

export default mixin
