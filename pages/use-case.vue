<template>
  <div>
    <div class="page-title">
      {{ $t('pages.use-case.title') }}
    </div>
    <p class="body-text" v-html="body_text" />

    <div class="use-case-group">
      <div
        v-for="(item, index) in firstGroup"
        :key="index"
        class="use-case-item"
        :class="getGridColumnClass(index, 3)"
      >
        <div class="use-case-title">
          {{ item.title }}
        </div>
        <img class="use-case-img" :src="pictures[index]">
        <p class="use-case-body" v-html="item.body" />
      </div>
    </div>

    <div class="cta-pre-text" v-html="cta_pre_text" />

    <NuxtLink
      class="button button--blue"
      :to="localePath('/use-case-facom')"
    >
      {{ $t('cta.click-here') }}
    </NuxtLink>

    <div class="use-case-group">
      <div
        v-for="(item, index) in secondGroup"
        :key="index"
        class="use-case-item"
        :class="getGridColumnClass(index, 3)"
      >
        <div class="use-case-title">
          {{ item.title }}
        </div>
        <img class="use-case-img" :src="pictures[index+3]">
        <p class="use-case-body" v-html="item.body" />
      </div>
    </div>

    <NuxtLink
      class="button button--blue"
      :to="localePath('/services')"
    >
      {{ $t('cta.services') }}
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
        require('@/assets/img/use-case/sales.jpg'),
        require('@/assets/img/use-case/aft_sales.jpg'),
        require('@/assets/img/use-case/qa.jpg'),
        require('@/assets/img/use-case/prod.jpg'),
        require('@/assets/img/use-case/fin.jpg'),
        require('@/assets/img/use-case/hr.jpg')
      ]
    }
  },
  computed: {
    /* @ts-ignore */
    firstGroup () { return this.items.slice(0, 3) },
    /* @ts-ignore */
    secondGroup () { return this.items.slice(3, 6) }
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
  max-width: 200px;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.use-case-title {
  font-size: 30px;
  height: 60px;
  text-transform: uppercase;
  font-family: MainFont;
}

.cta-pre-text {
  font-family: MainFont;
  font-size: 24px;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.use-case-item {
  /* display: flex;         */
  /* flex-direction: column;*/
  text-align: center;
}

/*
.use-case-title, .use-case-img, .use-case-body {
  flex: 1 1 0px;
  text-align: center;
}
*/

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
