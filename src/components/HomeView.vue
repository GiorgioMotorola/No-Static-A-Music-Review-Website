<template>
  <div class="container">
    <div class="body">
      <div class="review-container">
        <div class="latest-reviews">
          latest reviews
        </div>
        <div class="review-line">
          <div v-for="(album, index) in mostRecentAlbums" :key="index" class="most-recent-review">
            <a :href="album.id">
              <img :src="album.image" alt="Album cover">
            </a>
          </div>
        </div>
        <div class="border"></div>
        <div class="links-section">
          <div class="album-list">
  <div class="genre-title">
    + albums +&nbsp;&nbsp;
    <div class="toggle-button">
    <button @click="toggleOrder">
      {{ orderIcon }}
    </button>
  </div>
  </div>
  <div v-for="album in sortedAlbums" :key="album.id" class="album-list-item">
    <router-link :to="{ name: 'AlbumDetail', params: { id: album.id } }">
      <div class="album-entry">
        #{{ album.entryNumber }}:&nbsp; <span class="artist">{{ album.artist }}&nbsp;</span> || {{ album.album }}
      </div>
    </router-link>
  </div>
</div>
          <div class="right-section">
            <div class="genre-section">
              <div class="genre-title">+ genres +&nbsp;&nbsp;</div>
              <div class="genres">
                <a href="https://nostatic.mweatherford.rocks/albums/genres/Rock">Rock&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="https://nostatic.mweatherford.rocks/albums/genres/Ambient">Ambient&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="https://nostatic.mweatherford.rocks/albums/genres/Country">Country&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="https://nostatic.mweatherford.rocks/albums/genres/Electronic">Electronic&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="https://nostatic.mweatherford.rocks/albums/genres/Hip%20Hop">Hip Hop&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="https://nostatic.mweatherford.rocks/albums/genres/Indie%20Rock">Indie Rock&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="https://nostatic.mweatherford.rocks/albums/genres/Jazz">Jazz&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="https://nostatic.mweatherford.rocks/albums/genres/Metal">Metal&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="https://nostatic.mweatherford.rocks/albums/genres/Pop">Rock&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <div class="go-to-link">
                  <a href="https://nostatic.mweatherford.rocks/albums/genres/">
                    <span style="color: #D66C56;">go to genres</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="seasons-section">
              <div class="seasons-title">+ seasons +&nbsp;&nbsp;</div>
              <div class="seasons">
                <a href="https://nostatic.mweatherford.rocks/albums/seasons/Spring">Spring&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="https://nostatic.mweatherford.rocks/albums/seasons/Summer">Summer&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="https://nostatic.mweatherford.rocks/albums/seasons/Autumn">Autumn&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="https://nostatic.mweatherford.rocks/albums/seasons/Winter">Winter&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <div class="go-to-link">
                  <a href="https://nostatic.mweatherford.rocks/albums/seasons/">
                    <span style="color: #D66C56;">go to seasons</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="puremood-section">
              <div class="puremood-title">+ pure moods +&nbsp;&nbsp;</div>
              <div class="puremood">
                <a href="https://nostatic.mweatherford.rocks/albums/puremoods/Airport">Airport&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="https://nostatic.mweatherford.rocks/albums/puremoods/Basement">Basement&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="https://nostatic.mweatherford.rocks/albums/puremoods/Bedroom">Bedroom&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="https://nostatic.mweatherford.rocks/albums/puremoods/Cookout">Cookout&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="https://nostatic.mweatherford.rocks/albums/puremoods/Lab">Lab&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="https://nostatic.mweatherford.rocks/albums/puremoods/Library">Library&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="https://nostatic.mweatherford.rocks/albums/puremoods/Radio">Radio&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="https://nostatic.mweatherford.rocks/albums/puremoods/Twin%20Peaks">Twin Peaks&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="https://nostatic.mweatherford.rocks/albums/puremoods/Warehouse">Warehouse&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="https://nostatic.mweatherford.rocks/albums/puremoods/Yacht">Yacht&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <div class="go-to-link">
                  <a href="https://nostatic.mweatherford.rocks/albums/puremoods/">
                    <span style="color: #D66C56;">go to pure moods</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="nsrc-section"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"; 

export default {
  name: "Home",
  data() {
    return {
      albums: [],
      isReversed: false,
    };
  },
  mounted() {
    this.fetchAlbums();
  },
  methods: {
    fetchAlbums() {
      axios.get("albums.json").then((response) => {
        this.albums = response.data;
      }).catch(error => {
        console.error("Error fetching albums:", error);
      });
    },
    toggleOrder() {
      this.isReversed = !this.isReversed;
    }
  },
  computed: {
    sortedAlbums() {
      return this.isReversed ? [...this.albums].reverse() : this.albums;
    }, 
    orderIcon() {
      return this.isReversed ? '↓' : '↑';
    },
    mostRecentAlbums() {
      return [...this.albums].sort((a, b) => b.id - a.id).slice(0, 8);
    }
  },
};
</script>


<style scoped>
* {
  margin: 0;
}

.mobile-links-section {
  display: none;
}

.body {
  display: flex;
  flex-direction: column;
  margin-left: 0%;
  margin-right: 0%;
}

.review-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin-top: 2rem;
}

.latest-reviews {
  text-align: start;
  font-size: 25px;
  color: rgb(43,46,40);
  margin-left: 1.25%;
  padding-bottom: 2%;
}

.review-line {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.most-recent-review img {
  margin: auto;
  display: block;
  min-width: 150px;
  max-width: 150px;
  min-height: 150px;
  max-height: 150px;
  transition: box-shadow 0.2s ease;
  border: 1px double;
  border-color: #1E1E1E;
  border:1px double;
}

.most-recent-review img:hover {
  box-shadow: 0 2px 8px rgb(43,46,40);
}

.border {
  border-bottom: .5px solid;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 100px;
}

.links-section {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin: 1%;
}

.album-list {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-right: 30%;
}

.album-list a {
  text-decoration: none;
}

.album-list-item {
  border-bottom: 1px solid rgb(43,46,40);
}

.album-list-item:last-child {
  border-bottom: none;
}

.album-entry {
  display: flex;
  align-items: start;
  padding: 1%;
  font-size: 20px;
  color: #1E1E1E;
}

.album-entry:hover {
  background-color:#bbc6ca;
}

.album-entry:hover .artist {
    background-color: inherit; 
    border-bottom: 1.5px solid black;
}

.artist {
  color: #41799e; 
  font-weight: 400;   
  /* background-color: rgb(31, 29, 29);   */
  padding-left: 1.25%;
}

.album-details {
  color: rgb(43,46,40);
  font-size: 20px;
}

.artist-name {
  font-size: 25px;
  color: rgb(43,46,40);
}


.album-entry-number {
  font-size: 0.8rem;
  color: #888888;
  margin-left: auto;
  text-decoration: none;
}

.right-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.genre-section,
.seasons-section,
.puremood-section {
  display: flex;
  flex-direction: column;
}

.genre-title,
.seasons-title,
.puremood-title {
  color: rgb(43,46,40);
  font-size: 50px;
  margin-bottom: .5rem;
  margin-top: .5rem;
  text-wrap: nowrap;
  margin: 10px;
}

.genres a,
.seasons a,
.puremood a {
  text-decoration: none;
  color: rgb(43,46,40);
  font-size: 25px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid;
  border-color: rgb(0, 0, 0);
  padding: 1%;
}

.genres a:hover,
.seasons a:hover,
.puremood a:hover  {
  background-color:#bfc5ce;
}

.go-to-link a:hover {
  border-bottom: 1.5px solid #bfc5ce;
}

.toggle-button button {
  font-size: 15px;
}


@media only screen and (max-width: 1600px) {

  .album-entry {
  font-size: 15px;
}

.album-list {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-right: 15%;
}

.genres a,
.seasons a,
.puremood a {
  text-decoration: none;
  color: rgb(43,46,40);
  font-size: 15px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid;
  border-color: rgb(0, 0, 0);
  padding: 1%;
}
}

@media only screen and (max-width: 1400px) {

  .review-line {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.most-recent-review img {
  margin: auto;
  display: block;
  min-width: 125px;
  max-width: 125px;
  min-height: 125px;
  max-height: 125px;
  transition: box-shadow 0.2s ease;
  border: 1px double;
  border-color: #1E1E1E;
  border:1px double;
}

}

@media only screen and (max-width: 1100px) {
  .links-section {
    flex-direction: column;
  }

  .album-list {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .right-section {
    margin-top: 1rem;
  }
}

@media only screen and (max-width: 1000px) {
  .review-line {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .most-recent-review {
    flex-basis: calc(25% - 1rem);
  }

  .most-recent-review {
    min-width: 150px;
    max-width: 150px;
    min-height: 150px;
    max-height: 150px;
  }
}

@media only screen and (max-width: 600px) {

  .album-list {
    margin-right: 5%;
  }

  .album-entry {
  font-size: 11.5px;
  padding: 2%;
}

.genres a,
.seasons a,
.puremood a {
  font-size: 11.5px;
  padding: 2%;
}

.genre-title,
.seasons-title,
.puremood-title {
  font-size: 25px;
}
}
</style>
