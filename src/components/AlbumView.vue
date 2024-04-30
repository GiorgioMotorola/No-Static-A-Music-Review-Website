<template>
  <div class="container">
    <div class="album-list-item">
      <div v-for="album in albums" :key="album.id" class="album-list">
        <router-link :to="{ name: 'AlbumDetail', params: { id: album.id } }">
          <div>
            <div>{{ album.artist }} - {{ album.album }}</div>
          </div>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AlbumPage",
  data() {
    return {
      albums: [],
    };
  },
  mounted() {
    this.fetchAlbums();
  },
  methods: {
    fetchAlbums() {
      axios.get("albums.json").then((response) => {
        this.albums = response.data;
      });
    },
  },
};
</script>

<style scoped>
* {
  text-decoration: none;
  color: white;
}

.container {
  margin-top: 3%;
}

.album-list {
  display: flex;
  justify-content: center;
  margin-top: 0.5%;
}

.album-list-item {
  position: relative;
  margin: 0 10px;
}

.album-list-item a {
  position: relative;
}

.album-list-item a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: white;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.album-list-item a:hover::after {
  transform: scaleX(1);
}

@media (max-width: 600px) {
  .container {
    margin-top: 19%;
  }

  .album-list {
    display: flex;
    justify-content: center;
    margin-top: 3%;
    font-size: 13px;
  }
}
</style>
