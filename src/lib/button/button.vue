<template>
<button class="mint-button">
  <slot></slot>
</button>
</template>

<script>
export default {
  name: 'zxy-button',
  props : {

  },
  data () {
    return {
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  },
}
</script>

<style lang="scss">

</style>
