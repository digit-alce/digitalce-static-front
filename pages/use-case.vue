<template>
  <div id="main-content">
    <h2 class="page-title title">
      {{ $t('pages.use-case.title') }}
    </h2>
    <h4 class="page-subtitle" v-html="body_text" />

    <div class="use-case-group">
      <div
        v-for="(item, index) in cases"
        :key="index"
        class="use-case-item"
        :class="getGridColumnClass(index, 3)"
      >
        <img class="use-case-img" :src="pictures[index]">
        <h4 class="use-case-title title">
          {{ item.title }}
        </h4>
        <p class="use-case-body" v-html="item.body" />
      </div>
    </div>

    <h4 class="cta-pre-text" v-html="cta_pre_text" />

    <NuxtLink
      class="button button--blue"
      :to="localePath('/use-case-facom')"
    >
      {{ $t('cta.click-here') }}
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      /* @ts-ignore */
      body_text: this.$root.context.app.i18n.t('pages.use-case.body'),
      /* @ts-ignore */
      cta_pre_text: this.$root.context.app.i18n.t('pages.use-case.facom-pre-cta'),
      /* @ts-ignore */
      items: this.$root.context.app.i18n.t('pages.use-case.items'),
      pictures: [
        require('@/assets/img/use-case/cropped/sales.jpg'),
        require('@/assets/img/use-case/cropped/aft_sales.jpg'),
        require('@/assets/img/use-case/cropped/qa.jpg'),
        require('@/assets/img/use-case/cropped/prod.jpg'),
        require('@/assets/img/use-case/cropped/fin.jpg'),
        require('@/assets/img/use-case/cropped/hr.jpg')
      ]
    }
  },
  computed: {
    /* @ts-ignore */
    cases () { return this.items },
  },
  methods: {
    getGridColumnClass (index: number, modulo: number) {
      return 'column-' + ((index + 1) % modulo || modulo)
    }
  }
})
</script>

<style scoped>

.body-text {
  font-size: 24px;
}

.use-case-group {
  display: grid;
  margin-top: 75px;;
  grid-gap: 45px;
  margin-bottom: 75px;;
}

.use-case-img {
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.use-case-title {
  height: 60px;
}

.cta-pre-text {
  text-align: center;
  margin-bottom: 3rem;
}

@media screen and (max-width: 9000px) {
  .use-case-group {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 900px) {
  .use-case-group {
    grid-template-columns: repeat(1, 1fr);
  }
}

</style>
