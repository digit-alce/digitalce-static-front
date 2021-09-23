<template>
  <div id="main-content">
    <h2 class="page-title title">
      {{ $t('pages.method.title') }}
    </h2>
    <h4 class="page-subtitle subtitle">
      {{ $t('pages.method.subtitle') }}
    </h4>
    <p class="body-text" v-html="body_text" />
    <div id="method-items">
      <ImageTextDisplay
        v-for="(item, index) in $t('pages.method.items')"
        :key="index"
        :title="item.title"
        :subtitle="item.subtitle"
        :body-text="item.body"
        :image="pictures[index]"
        class="method-item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      /* @ts-ignore */
      body_text: this.$root.context.app.i18n.t('pages.method.body'),
      pictures: [
        require('@/assets/img/method_1.jpg'),
        require('@/assets/img/method_2.jpg'),
        require('@/assets/img/method_3.jpg'),
        require('@/assets/img/method_4.jpg'),
        require('@/assets/img/method_5.jpg')
      ]
    }
  }
})
</script>

<style scoped>

.method-item {
  margin-bottom: 40px;
}

.body-text {
  margin-bottom: 3rem;
  line-height: 1.8;
}

#method-items  {
  margin-top: 5rem;
  margin-bottom: 75px;
}

</style>
