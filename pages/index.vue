<template>
  <div>
    <BlueBox
      :title="$t('pages.landing.title')"
      :subtitle="$t('pages.landing.subtitle')"
      :body="$t('pages.landing.body')"
    />

    <div id="main-content">
      <div class="category">
        <h2 class="category-title">{{ $t('pages.landing.categories.work.title')}}</h2>
        <p class="category-subtitle">{{ $t('pages.landing.categories.work.subtitle')}}</p>
        <p class="category-body">{{ $t('pages.landing.categories.work.body') }}</p>
      </div>

      <Divider transparent big/>
      <div class="category">
        <h2 class="category-title">{{ $t('pages.landing.categories.method.title')}}</h2>
        <p class="category-subtitle">{{ $t('pages.landing.categories.method.subtitle')}}</p>
        <p class="category-body">{{ $t('pages.landing.categories.method.body') }}</p>
        <div id="method-icons-container">
          <div v-for="(icon, index) in icons" :key="index" class="method-icon">
            <img class="method-icon-img" :src="icons_paths[index]">
            <h4 class="method-icon-title title">
              {{ icon }}
            </h4>
          </div>
        </div>
        <NuxtLink class="button button--blue" :to="localePath('/method')">{{ $t('cta.learn-more') }}</NuxtLink>
      </div>

      <Divider transparent big/>
      <div class="category">
        <h2 class="category-title">{{ $t('pages.landing.categories.benefits.title')}}</h2>
        <p class="category-subtitle">{{ $t('pages.landing.categories.benefits.subtitle')}}</p>
        <p class="category-body">{{ $t('pages.landing.categories.benefits.body') }}</p>
        <NuxtLink class="button button--blue" :to="localePath('/benefits')">{{ $t('cta.learn-more') }}</NuxtLink>
      </div>

      <Divider transparent big/>
      <div class="category">
        <h2 class="category-title">{{ $t('pages.landing.categories.tool.title')}}</h2>
        <p class="category-subtitle">{{ $t('pages.landing.categories.tool.subtitle')}}</p>
        <p class="category-body">{{ $t('pages.landing.categories.tool.body') }}</p>
        <div class="image-container">
          <img :src="tool_picture" class="image"/>
        </div>
        <NuxtLink class="button button--blue" :to="localePath('/tool')">{{ $t('cta.learn-more') }}</NuxtLink>
      </div>

      <Divider transparent big/>
      <div class="category">
        <h2 class="category-title">{{ $t('pages.landing.categories.use-case.title')}}</h2>
        <p class="category-subtitle">{{ $t('pages.landing.categories.use-case.subtitle')}}</p>
        <p class="category-body">{{ $t('pages.landing.categories.use-case.body') }}</p>
        <div class="image-container">
          <img :src="use_case_picture" class="image"/>
        </div>
        <NuxtLink class="button button--blue" :to="localePath('/use-case')">{{ $t('cta.learn-more') }}</NuxtLink>
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
      icons: this.$root.context.app.i18n.t('pages.landing.categories.method.icons'),
      tool_picture: require('@/assets/img/tools/1.jpg'),
      use_case_picture: require('@/assets/img/facom.png'),
      icons_paths: [
        require('@/assets/img/method/1_envision.jpg'),
        require('@/assets/img/method/2_cocreate.jpg'),
        require('@/assets/img/method/3_prepare.jpg'),
        require('@/assets/img/method/4_enhance.jpg'),
        require('@/assets/img/method/5_scale.jpg'),
      ]
    }
  },
  computed: {
    icons () {
      /* @ts-ignore */
      return this.icons;
    },
  }
})
</script>

<style scoped>

.category-title {
  margin-bottom: 3rem;
  text-align: center;
  color: var(--color-digitalce-blue);
}

.category-subtitle {
  font-size: 17px;
  line-height: 1.8;
}

.category-subtitle, .category-body {
  text-align: center;
  margin-bottom: 2rem;
}

.category-body {
  font-size: 12.5px;
}

#method-steps {
  width: 100%;
  text-align: center;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-bottom: 40px;
}

.step .item-title {
  margin-bottom: 1rem;
}

.image-container {
  margin-bottom: 40px;
  text-align: center;
  width: 100%;
}

.image {
  max-width: 100%;
}

button {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

@media screen and (max-width: 9000px) {
  #blue-container {
    padding: 10rem 1rem;
  }

  #blue-inner-container {
    width: 75%;
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

  .category {
    padding-left: 20%;
    padding-right: 20%;
  }

  #method-icons-container {
    display: flex;
    flex-direction: row;
    text-align: center;
    margin-bottom: 3rem;
  }

  .method-icon {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .method-icon-img {
    max-width: 5rem;
    margin: auto;
  }

  .method-icon-title {
    margin-top: 1rem;
  }
}

@media screen and (max-width: 900px) {
  #blue-container {
    padding: 5rem 1rem;
  }

  #blue-inner-container {
    width: 90%;
  }

  #method-steps {
    width: auto;
  }

  .category {
    padding-left: 10%;
    padding-right: 10%;
  }
}

@media screen and (max-width: 500px) {
  .category {
    padding-left: 0;
    padding-right: 0;
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

  #method-icons-container {
    flex-direction: column;;
  }

  .method-icon {
    flex-direction: row;
    margin: auto
  }

  .method-icon:not(:last-child) {
    padding-bottom: 2rem;
  }

  .method-icon-img {
    max-width: 5rem;
    margin: 0 2rem 0 4rem;
  }

  .method-icon-title {
    margin: auto 0;
    min-width: 120px;
    text-align: left;
  }
}

</style>
