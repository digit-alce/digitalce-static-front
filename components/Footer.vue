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
  background-color: var(--color-grey);
  padding-bottom: 1rem;
}

.linkedin-logo {
  color: var(--color-linkedin);
  font-size: 32px;
}

a {
  text-decoration: none;
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
