<template>
  <div>
    <div id="navbar">
      <NuxtLink class="link img" :to="localePath('/')">
        <div id="nav-logo">
          <span class="helper" />
          <img src="@/assets/img/digitalce_logobaseline_bleu.png">
        </div>
      </NuxtLink>
      <div id="nav-links">
        <NuxtLink class="link" :to="localePath('/method')">{{ $t('path.method') }}</NuxtLink>
        <NuxtLink class="link" :to="localePath('/benefits')">{{ $t('path.benefits') }}</NuxtLink>
        <NuxtLink class="link" :to="localePath('/tool')">{{ $t('path.tool') }}</NuxtLink>
        <NuxtLink class="link" :to="localePath('/use-case')">{{ $t('path.use-case') }}</NuxtLink>
        <NuxtLink class="link" :to="localePath('/services')">{{ $t('path.services') }}</NuxtLink>

        <button id="contact-button" class="link button--blue"
          to="mailto:contact@digitalce.fr?subject=Hello%20Digitalce">
          {{ $t('cta.contact') }}
        </button>
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
      <div id="burger-menu" @change="onBurgerMenuToggleChange">
        <input id="toggle-box" type="checkbox">
        <span></span>
        <span></span>
      </div>
    </div>

    <transition name="fade">
      <div id="slide-menu-container" class="menu-toggle">
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
          <button id="contact-button" class="link button--blue"
            to="mailto:contact@digitalce.fr?subject=Hello%20Digitalce">
            {{ $t('cta.contact') }}
          </button>
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
    </transition>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
export default Vue.extend({
  methods: {
    onBurgerMenuToggleChange(event: any) {
      let element = document.getElementById('slide-menu-container');
      if (!element) {
        return;
      }
      element.style.visibility = event.target.checked ? 'visible' : 'hidden';
      element.style.opacity = event.target.checked ? '1' : '0';
    },
    closeMenu () {
      const toggleButton = document.getElementById('toggle-box')
      toggleButton?.click()
    }
  }
})
</script>

<style scoped>
#navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 120px;
  box-shadow: 0px 0px 3px var(--color-grey);
  background-color: var(--color-white);
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
  height: 120px;
  vertical-align: middle;
}

a {
  text-decoration: none;
}

.nuxt-link-active:not(.flag) {
  border-bottom: 1px solid var(--color-black);
}

#slide-menu-container {
  transition: 400ms;
  visibility: hidden;
  opacity: 0;
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

  #nav-links a, #nav-links button, #nav-links .flag {
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
  }

  #navbar #contact-button {
    text-decoration: none;
    text-align: center;
    width: 100px;
  }

  .link {
    top: 50%;
    transform: translateY(-50%);
    border-bottom: 1px solid transparent;
  }

  .link:not(.img) {
    position: relative;
    line-height: 31px
  }

  a {
    color: var(--color-black);
  }

  .flag img {
    height: 20px;
    vertical-align: middle;
  }

}

@media screen and (max-width: 900px) {

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

  #nav-links {
    display: none;
  }

  #burger-menu {
    display: initial;
    float: right;
    margin-right: 2rem;
    -webkit-user-select: none;
    user-select: none;
    z-index: 10;
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
    z-index: 12; /* and place it over the hamburger */
    -webkit-touch-callout: none;
  }

  #burger-menu span
  {
    display: block;
    width: 33px;
    height: 1px;
    margin-top: 10px;
    margin-bottom: 10px;
    position: relative;
    background: var(--color-black);
    z-index: 11;
    transform-origin: 1px 0px;
    transition: transform 0.3s cubic-bezier(0.77,0.2,0.05,1.0),
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
    background: var(--color-black);
    transform: rotate(-45deg) translate(-3px, 5px);
  }

  #burger-menu input:checked ~ span:nth-last-child(2)
  {
    transform: rotate(45deg) translate(-3px, -5px);
  }

  #slide-menu-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
  }

  #slide-menu
  {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--color-white);
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
  }

  #slide-menu li
  {
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
