<template>
  <div class="imagetext" :style="cssProps">
    <div class="imagetext-top-content">
      <img
        v-if="image && !imageClickable"
        class="imagetext-img"
        :src="image"
      >
      <a v-if="image && imageClickable"
        class="img-link"
        :href="image" target="_blank">
        <img class="imagetext-img clickable" :src="image">
      </a>
      <div class="flex-container">
        <div class="imagetext-right-content">
          <i
            v-if="icon"
            class="imagetext-icon"
            :class="icon"
          />
          <h4 v-if="title" class="imagetext-title title">
            {{ title }}
          </h4>
          <h4 v-if="subtitle" class="imagetext-subtitle subtitle">
            {{ subtitle }}
          </h4>
          <p v-if="bodyText && !bodyTextBelow" class="imagetext-body" v-html="bodyText" />
        </div>
      </div>
    </div>
    <p v-if="bodyText && bodyTextBelow" class="imagetext-body bottom" v-html="bodyText" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    bodyText: {
      type: String,
      default: ''
    },
    bodyTextBelow: {
      type: Boolean,
      default: false
    },
    image: {
      type: String,
      default: ''
    },
    imageClickable: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
})
</script>

<style scoped>

.imagetext-top-content {
  width: 100%;
}

.imagetext i {
  margin-top: 1rem;
  font-size: 50px;
}

.imagetext-subtitle {
  margin-top: 2rem;
}

.imagetext-body {
  margin-top: 2rem;
  color: var(--color-black);
  line-height: 1.8;
}

.imagetext-body.bottom {
  margin-bottom: 4rem;
}

@media screen and (max-width: 9000px) {
  .imagetext-top-content {
    display: flex;
  }

  .imagetext-img:not(.clickable), .img-link {
    margin-right: 5rem;
  }

  .imagetext-img {
    max-width: 400px;
    padding-right: 0;
  }

  .flex-container {
    display: flex;
  }

  .imagetext-right-content {
    width: 100%;
    margin-top: auto;
    margin-bottom: auto;
  }
}

@media screen and (max-width: 500px) {
  .imagetext-title {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .imagetext-body {
    text-align: justify;
  }

  .imagetext-top-content {
    display: block;
  }

  .flex-container {
    display: flex;
    padding-left: 0;
  }

  .imagetext-right-content {
    width: unset;
    padding-left: 0;
    padding-top: 1rem;
  }

  .imagetext-img {
    max-width: unset;
    width: 100%;
    padding-right: 0;
  }
}
</style>
