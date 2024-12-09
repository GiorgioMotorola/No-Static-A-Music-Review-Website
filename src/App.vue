<template>
  <div id="app">
    <nav class="nav-link">
      <router-link to="/">Home &#5869; </router-link>
      <router-link to="/albums">Albums &#5869; </router-link>
      <router-link to="/albums/genres">Genres &#5869; </router-link>
      <router-link to="/albums/seasons">Seasons &#5869; </router-link>
      <router-link to="/albums/puremoods">Pure Moods &#5869; </router-link>
      <router-link to="/nsrc">NSRC  &#5869; </router-link>
    </nav>
    <div class="title">
      <div class="title-text">
        [no-static] records
        <div class="title-second">the most essential albums of all time, according to one guy.</div>
      </div>
    </div>
    <div class="border"></div>
    <router-view></router-view>
  </div>
  <footer>
    <div class="footer-content">
      <p>&copy; 2024 Mike Weatherford</p>
      <ul>
        <li><a href="https://github.com/GiorgioMotorola" target="_blank">GITHUB</a></li>
        <li><a href="https://www.linkedin.com/in/michael-weatherford-10a3ab220/" target="_blank">LINKEDIN</a></li>
        <li><a href="https://www.mweatherford.rocks/" target="_blank">PORTFOLIO</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
  }
});
</script>

<style scoped>
template {
  margin: 0;
  box-sizing: border-box;
}

.title {
  text-align: start;
  font-size: 90px;
  display: flex;
  align-items: start;
  justify-content: start;
  color: rgb(43,46,40);
}

.image-container img {
  width: 100px;
}

.title-text {
  color: rgb(106, 110, 102);
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-top: 3%;
  padding-bottom: 1%;
}

.title-second {
  font-size: 22px;
  color: rgb(43,46,40);
  padding: 2%;
}

.border {
  border-bottom: .5px solid;
  margin-left: 2%;
  margin-right: 2%;
  padding-top: 10px;
}

.nav-link {
  overflow: hidden;
  display: flex;
  padding-bottom: 10px;
  padding-top: 10px;
  position: sticky;
  top: 0;
  overflow: hidden;
  border-bottom: 1.75px solid rgb(43,46,40);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: transparent;
}

.nav-link a {
  text-decoration: none;
  font-size: 20px;
  margin: 0 10px;
  color: rgb(43,46,40);
  background-color: transparent;
}

.nav-link a:hover {
  text-decoration: underline;
}

a {
  text-decoration: none;
  color: rgb(43,46,40);
  text-transform: uppercase;
}

footer {
  color: rgb(43,46,40);
  padding: 15px;
  width: calc(100% - 30px);
  bottom: 0;
}

.footer-content {
  color: rgb(43,46,40);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-content p {
  color: rgb(43,46,40);
  margin: 0;
}

.footer-content ul {
  color: rgb(43,46,40);
  list-style: none;
  padding: 0;
  margin: 0;
  margin-right: 30px;
}

.footer-content ul li {
  display: inline;
  margin-right: 15px;

}

.footer-content ul li:last-child {
  margin-right: 0;
}

.footer-content ul li a {
  color: rgb(43,46,40);
  text-decoration: none;
}

@media (max-width: 1300px) {
  .nav-link a {
    margin: 5px 0px;
  }

  .title {
    text-align: center;
    font-size: 70px;
  }

  .title-second {
    font-size: 17px;
  }

  .nav-link {
  overflow: hidden;
  display: flex;
  padding-bottom: 10px;
  padding-top: 10px;
}

.nav-link a {
  text-decoration: none;
  font-size: 20px;
  margin: 0 10px;
  color: rgb(43,46,40);
}

}

@media (max-width: 1000px) {

  .nav-link {
  overflow: hidden;
  display: flex;
  padding-bottom: 10px;
  padding-top: 10px;
}

.nav-link a {
  text-decoration: none;
  font-size: 20px;
  margin: 0 10px;
  color: rgb(43,46,40);
}
  .title {
    font-size: 70px;
  }

  .title-second {
    font-size: 17px;
  }
}

@media (max-width: 800px) {
  .title {
    text-align: center;
    font-size: 50px;
  }

  .image-container img {
    width: 50px;
  }

  .title-second {
    font-size: 12px;
  }

  .nav-link {
  overflow: hidden;
  display: flex;
  padding-bottom: 10px;
  padding-top: 10px;
}

.nav-link a {
  text-decoration: none;
  font-size: 10.5px;
  margin: 0 5px;
  color: rgb(43,46,40);
}

  .footer-content ul {
    font-size: 10px;
  }

  .footer-content p {
    font-size: 10px;
  }

}
</style>
