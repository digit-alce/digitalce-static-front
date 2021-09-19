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

h1, h2, h3, h4, h5, h6, .title, .subtitle {
  font-family: SecondaryFont;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
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

#main-content {
  flex: 1;
  width: 90%;
  max-width: 1000px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 6rem;
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
}

.no-border {
  border: none !important;
}

@media screen and (max-width: 9000px) {
  #wrapper {
    padding-top: 119px;
  }

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
  html {
      scrollbar-width: none; /* For Firefox */
      -ms-overflow-style: none; /* For Internet Explorer and Edge */
  }

  html::-webkit-scrollbar {
      width: 0px; /* For Chrome, Safari, and Opera */
  }

  #wrapper {
    padding-top: 79px;
  }


  .column-1 {
    grid-column: 1;
  }

  .column-2 {
    grid-column: 2;
  }
}

@media screen and (max-width: 500px) {
html {
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For Internet Explorer and Edge */
}

html::-webkit-scrollbar {
    width: 0px; /* For Chrome, Safari, and Opera */
}

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
