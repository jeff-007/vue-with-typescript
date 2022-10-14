<!-- <template>
  <transition :name="transitionName" mode="out-in">
    <router-view :key="key" />
  </transition>
</template>

<script>
import Vue from 'vue';
export default class Layout extends Vue {
  transitionName: string = 'fade-transform'
  message: string = 'hello world'
  onClick (): void {
    window.alert(this.message);
  }
  computed: {
    key() {
      return this.$route.path
    },
    name() {
      return this.$route.name
    }
  },
  watch: {
    $route: {
      handler: function (to, from) {
        console.log(to)
        console.log(from)
        const toDepth = to && to.path.split('/').length
        const fromDepth = from && from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'fade-transform' : 'pop-transform'
      },
      immediate: true
    }
  }
}
</script>

<style scoped lang="scss">

</style> -->
