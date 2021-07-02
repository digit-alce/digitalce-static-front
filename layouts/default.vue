<template>
  <div id="wrapper">
    <Nav />
    <div id="main-content">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
</script>

<style>
@font-face {
  font-family: MainFont;
  src: url(../assets/fonts/Vera-Humana-95.ttf.eot); /* IE9 Compat Modes */
  src: url(../assets/fonts/Vera-Humana-95.ttf.woff) format('woff'),
       url(../assets/fonts/Vera-Humana-95.ttf.svg) format('svg');
}
@font-face {
  font-family: SecondaryFont;
  src: url(../assets/fonts/Mate.ttf);
}

html, body, #__nuxt, #__layout {
  height: 100%;
  font-family: SecondaryFont;
  font-size: 18px;
  color: #2D3F65;
  background-color: #F1F3F8;
}

*{
  margin: 0;
}

img {
  object-fit: cover;
  transform: translateZ(0);
  /* width: 100%; */
}

#wrapper {
  min-height: calc(100vh - 75px);
  padding-top: 75px;
  display: flex;
  flex-direction: column;
}

#main-content {
  flex: 1;
  margin: 50px 4vw;
  width: 80%;
  max-width: 1000px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.page-title, .page-subtitle {
  text-align: center;
  font-family: MainFont;
  font-weight: 300;
  margin-bottom: 50px;
}

.page-title {
  text-transform: uppercase;
}

.button {
  margin: 0 auto;
  border-radius: 4px;
  text-decoration: none;
  padding: 20px 10px;
  text-transform: uppercase;
  text-align: center;
  width: 220px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px !important;
  font-family: MainFont;
}

.button--blue {
  border: 1px solid #526488;
  background-color: #071BE1;
  color: #fff;
}

.button--blue:hover {
  background-color: #fff;
  color: #35495e;
}

.text-item-title {
  text-transform: uppercase;
  font-size: 20px;
  margin-bottom: 10px;
  display: inline-block;
  position: relative;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
}

.underline:after {
  border-bottom: 6px solid #071BE1;
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

@media screen and (max-width: 9000px) {
  .page-title {
    font-size: 40px;
    letter-spacing: 3px;
  }

  .page-subtitle-big {
    font-size: 26px;
    letter-spacing: 1.5px;
  }

  .page-subtitle-small {
    font-size: 24px;
    letter-spacing: 1.2px;
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

  .body-text {
    text-align: center;
  }
}

@media screen and (max-width: 900px) {
  .page-title {
    font-size: 32px;
    letter-spacing: -0.2px;
  }

  .page-subtitle-big {
    font-size: 25px;
    letter-spacing: 1px;
  }

  .page-subtitle-small {
    font-size: 20px;
    letter-spacing: 1px;
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

  .body-text {
    text-align: justify;
  }
}

</style>
