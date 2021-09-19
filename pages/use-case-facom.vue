<template>
  <div>
    <BlueBox
      :title="$t('pages.use-case-facom.title')"
      :subtitle="$t('pages.use-case-facom.subtitle')"
      :body="$t('pages.use-case-facom.body')"
    />

    <div id="main-content">
      <div id="use-cases">
        <div
          v-for="(item, index) in $t('pages.use-case-facom.items')"
          :key="index"
          class="item use-case"
        >
          <h4 class="text-item-title title">
            {{ item.title }}
          </h4>
          <p class="text-item-body" v-html="item.body"/>
        </div>
      </div>
      <div class="testimony">
        <h1 class="testimony-title title">
          {{ $t('pages.use-case-facom.testimony.title') }}
        </h1>
        <div class="testimony-body" v-html="testimony_body">
          {{ $t('pages.use-case-facom.testimony.body') }}
        </div>
      </div>
      <NuxtLink
        class="button button--blue"
        :to="localePath('/services')"
      >
        {{ $t('cta.services') }}
      </NuxtLink>
      <div class="img-container facom-logo">
        <img src="@/assets/img/facom-logo.png">
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
      testimony_body: this.$root.context.app.i18n.t('pages.use-case-facom.testimony.body')
    }
  }
})
</script>

<style scoped>

#use-cases  {
  margin-bottom: 55px;
}

.use-case {
  display: inline-grid;
}

.page-subtitle {
  margin-top: 60px;
  margin-bottom: 60px;
}

.page-subtitle-small {
  margin-top: 30px;
}

.img-container {
  width: 100%;
  text-align: center
}

.testimony-title {
  margin-bottom: 2rem;
}

.testimony-body {
  text-align: justify;
  padding: 25px;
}

.button {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.facom-logo img {
  width: inherit;
}

@media screen and (max-width: 9000px) {
  .use-case {
    width: 450px;
    padding: 30px 15px;
  }
}

@media screen and (max-width: 900px) {
  .use-case {
    width: auto;
    padding: 30px 0;
  }

  .text-item-body {
    text-align: justify;
  }

}
</style>
