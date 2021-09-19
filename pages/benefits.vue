<template>
  <div id="main-content">
    <h2 class="page-title title">
      {{ $t('pages.benefits.title') }}
    </h2>
    <div id="benefits">
      <div
        v-for="(item, index) in $t('pages.benefits.items')"
        :key="index"
        class="item benefit"
        :class="getGridColumnClass(index)"
      >
        <h4 class="text-item-title title">
          {{ item.title }}
        </h4>
        <p class="text-item-body" v-html="item.body"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      client_width: document.body.clientWidth,
    }
  },
  created() {
    window.addEventListener("resize", this.onResizeChange);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResizeChange);
  },
  computed: {
    cases () {
      /* @ts-ignore */
      return this.items
    },
    getModulo () {
      /* @ts-ignore */
      const width = this.client_width;
      return width >= 900 ? 3 : width >= 500 ? 2 : 1;
    }
  },
  methods: {
    onResizeChange() {
      return document.body.clientWidth;
    },
    getGridColumnClass (index: number, modulo: number) {
      return 'column-' + ((index + 1) % modulo || modulo)
    }
  }
})
</script>

<style scoped>

#benefits  {
  display: grid;
  grid-gap: 45px;
}

.text-item-title {
  margin-top: 3rem;
  margin-bottom: 2rem;
}

@media screen and (max-width: 9000px) {
  #benefits  {
    grid-template-columns: repeat(3, 1fr);
  }

  .text-item-body {
    line-height: 1.8;
  }
}

@media screen and (max-width: 900px) {
  #benefits  {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 500px) {
  #benefits  {
    grid-template-columns: repeat(1, 1fr);
  }

  .text-item-body {
    text-align: justify;
  }
}

</style>
