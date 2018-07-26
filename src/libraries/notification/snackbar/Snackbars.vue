<template>
  <div class="snackbars">
    <transition-group name="snackbar">
      <div class="snackbar" v-for="(snackbar, index) in snackbars" :key="index">
        <div class="text">
          {{ snackbar.text }}
        </div>
        <div class="actions">
          <div v-if="snackbar.action" class="action" @click="handleClickAction(snackbar, index)">{{ snackbar.action.text }}</div>
        </div>
        <Clearfix />
      </div>
    </transition-group>
  </div>
</template>

<script>
import Clearfix from '../../../components/Clearfix.vue'

export default {
  name: 'Snackbars',
  data () {
    return {
      snackbars: [],
    }
  },
  components: {
    Clearfix,
  },
  methods: {
    handleClickAction (snackbar, snackbarIndex) {
      let remove = snackbar.action.handler(snackbarIndex)
      if (remove !== false) {
        this.remove(snackbarIndex)
      }
    },
    remove (index) {
      this.snackbars = [...this.snackbars.slice(0, index), ...this.snackbars.slice(index + 1)]
    },
  },
}
</script>

<style lang="postcss" scoped>
.snackbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 344px;
  min-height: 54px;
  margin: 24px auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: hsl(0,0%,20%);
  border-bottom: 1px solid #000;
  border-radius: 4px;
  box-shadow: 0 2px 4px 2px rgba(0,0,0,0.1);
  font-size: 14px;

  .text {
    color: hsl(0,0%,87%);
    margin: 16px;
    line-height: 20px;
  }

  .actions {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    color: hsl(0,0%,87%);
    font-weight: bold;
    margin-left: 36px;
    cursor: pointer;
    .action {
      margin: 8px 8px 8px 0;
      padding: 8px;
      line-height: 1em;
      text-transform: uppercase;
      &:hover, &:active {
        background-color: rgba(255,255,255,0.1);
      }
    }
  }
}

.snackbar-enter-active, .snackbar-leave-active {
  transition: all .2s ease;
}
.snackbar-enter, .snackbar-leave-to {
  opacity: 0;
  transform: translate3d(0,10px,0) scale(0.5);
}
</style>
