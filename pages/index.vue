<template>
  <div>
    <h1 class="page-title">
      {{ $t('pages.landing.title') }}
    </h1>
    <div class="category category-intro">
      <img
        class="main-img"
        :src="main_picture"
      >
      <div id="facom-feedback" class="feedback">
        <div class="feedback-quote">
          {{ $t('pages.landing.feedbacks.facom.quote') }}
        </div>
        <div class="feedback-signature">
          {{ $t('pages.landing.feedbacks.facom.signature') }}
        </div>
      </div>
      <NuxtLink
        class="button button--blue"
        :to="localePath('/benefits')"
      >
        {{ $t('cta.benefits') }}
      </NuxtLink>
      <Divider />
      <div class="category-title">
        {{ $t('pages.landing.categories.method.title') }}
      </div>
      <div id="method-steps">
        <div
          v-for="(item, index) in $t('pages.method.items')"
          :key="index"
          class="step"
        >
          <div class="item-title">
            {{ item.title }}
          </div>
          <i :class="item.icon" />
        </div>
      </div>
      <NuxtLink
        class="button button--blue"
        :to="localePath('/method')"
      >
        {{ $t('cta.method') }}
      </NuxtLink>
    </div>
    <Divider />
    <div class="category category-tool">
      <div class="category-title">
        {{ $t('pages.landing.categories.tool.title') }}
      </div>
      <ImageTextDisplay
        :title="$t('pages.landing.categories.tool.subtitle')"
        :subtitle="$t('pages.landing.categories.tool.body')"
        :image="tool_picture"
        class="index-imagetext"
        title-size-px="26"
        subtitle-size-px="20"
      />
      <NuxtLink
        class="button button--blue"
        :to="localePath('/tool')"
      >
        {{ $t('cta.tool') }}
      </NuxtLink>
    </div>
    <Divider />
    <div class="category category-use-case">
      <div class="category-title">
        {{ $t('pages.landing.categories.use-case.title') }}
      </div>
      <ImageTextDisplay
        :title="$t('pages.landing.categories.use-case.subtitle')"
        :subtitle="$t('pages.landing.categories.use-case.body')"
        :image="use_case_picture"
        class="index-imagetext"
        title-size-px="26"
        subtitle-size-px="20"
      />
      <NuxtLink
        class="button button--blue"
        :to="localePath('/use-case-facom')"
      >
        {{ $t('cta.discover') }}
      </NuxtLink>
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
      main_picture: require('@/assets/img/landing.jpg'),
      tool_picture: require('@/assets/img/tools/1.jpg'),
      use_case_picture: require('@/assets/img/facom.png')
    }
  }
})
</script>

<style scoped>

.main-img {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.category-title {
  font-family: MainFont;
  text-transform: uppercase;
  margin-bottom: 3rem;
}

.feedback {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.feedback-quote {
  text-align: left;
}

.feedback-signature {
  margin-top: 1rem;
  text-align: right;
  font-style: italic;
}

#method-steps {
  width: 100%;
  text-align: center;
  background-color: #e3ebf8;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-bottom: 40px;
}

.step .item-title {
  font-family: MainFont;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.index-imagetext {
  margin-bottom: 40px;
}

button {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

@media screen and (max-width: 9000px) {
  .category-title {
    font-size: 30px;
  }

  .feedback {
    font-size: 22px;
  }

  #method-steps {
    width: 100%;
  }

  .step {
    display: inline-block;
    font-size: 22px;
    margin: 0 1.3rem;
    padding: 1rem 0.5rem;
  }
}

@media screen and (max-width: 900px) {
  .category-title {
    font-size: 27px;
  }

  .feedback {
    font-size: 20px;
  }

  #method-steps {
    width: auto;
  }
}

@media screen and (max-width: 500px) {
  .category-title {
    font-size: 24px;
  }

  .feedback {
    font-size: 18px;
  }

  .step {
    display: block;
    font-size: 20px;
    margin: 0 1.3rem;
    padding: 1rem 0.5rem;
  }
  .step .item-title {
    margin-bottom: auto;
  }
}

</style>
