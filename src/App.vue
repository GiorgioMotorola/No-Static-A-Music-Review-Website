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
        No Static <br> Records
        <div class="title-second">The most essential albums of all time, according to one guy.</div>
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
  font-size: 120px;
  display: flex;
  align-items: start;
  justify-content: start;
  margin-right: 4.5%;
}

.image-container img {
  width: 100px;
}

.title-text {
  color: #1E1E1E;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px;
}

.title-second {
  font-size: 25px;
  text-align: center;
  color: #1E1E1E;
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
  border-bottom: 1.75px solid #000000;
}

.nav-link a {
  text-decoration: none;
  font-size: 20px;
  margin: 0 10px;
  color: rgb(0, 0, 0);
}

.nav-link a:hover {
  text-decoration: underline;
}

a {
  text-decoration: none;
  color: black;
  text-transform: uppercase;
}

footer {
  color: #1E1E1E;
  padding: 15px;
  width: calc(100% - 30px);
  bottom: 0;
}

.footer-content {
  color: #1E1E1E;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-content p {
  color: #1E1E1E;
  margin: 0;
}

.footer-content ul {
  color: #1E1E1E;
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
  color: #1E1E1E;
  text-decoration: none;
}

@media (max-width: 1300px) {
  .nav-link a {
    margin: 5px 0px;
  }

  .title {
    color: white;
    text-align: center;
    font-size: 60px;
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
  color: rgb(0, 0, 0);
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
  color: rgb(0, 0, 0);
}
  .title {
    font-size: 50px;
  }
}

@media (max-width: 700px) {
  .title {
    color: white;
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
  font-size: 10px;
  margin: 0 10px;
  color: rgb(0, 0, 0);
}

  .footer-content ul {
    font-size: 10px;
  }

  .footer-content p {
    font-size: 10px;
  }

}
</style>
