<template>
  <div :class="(transparent?'transparent ':'') + 'divider'" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    transparent: {
      type: Boolean,
      default: false
    },
  }
})
</script>

<style scoped>
.divider {
  border-top: 2px solid var(--color-black);
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.transparent{
  opacity: 0;
}

</style>
