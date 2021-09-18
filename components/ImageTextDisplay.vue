<template>
  <div class="imagetext" :style="cssProps">
    <div class="imagetext-top-content">
      <img
        v-if="image && !imageClickable"
        class="imagetext-img"
        :src="image"
      >
      <a v-if="image && imageClickable" class="img-link" :href="image" target="_blank">
        <img class="imagetext-img" :src="image">
      </a>
      <div class="imagetext-right-content">
        <i
          v-if="icon"
          class="imagetext-icon"
          :class="icon"
        />
        <h4 class="imagetext-title title">
          {{ title }}
        </h4>
        <h4 class="imagetext-subtitle subtitle">
          {{ subtitle }}
        </h4>
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
        '--image-width': this.imageWidthPx + 'px',
      }
    }
  }
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

.img-link {
  background: var(--color-grey)
}

.imagetext-img {
  opacity: 0.5;
}

.imagetext-title, .imagetext-subtitle {
  margin-top: 10px;
}

.imagetext-body {
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

  .imagetext-img {
    width: var(--image-width);
  }

  .imagetext-right-content {
    width: 100%;
    padding-left: 5rem;
  }
}

@media screen and (max-width: 900px) {
  .imagetext-top-content {
    display: block;
  }

  .imagetext-right-content {
    width: unset;
    padding-left: 0;
    padding-top: 1rem;
    padding-bottom: 3rem;
  }

  .imagetext-img {
    width: 100%;
    padding-right: 0;
  }
}
</style>
