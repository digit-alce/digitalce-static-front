<template>
  <div>
    <div id="page-top-full">
      <div id="blue-container" class="max-width">
        <div id="blue-inner-container">
          <h1 class="page-title title">
            {{ $t('pages.landing.title') }}
          </h1>
          <h4 class="page-subtitle subtitle">
            {{ $t('pages.landing.subtitle') }}
          </h4>
          <p class="body-text">
            {{ $t('pages.landing.body') }}
          </p>
        </div>
      </div>
    </div>
    <div id="main-content">

      <div class="category">
        <h2 class="category-title">{{ $t('pages.landing.categories.work.title')}}</h2>
        <p class="category-subtitle">{{ $t('pages.landing.categories.work.subtitle')}}</p>
        <p class="category-body">{{ $t('pages.landing.categories.work.body') }}</p>
      </div>

      <Divider transparent/>
      <div class="category">
        <h2 class="category-title">{{ $t('pages.landing.categories.method.title')}}</h2>
        <p class="category-subtitle">{{ $t('pages.landing.categories.method.subtitle')}}</p>
        <p class="category-body">{{ $t('pages.landing.categories.method.body') }}</p>
        <NuxtLink class="button button--blue" :to="localePath('/method')">{{ $t('cta.learn-more') }}</NuxtLink>
      </div>

      <Divider transparent/>
      <div class="category">
        <h2 class="category-title">{{ $t('pages.landing.categories.benefits.title')}}</h2>
        <p class="category-subtitle">{{ $t('pages.landing.categories.benefits.subtitle')}}</p>
        <p class="category-body">{{ $t('pages.landing.categories.benefits.body') }}</p>
        <NuxtLink class="button button--blue" :to="localePath('/benefits')">{{ $t('cta.learn-more') }}</NuxtLink>
      </div>

      <Divider transparent/>
      <div class="category">
        <h2 class="category-title">{{ $t('pages.landing.categories.tool.title')}}</h2>
        <p class="category-subtitle">{{ $t('pages.landing.categories.tool.subtitle')}}</p>
        <p class="category-body">{{ $t('pages.landing.categories.tool.body') }}</p>
        <div class="image-container">
          <img :src="tool_picture" class="image"/>
        </div>
        <NuxtLink class="button button--blue" :to="localePath('/tool')">{{ $t('cta.learn-more') }}</NuxtLink>
      </div>

      <Divider transparent/>
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
      tool_picture: require('@/assets/img/tools/1.jpg'),
      use_case_picture: require('@/assets/img/facom.png')
    }
  }
})
</script>

<style scoped>

#page-top-full {
  background-color: var(--color-grey);
  padding: 0 3%;
}

#blue-container {
  background-color: var(--color-digitalce-blue-darker);
  color: var(--color-white);
  margin: auto;
  padding: 10rem 1rem;
}


.category-title {
  margin-bottom: 3rem;
  text-align: center;
  color: var(--color-digitalce-blue);
}

.category-subtitle {
  font-size: 17px;
}

.category-subtitle, .category-body {
  text-align: center;
  margin-bottom: 2rem;
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
  max-width: 500px;
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
}

</style>
