<template>
  <div class="page-content">
    <h1 class="page-title">
      {{ $t('pages.contact.title') }}
    </h1>
    <div class="contact-body-container">
      <p class="contact-body" v-html="body_text" />
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      /* @ts-ignore */
      body_text: this.$root.context.app.i18n.t('pages.contact.body')
    }
  }
})
</script>

<style scoped>

.contact-body {
  font-family: MainFont;
  font-size: 22px !important;
  margin-top: auto;
  margin-bottom: auto;
}

</style>
