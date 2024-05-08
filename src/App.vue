<template>
  <div id="app">
    <div class="title">
      <div class="image-container">
        <img src="../public/cassette-logo.jpg" alt="Image">
      </div>
      <div class="title-text">
        <span>NO STATIC RECORDS</span>
        <div class="title-second">The most essential albums of all time, according to one guy.</div>
      </div>
    </div>
    <nav class="nav-link">
      <router-link to="/">Home</router-link>
      <router-link to="/albums">Albums</router-link>
      <router-link to="/albums/genres">Genres</router-link>
      <router-link to="/albums/seasons">Seasons</router-link>
      <router-link to="/albums/puremoods">Pure Moods</router-link>
      <router-link to="/nsrc">NSRC</router-link>
    </nav>
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
  color: white;
  text-align: center;
  font-size: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4.5%;
}

.image-container img {
  width: 100px;
}

.title-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-second {
  font-size: 14px;
  text-align: center;
  color: #D66C56;
}

.nav-link {
  overflow: hidden;
  background-color: #191919;
  display: flex;
  justify-content: space-evenly;
  padding: 8px 80px;
  gap: 20px;
  background-color: #52515139;
}

.nav-link a {
  text-decoration: none;
  font-size: 15px;
  margin: 0 10px;
  background-color: #52515139;
  color: rgb(255, 255, 255);
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
  background-color: #333;
  color: #fff;
  padding: 15px;
  width: calc(100% - 30px);
  bottom: 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
}

.footer-content p {
  margin: 0;
  background-color: #333;
}

.footer-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #333;
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
  color: #fff;
  text-decoration: none;
  background-color: #333;
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
    background-color: #191919;
    display: flex;
    justify-content: space-evenly;
    padding: 8px 80px;
    gap: 10px;
    background-color: #52515139;
  }

  .nav-link a {
    text-decoration: none;
    font-size: 12px;
    margin: 0 30px;
    color: rgb(255, 255, 255);
    background-color: #52515139;
  }

}

@media (max-width: 1000px) {

  .nav-link {
    overflow: hidden;
    display: flex;
    justify-content: space-evenly;
    padding: 8px 100px;
    gap: 15px;
    background-color: #52515139;
  }

  .title {
    font-size: 50px;
  }

  .nav-link a {
    font-size: 12px;
    margin: 0 8.5px;
    background-color: #52515139;
  }
}

@media (max-width: 700px) {
  .title {
    color: white;
    text-align: center;
    font-size: 20px;
  }

  .image-container img {
    width: 50px;
  }

  .title-second {
    font-size: 7px;
  }

  .nav-link {
    overflow: hidden;
    display: flex;
    justify-content: space-evenly;
    padding: 0px 6px;
    gap: 20px;
    background-color: #52515139;
  }

  .nav-link a {
    font-size: 9px;
    margin: 10px 0px;
    background-color: #52515139;
  }

  .footer-content ul {
    font-size: 10px;
  }

  .footer-content p {
    font-size: 10px;
  }

}
</style>
