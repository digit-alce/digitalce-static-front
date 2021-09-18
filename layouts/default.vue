<template>
  <div id="wrapper">
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
</script>

<style>
@font-face {
  font-family: MainFont;
  src: url(../assets/fonts/LibreFranklin.ttf);
}
@font-face {
  font-family: SecondaryFont;
  src: url(../assets/fonts/Nanum-Regular.ttf);
}

:root {
  --color-digitalce-blue: #071be1;
  --color-digitalce-blue-darker: #0717c0;
  --color-white: #FFF;
  --color-black: #000;
  --color-grey: #efefee;
  --color-linkedin: #0a66c2;
}

html, body, #__nuxt, #__layout {
  height: 100%;
  font-family: MainFont;
  font-size: 12px;
  color: var(--color-black);
  background-color: var(--color-white)
}

h1, h2, h3, h4, h5, h6 {
  font-family: SecondaryFont;
  font-weight: 100;
  letter-spacing: 0px;
}

h1 {
  font-size: 42.5px;
}

h2 {
  font-size: 35px;
}

h4 {
  font-size: 20px;
}

*{
  margin: 0;
}

img {
  object-fit: cover;
  transform: translateZ(0);
}

#wrapper {
  min-height: calc(100vh - 75px);
  padding-top: 119px;
  display: flex;
  flex-direction: column;
}

#main-content {
  flex: 1;
  margin: 50px 4vw;
  width: 90%;
  max-width: 1000px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}

.max-width {
  max-width: 1000px;
}

.page-title, .page-subtitle {
  text-align: left;
  font-weight: 300;
  margin-bottom: 50px;
}

button {
  border: 0;
}

button, .button {
  cursor: pointer;
}

.button {
  margin: 0 auto;
  text-decoration: none;
  padding: 1rem;
  text-align: center;
  width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;;
}

.button--blue {
  background-color: var(--color-digitalce-blue);
  color: var(--color-white);
}

.button--blue:hover {
  opacity: 0.7;
  transition: all 300ms ease-out;
}

.text-item-title {
  margin-bottom: 10px;
  display: inline-block;
  position: relative;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
}

.underline:after {
  border-bottom: 6px solid var(--color-digitalce-blue);
  opacity: 0.5;
  content:"";
  margin: 0 auto;
  position: absolute;
  top: 50%; left: 0; right: 0; bottom: 0;
  z-index: -1;
}

.text-item-body {
  padding: 10px 20px;
}

.no-border {
  border: none !important;
}

@media screen and (max-width: 9000px) {
  .column-1 {
    grid-column: 1;
  }

  .column-2 {
    grid-column: 2;
  }

  .column-3 {
    grid-column: 3;
  }
}

@media screen and (max-width: 900px) {
  .column-1 {
    grid-column: 1;
  }

  .column-2 {
    grid-column: 1;
  }

  .column-3 {
    grid-column: 1;
  }
}

</style>
