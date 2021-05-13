<template>
  <div>
    <h1 class="page-title">
      {{ $t('pages.services.title') }}
    </h1>
    <div id="service-items">
      <ImageTextDisplay
        v-for="(item, index) in $t('pages.services.items')"
        :key="index"
        :title="item.title"
        :body-text="item.body"
        :icon="item.icon"
        class="service-item"
        :class="getGridColumnClass(index, 3)"
        title-size-px="30"
      />
    </div>
    <div id="pricing-items">
      <div
        v-for="(item, index) in $t('pages.services.pricings')"
        :key="index"
        class="pricing-item"
        :class="getGridColumnClass(index, 2)"
      >
        <div class="text-item-title underline">{{ item.title }}</div>
        <p class="text-item-body" v-html="item.body"/>
      </div>
    </div>
    <div class="cta-pre-text" v-html="cta_pre_text" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      /* @ts-ignore */
      cta_pre_text: this.$root.context.app.i18n.t('pages.services.cta-pre-text')
    }
  },
  methods: {
    getGridColumnClass (index: number, modulo: number) {
      return 'column-' + ((index + 1) % modulo || modulo)
    }
  }
})
</script>

<style scoped>

.cta-pre-text {
  font-family: MainFont;
  font-size: 24px;
  margin-bottom: 2rem;
}

#service-items {
  text-align: center;
  margin-bottom: 100px;
  display: grid;
  grid-gap: 45px;
}

.service-item, .pricing-item {
  text-align: center;
}

#pricing-items {
  text-align: center;
  margin-bottom: 75px;
  display: grid;
  grid-gap: 45px;
}

.underline {
  margin-bottom: 1.5rem;
}

.text-item-body {
  font-size: 18px;
  line-height: 15px;
}

@media screen and (max-width: 9000px) {
  #pricing-items {
    grid-template-columns: repeat(2, 1fr);
  }
  #service-items {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 900px) {
  #pricing-items {
    grid-template-columns: repeat(1, 1fr);
  }
  #service-items {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
