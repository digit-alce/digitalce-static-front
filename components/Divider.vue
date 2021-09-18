<template>
  <div :class="getClasses" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    transparent: {
      type: Boolean,
      default: false
    },
    big: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getClasses () {
      let classes = this.transparent ? 'transparent ' : '';
      if (this.big) { classes += 'big '; }
      else if (this.small) { classes += 'small '; }
      else { classes += 'medium '; }
      classes += 'divider';
      return classes;
    }
  }
})
</script>

<style scoped>
.divider {
  border-top: 2px solid var(--color-black);
  width: 100%;
}

.big {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.medium {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}

.small {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.transparent{
  opacity: 0;
}

</style>
