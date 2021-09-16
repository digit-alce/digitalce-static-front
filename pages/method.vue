<template>
  <div class="page-content">
    <h2 class="page-title title">
      {{ $t('pages.method.title') }}
    </h2>
    <p class="body-text" v-html="body_text" />
    <div id="method-items">
      <ImageTextDisplay
        v-for="(item, index) in $t('pages.method.items')"
        :key="index"
        :title="item.title"
        :subtitle="item.subtitle"
        :body-text="item.body"
        :image="pictures[index]"
        :icon="item.icon"
        body-text-below
        title-size-px="26"
        subtitle-size-px="20"
      />
    </div>
    <NuxtLink
      class="button button--blue"
      :to="localePath('/tool')"
    >
      {{ $t('cta.innov-scale') }}
    </NuxtLink>
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

.body-text {
  margin-bottom: 3rem;
}

#method-items  {
  margin-top: 5rem;
  text-align: center;
  margin-bottom: 75px;
}

</style>
