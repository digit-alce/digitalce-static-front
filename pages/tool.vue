<template>
  <div id="main-content">
    <h2 class="page-title title">
      {{ $t('pages.tool.title') }}
    </h2>
    <div class="tool-items">
      <ImageTextDisplay
        v-for="(item, index) in $t('pages.tool.items')"
        :key="index"
        :title="item.title"
        :body-text="item.body"
        :image="pictures[index]"
        :image-clickable="true"
        :title-size-px="24"
        :subtitle-size-px="16"
        class="tool-item"
      />
    </div>
    <NuxtLink
      class="button button--blue"
      :to="localePath('/use-case')"
    >
      {{ $t('cta.use-case') }}
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
        require('@/assets/img/tools/1.jpg'),
        require('@/assets/img/tools/2.jpg'),
        require('@/assets/img/tools/3.jpg'),
        require('@/assets/img/tools/4.jpg')
      ]
    }
  }
})
</script>

<style scoped>

.tool-item {
  margin-bottom: 40px;
}

</style>
