<template>
  <div class="section-title"><router-link to="/">home</router-link> <span style="color: rgb(43,46,40);">|</span> albums</div>
  <div class="container">
    <div class="album-list">
      <div v-for="album in albums" :key="album.id" class="album-list-item">
        <router-link :to="{ name: 'AlbumDetail', params: { id: album.id } }">
          <div class="album-details">
              <div class="artist-name">{{ album.artist }}</div>
              <div class="album-name">{{ album.album }}</div>
              <div class="album-entry-number">&#x2116; {{ album.entryNumber }}</div>
            </div>
          <div class="album-entry">
            <img :src="album.image" alt="Album Cover">
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
  gap: 30px;
  justify-items: center;
}

.album-entry {
  width: 100%;
  text-align: start;
}

.album-details {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  font-size: 12px;
}

.section-title {
  padding: 10px;
  margin-left: 1rem;
  font-size: 30px;
  color: rgb(43,46,40);
}

.section-title a {
  color: #D66C56;
  text-decoration: none;
}

a {
  text-decoration: none;
}

.artist-name {
  color: rgb(43,46,40);
  font-weight: 900;
  font-style:normal;
  font-size: 20px;
  border-bottom: 1px solid;
}

.album-name {
  color: rgb(43,46,40);
  font-weight: 900;
  font-style: italic;
  font-size: 15px;
}

.album-entry-number {
  color: #D66C56;
  font-size: 15px;
  font-weight: 900;
}

.album-entry img {
  min-width: 400px;
  max-width: 400px;
  min-height: 400px;
  max-height: 400px;
  transition: box-shadow 0.2s ease;
  border: 2px double;
  border-color: rgb(43,46,40);
}

.album-entry img:hover {
  box-shadow: 0 2px 8px rgb(43,46,40);
}

@media (max-width: 600px) {
  .container {
    margin-top: 19%;
  }

  .album-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .artist-name {
    font-size: 10px;
  }

  .album-name {
    font-size: 10px;
    text-wrap: wrap;
    max-width: 125px;
  }

  .album-entry-number {
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

  .album-entry img {
    min-width: 150px;
    max-width: 150px;
    min-height: 150px;
    max-height: 150px;
    transition: box-shadow 0.2s ease;
  }
}
</style>
