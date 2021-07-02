<template>
  <div id="navbar">
    <NuxtLink class="link img" :to="localePath('/')">
      <div id="nav-logo">
        <span class="helper" />
        <img src="@/assets/img/digitalce-logo-cropped.png">
      </div>
    </NuxtLink>

    <div id="nav-links">
      <NuxtLink class="link" :to="localePath('/benefits')">{{ $t('path.benefits') }}</NuxtLink>
      <NuxtLink class="link" :to="localePath('/method')">{{ $t('path.method') }}</NuxtLink>
      <NuxtLink class="link" :to="localePath('/tool')">{{ $t('path.tool') }}</NuxtLink>
      <NuxtLink class="link" :to="localePath('/use-case')">{{ $t('path.use-case') }}</NuxtLink>
      <NuxtLink class="link" :to="localePath('/services')">{{ $t('path.services') }}</NuxtLink>
      <NuxtLink class="link" :to="localePath('/contact')">{{ $t('path.contact') }}</NuxtLink>
      <!--
        Country flags made by Freepik (https://www.freepik.com/)
      -->
      <NuxtLink v-if="$i18n.locale !== 'fr'" :to="switchLocalePath('fr')" class="link flag">
        <img src="@/assets/img/flags/fr.png">
      </NuxtLink>
      <NuxtLink v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')" class="link flag">
        <img src="@/assets/img/flags/en.png">
      </NuxtLink>
    </div>

    <div id="burger-menu">
      <input id="toggle-box" type="checkbox">
      <span></span>
      <span></span>
      <span></span>
      <ul id="slide-menu">
        <NuxtLink class="link" :to="localePath('/benefits')">
          <li @click="closeMenu()">{{ $t('path.benefits') }}</li>
        </NuxtLink>
        <NuxtLink class="link" :to="localePath('/method')">
          <li @click="closeMenu()">{{ $t('path.method') }}</li>
        </NuxtLink>
        <NuxtLink class="link" :to="localePath('/tool')">
          <li @click="closeMenu()">{{ $t('path.tool') }}</li>
        </NuxtLink>
        <NuxtLink class="link" :to="localePath('/use-case')">
          <li @click="closeMenu()">{{ $t('path.use-case') }}</li>
        </NuxtLink>
        <NuxtLink class="link" :to="localePath('/services')">
          <li @click="closeMenu()">{{ $t('path.services') }}</li>
        </NuxtLink>
        <NuxtLink class="link" :to="localePath('/contact')">
          <li @click="closeMenu()">{{ $t('path.contact') }}</li>
        </NuxtLink>
        <NuxtLink v-if="$i18n.locale !== 'fr'" :to="switchLocalePath('fr')" class="link flag">
          <li>
            <img src="@/assets/img/flags/fr.png">
          </li>
        </NuxtLink>
        <NuxtLink v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')" class="link flag">
          <li>
            <img src="@/assets/img/flags/en.png">
          </li>
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
export default Vue.extend({
  methods: {
    closeMenu () {
      const toggleButton = document.getElementById('toggle-box')
      toggleButton?.click()
    }
  }
})
</script>

<style scoped>
#navbar {
  background: white;
  position: fixed;
  top: 0;
  width: 100%;
  height: 75px;
  box-shadow: 0px 0px 5px gray;
  background-color: #F1F3F8;
  color: #2D3F65;
  z-index: 10;
}

#nav-logo {
  float: left;
  height: 100%;
  white-space:  nowrap;
}

.helper {
  height: 100%;
  display: inline-block;
  vertical-align: middle;
 }

#nav-logo img {
  margin-left: 30px;
  height: 30px;
  vertical-align: middle;
}

a {
  text-decoration: none;
}

.nuxt-link-active:not(.flag) {
  border-bottom: 1px solid #2D3F65;
}

@media screen and (max-width: 9000px) {
  #burger-menu {
    display: none;
  }

  #nav-links {
    float: right;
    height: 100%;
    margin-right: 20px;
  }

  #nav-links a, #nav-links .flag {
    display: inline-block;
    vertical-align: middle;
    margin-left: 20px;
  }

  .link {
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    border-bottom: 1px solid transparent;
  }

  .link:not(.img) {
    position: relative;
  }

  a {
    color: #2D3F65;
  }

  .flag img {
    height: 20px;
    vertical-align: middle;
  }

}

@media screen and (max-width: 900px) {
  #nav-links {
    display: none;
  }

  #burger-menu {
    display: initial;
    float: right;
    margin-right: 2rem;
    -webkit-user-select: none;
    user-select: none;
    z-index: 1;

    vertical-align: middle;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    font-size: 30px;
  }

  #burger-menu input
  {
    position: absolute;
    width: 33px;
    height: 33px;
    cursor: pointer;
    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */
    -webkit-touch-callout: none;
  }

  #burger-menu span
  {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #cdcdcd;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
  }
  #burger-menu span:first-child
  {
    transform-origin: 0% 0%;
  }
  #burger-menu span:nth-last-child(2)
  {
    transform-origin: 0% 100%;
  }
  #burger-menu input:checked ~ span
  {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }
  #burger-menu input:checked ~ span:nth-last-child(3)
  {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  #burger-menu input:checked ~ span:nth-last-child(2)
  {
    transform: rotate(-45deg) translate(0, -1px);
  }

  #slide-menu
  {
    position: absolute;
    width: 250px;
    margin: -100px 0 0 -250px;
    padding: 50px;
    padding-top: 125px;
    padding-bottom: 3000px;

    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */

    transform-origin: 0% 0%;
    transform: translate(100%, 0);

    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  }
  #slide-menu li
  {
    padding: 20px 0;
    font-size: 22px;
  }
  #burger-menu input:checked ~ ul
  {
    transform: none;
  }

  .flag img {
    height: 40px;
  }
}
</style>
