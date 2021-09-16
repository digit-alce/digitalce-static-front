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
  src: url(../assets/fonts/LibreFranklin.ttf);
}
@font-face {
  font-family: SecondaryFont;
  src: url(../assets/fonts/Nanum-Regular.ttf);
}

html, body, #__nuxt, #__layout {
  height: 100%;
  font-family: MainFont;
  font-size: 12px;
  color: #2D3F65;
  background-color: #FFF;
}

.title, .subtitle {
  font-family: SecondaryFont;
  font-weight: 100;
  letter-spacing: 0px;
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
  width: 80%;
  max-width: 1000px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.page-title, .page-subtitle {
  text-align: center;
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
  padding: 20px 10px;
  text-align: center;
  width: 220px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px !important;
}

.button--blue {
  background-color: #071BE1;
  color: #fff;
}

.button--blue:hover {
  opacity: 0.7;
  transition: all 300ms ease-out;
}

.text-item-title {
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

.no-border {
  border: none !important;
}

@media screen and (max-width: 9000px) {
  .page-title {
    font-size: 40px;
  }

  .page-subtitle-big {
    font-size: 26px;
  }

  .page-subtitle-small {
    font-size: 24px;
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
  }

  .page-subtitle-big {
    font-size: 25px;
  }

  .page-subtitle-small {
    font-size: 20px;
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
