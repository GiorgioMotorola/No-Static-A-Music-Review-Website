<template>
  <div class="section-title"><router-link to="/">home</router-link> <span style="color: white;">|</span> albums</div>
  <div class="container">
    <div class="album-list">
      <div v-for="album in albums" :key="album.id" class="album-list-item">
        <router-link :to="{ name: 'AlbumDetail', params: { id: album.id } }">
          <div class="album-entry">
            <img :src="album.image" alt="Album Cover">
            <div class="album-details">
              <div class="artist-name">{{ album.artist }}</div>
              <div class="album-name">{{ album.album }}</div>
            </div>
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
.container {
  margin-top: 3%;
  margin-bottom: 100px;
}

.album-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-items: center;
}

.album-entry {
  width: 100%;
  text-align: center;
}

.album-details {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: white
}

.section-title {
  padding: 10px;
  margin-left: 1rem;
  font-size: 30px;
  color: #ECDBBA;
}

.section-title a {
  color: #D66C56;
  text-decoration: none;
}

a {
  text-decoration: none;
}

.artist-name {
  color: rgb(255, 255, 255);
}

.album-name {
  color: #D66C56;
  font-style: italic;
}

.album-entry img {
  min-width: 150px;
  max-width: 150px;
  min-height: 150px;
  max-height: 150px;
  transition: box-shadow 0.2s ease;
}

.album-entry img:hover {
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px;
}

@media (max-width: 600px) {
  .container {
    margin-top: 19%;
  }

  .album-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .album-name {
    font-size: 10px;
  }

  .album-entry img {
    transition: none;
  }

  .album-entry img:hover {
    box-shadow: none;
  }

  .section-title {
    font-size: 15px;
  }
}
</style>
