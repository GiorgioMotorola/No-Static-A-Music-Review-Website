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
              <div class="album-entry-number">&#x2116; {{ album.entryNumber }}</div>
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
  text-align: start;
}

.album-details {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  font-size: 12px;
  color: white;
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

.album-entry-number {
  color: rgb(190, 190, 190);
  font-size: 11px;
}

.album-entry img {
  min-width: 200px;
  max-width: 200px;
  min-height: 200px;
  max-height: 200px;
  transition: box-shadow 0.2s ease;
}

.album-entry img:hover {
  box-shadow: rgba(223, 223, 223, 0.78) 0px 0px 0.25em, rgba(143, 150, 163, 0.471) 0px 0.25em 1em;
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
