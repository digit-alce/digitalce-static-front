<template>
  <div class="imagetext" :style="cssProps">
    <div class="imagetext-top-content">
      <img
        v-if="image && !imageClickable"
        class="imagetext-img"
        :src="image"
      >
      <a v-if="image && imageClickable" :href="image" target="_blank">
        <img class="imagetext-img" :src="image">
      </a>
      <div class="imagetext-right-content">
        <i
          v-if="icon"
          class="imagetext-icon"
          :class="icon"
        />
        <div class="imagetext-title">
          {{ title }}
        </div>
        <div class="imagetext-subtitle">
          {{ subtitle }}
        </div>
        <p v-if="!bodyTextBelow" class="imagetext-body" v-html="bodyText" />
      </div>
    </div>
    <p v-if="bodyTextBelow" class="imagetext-body bottom" v-html="bodyText" />
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
    justifyBody: {
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
    },
    titleSizePx: {
      type: String,
      default: '35'
    },
    subtitleSizePx: {
      type: String,
      default: '24'
    },
    imageWidthPx: {
      type: String,
      default: '400'
    },
    bodySizePx: {
      type: String,
      default: '18'
    }
  },
  computed: {
    cssProps () {
      return {
        '--title-font-size': this.titleSizePx + 'px',
        '--subtitle-font-size': this.subtitleSizePx + 'px',
        '--body-font-size': this.bodySizePx + 'px',
        '--image-width': this.imageWidthPx + 'px',
        '--body-alignment': this.justifyBody ? 'justify' : 'center'
      }
    }
  }
})
</script>

<style scoped>

.imagetext-top-content {
  text-align: center;
  width: 100%;
}

.imagetext-right-content {
  width: 100%;
}

.imagetext i {
  margin-top: 1rem;
  font-size: 50px;
}

.imagetext-title {
  text-transform: uppercase;
}

.imagetext-subtitle {
  font-size: var(--subtitle-font-size);
}

.imagetext-title, .imagetext-subtitle {
  margin-top: 10px;
  font-family: MainFont;
}

.imagetext-body {
  font-size: var(--body-font-size);
  font-family: SecondaryFont;
  margin-top: 1rem;
  color: black;
}

.imagetext-body.bottom {
  margin-bottom: 4rem;
}

@media screen and (max-width: 9000px) {
  .imagetext-title {
    font-size: var(--title-font-size);
  }

  .imagetext-body {
    text-align: var(--body-alignment);
  }

  .imagetext-top-content {
    display: flex;
  }
  .imagetext-img {
    width: var(--image-width);
    padding-right: 2rem;
  }
}

@media screen and (max-width: 900px) {
  .imagetext-title {
    font-size: 24px;
  }

  .imagetext-body {
    text-align: justify;
  }

  .imagetext-top-content {
    display: block;
  }
  .imagetext-img {
    max-width: 500px;
    width: 100%;
    padding-right: 0;
  }
}
</style>
