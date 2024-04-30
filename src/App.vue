<template>
  <div id="app">
    <nav class="nav-link">
      <router-link to="/">Home</router-link>
      <router-link to="/albums">Albums</router-link>
      <router-link to="/albums/genres">Genres</router-link>
    </nav>
    <div CLASS="title">&nbsp;NO STATIC</div>
    <router-view></router-view>
  </div>
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
  margin-top: 5px;
  text-align: center;
  font-size: 80px;
  letter-spacing: 80px;
  border-bottom: 1px solid white;
}

.nav-link {
  overflow: hidden;
  background-color: #191919;
  display: flex;
  justify-content: end;
  padding: 10px 20px;
  gap: 20px;
}

.nav-link a {
  text-decoration: none;
  font-size: 15px;
  margin: 0 10px;
  background-color: #191919;
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


@media (max-width: 1300px) {
  .nav-link a {
    margin: 5px 0px;
  }

  .title {
    color: white;
    text-align: center;
    font-size: 50px;
    letter-spacing: 25px;
    border-bottom: 1px solid white;
    margin-left: 0%;
    margin-right: 0%;
  }

  .nav-link {
    overflow: hidden;
    background-color: #191919;
    display: flex;
    justify-content: end;
    padding: 5px 0px;
    gap: 0px;
  }

  .nav-link a {
    text-decoration: none;
    font-size: 13px;
    margin: 0 30px;
    background-color: #191919;
    color: rgb(255, 255, 255);
  }

}

@media (max-width: 600px) {
  .title {
    color: white;
    text-align: center;
    font-size: 30px;
    letter-spacing: 10px;
    border-bottom: 1px solid white;
    margin-left: 0%;
    margin-right: 0%;
  }

  .nav-link {
    justify-content: center;
    padding: 10px 0px;
    gap: 40px;
  }
}
</style>
