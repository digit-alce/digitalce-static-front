<template>
  <div id="main-content">
    <h2 class="page-title title">
      {{ $t('pages.services.title') }}
    </h2>
    <div id="service-items">
      <ImageTextDisplay
        v-for="(item, index) in $t('pages.services.items')"
        :key="index"
        :title="item.title"
        :body-text="item.body"
        class="service-item"
        :class="getGridColumnClass(index, 3)"
      />
    </div>
    <div id="pricing-items">
      <div
        v-for="(item, index) in $t('pages.services.pricings')"
        :key="index"
        class="pricing-item"
        :class="getGridColumnClass(index, 2)"
      >
        <h4 class="text-item-title title">{{ item.title }}</h4>
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
  font-size: 17px;
  margin-bottom: 2rem;
  text-align: center;
}

#service-items {
  margin-bottom: 100px;
  display: grid;
  grid-gap: 45px;
  line-height: 1.8;
}

#pricing-items {
  text-align: center;
  margin-bottom: 75px;
  display: grid;
  grid-gap: 45px;
}

.text-item-title {
  font-style: italic;
  font-weight: 600;
}

.text-item-body {
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
