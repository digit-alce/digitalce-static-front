<template>
  <div id="page-top-full">
    <div id="blue-container" class="max-width">
      <div id="blue-inner-container">
        <h1 class="page-title title">
          {{ title }}
        </h1>
        <h4 class="page-subtitle subtitle">
          {{ subtitle }}
        </h4>
        <p class="body-text">
          {{ body  }}
        </p>
      </div>
    </div>
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
    body: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped>

#page-top-full {
  padding: 0 3%;
}

#blue-container {
  background-color: var(--color-digitalce-blue-darker);
  color: var(--color-white);
  margin: auto;
  padding: 10rem 1rem;
}

@media screen and (max-width: 9000px) {
  #page-top-full {
    padding: 0 3%;
  }

  #blue-container {
    padding: 10rem 1rem;
  }

  #blue-inner-container {
    width: 75%;
  }
}

@media screen and (max-width: 900px) {
  #blue-container {
    padding: 5rem 1rem;
  }

  #blue-inner-container {
    width: 90%;
  }
}

@media screen and (max-width: 700px) {
  #page-top-full {
    padding: 0;
  }
}
</style>
