<template>
  <div id="app">
    <div id="mySidebar" class="sidebar right">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav">×</a>
      <router-link to="/">Home</router-link>
      <router-link to="/albums">Albums</router-link>
      <router-link to="/albums/genres">Genres</router-link>
      <router-link to="/albums/seasons">Seasons</router-link>
      <router-link to="/albums/puremoods">Pure Moods</router-link>
      <router-link to="/nsrc">NSRC</router-link>
      <router-link to="/top2024">Best Albums of 2024</router-link>
      <router-link to="/top2025">Best Albums of 2025</router-link>
      <router-link to="/listspring">2025 Spring Calendar</router-link>
    </div>

    <div id="main">
      <button class="openbtn right" @click="openNav">☰ MENU</button>
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
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const openNav = () => {
      document.getElementById("mySidebar").style.width = "250px";
    };

    const closeNav = () => {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginTop = "0";
    };

    return { openNav, closeNav };
  }
});
</script>

<style scoped>
body {
  font-family: "Lato", sans-serif;
}
.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #eee2e2;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 100px;
}

.sidebar a {
  padding: 15px 15px 15px 20px;
  text-decoration: none;
  font-size: 15px;
  color: #41799e;
  background-color: #eee2e2;
  display: block;
  transition: 0.3s;
}

.sidebar a:hover {
  color: #2e2d2d;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  left: 1px;
  font-size: 36px;
  margin-right: 50px;
}

.openbtn {
  cursor: pointer;
  border: none;
}

.openbtn.right {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 22px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 3px;
  border: 1.75px solid black;
}

.sidebar-icon {
  width: 75x;
  height: 75px;
  vertical-align: middle;
  border-radius: 50%;
}

#main {
  transition: margin-left .5s;
  padding: 16px;
}

.title {
  text-align: start;
  font-size: 90px;
  display: flex;
  align-items: start;
  justify-content: start;
  color: rgb(43, 46, 40);
}

.title-text {
  color: rgb(106, 110, 102);
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-top: .5%;
  padding-bottom: 1%;
}

.title-second {
  font-size: 22px;
  color: rgb(43, 46, 40);
  padding: 2%;
}

.border {
  border-bottom: .5px solid;
  margin-left: 2%;
  margin-right: 2%;
  padding-top: 10px;
}

.footer-content {
  color: rgb(43, 46, 40);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-content ul li {
  display: inline;
  margin-right: 15px;
}

.footer-content ul li a {
  color: rgb(43, 46, 40);
  text-decoration: none;
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
.openbtn.right {
  font-size: 20px;
}
}

@media (max-width: 800px) {
.title {
  text-align: center;
  font-size: 50px;
}
.title-text {
  padding-top: 4%;
}

.image-container img {
  width: 50px;
}

.title-second {
  font-size: 12px;
}

.footer-content ul {
  font-size: 10px;
}

.footer-content p {
  font-size: 10px;
}
.openbtn.right {
  font-size: 15px;
}
}
</style>