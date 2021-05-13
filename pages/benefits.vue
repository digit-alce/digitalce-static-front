<template>
  <div>
    <h1 class="page-title">
      {{ $t('pages.benefits.title') }}
    </h1>
    <div id="benefits">
      <div
        v-for="(item, index) in $t('pages.benefits.items')"
        :key="index"
        class="item benefit"
        :class="getGridColumnClass(index, 3)"
      >
        <div class="text-item-title underline">
          {{ item.title }}
        </div>
        <p class="text-item-body" v-html="item.body"/>
      </div>
    </div>
    <NuxtLink
      class="button button--blue"
      :to="localePath('/method')"
    >
      {{ $t('cta.method') }}
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    getGridColumnClass (index: number, modulo: number) {
      return 'column-' + ((index + 1) % modulo || modulo)
    }
  }
})
</script>

<style scoped>

.benefit {
  text-align: center;
}

#benefits  {
  text-align: justify;
  margin-bottom: 75px;
  display: grid;
  grid-gap: 45px;
}

@media screen and (max-width: 9000px) {
  #benefits  {
    grid-template-columns: repeat(3, 1fr);
  }

  .text-item-body {
    text-align: center;
  }
}

@media screen and (max-width: 900px) {
  #benefits  {
    grid-template-columns: repeat(1, 1fr);
  }

  .text-item-body {
    text-align: justify;
  }
}

</style>
