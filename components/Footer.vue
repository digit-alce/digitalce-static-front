<template>
  <div id="footer">
    <div id="left-footer-links">
      <ul>
        <li class="title">
          DIGIT ALCE<br/>France
        </li>
      </ul>
      <a
        class="linkedin-logo"
        href="https://www.linkedin.com/company/digit-alce/"
        target="_blank"
      >
        <i class="fab fa-linkedin " />
      </a>
    </div>
    <div id="right-footer-links">
      <ul>
        <li>
          <NuxtLink
            class="link"
            :to="localePath('/contact')">{{ $t('path.contact') }}</NuxtLink>
        </li>
        <li>
          <a href="mailto:contact@digitalce.fr">contact@digitalce.fr</a>
        </li>
        <li id="copyright-dynamic-date">
          <script>
            const currentYear = new Date().getFullYear()
            const copyrightDate = currentYear === 2021
            ? '2021'
            : `2021 - ${currentYear}`
            const copyright = `© ${copyrightDate} digit alce`
            document.getElementById("copyright-dynamic-date").innerHTML = copyright
          </script>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style scoped>
#footer {
  width:100%;
  font-size: 14px;
  box-shadow: 0px 0px 5px gray;
  padding-top: 19px;
  color: #2D3F65;
  background-color: #EFEFEE;
  padding-bottom: 1rem;
}

.linkedin-logo {
  color: #0a66c2;
  font-size: 32px;
}

a {
  text-decoration: none;
  color: #2D3F65;
}

#left-footer-links {
  float:left;
  padding-left: 40px;
}

#right-footer-links {
  float: right;
  padding-right: 40px;
}

ul{
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 0 20px 0;
}

</style>
