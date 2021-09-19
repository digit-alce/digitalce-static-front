<template>
  <div>
    <BlueBox
      :title="$t('pages.tool.title')"
      :subtitle="$t('pages.tool.subtitle')"
      :body="$t('pages.tool.body')"
    />

    <div id="main-content">
      <div class="tool-items">
        <ImageTextDisplay
          v-for="(item, index) in $t('pages.tool.items')"
          :key="index"
          :title="item.title"
          :body-text="item.body"
          :image="pictures[index]"
          :image-clickable="true"
          class="tool-item"
          imageGreyed
        />
      </div>
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
