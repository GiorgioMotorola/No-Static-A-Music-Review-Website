<script>
export default {
  name: "Home",
};
</script>

<template>
  <div class="container">
    <div class="body">
      <div class="review-container">
        <div class="latest-reviews">
          Latest Reviews
        </div>
        <div class="review-line">
          <div class="most-recent-review-1">
            <a href="https://nostatic.mweatherford.rocks/29" target="_blank">
              <img src="/onclejazz.png" alt="">
            </a>

          </div>
          <div class="most-recent-review-2">
            <a href="https://nostatic.mweatherford.rocks/28" target="_blank">
              <img src="/painful.jpg" alt="">
            </a>
          </div>
          <div class="most-recent-review-3">
            <a href="https://nostatic.mweatherford.rocks/27" target="_blank">
              <img src="/sade.png" alt="">
            </a>
          </div>
          <div class="most-recent-review-4">
            <a href="https://nostatic.mweatherford.rocks/26" target="_blank">
              <img src="/crj.png" alt="">
            </a>
          </div>
        </div>
        <div class="review-line">
          <div class="most-recent-review-1">
            <a href="https://nostatic.mweatherford.rocks/25" target="_blank">
              <img src="/strait.jpg" alt="">
            </a>
          </div>
          <div class="most-recent-review-2">
            <a href="https://nostatic.mweatherford.rocks/24" target="_blank">
              <img src="/kaputt.jpg" alt="">
            </a>
          </div>
          <div class="most-recent-review-3">
            <a href="https://nostatic.mweatherford.rocks/23" target="_blank">
              <img src="/ornette.jpg" alt="">
            </a>
          </div>
          <div class="most-recent-review-4">
            <a href="https://nostatic.mweatherford.rocks/22" target="_blank">
              <img src="/powertrip.jpg" alt="">
            </a>
          </div>
        </div>
        <div class="links-section">
          <div class="genre-section">
            <div class="genre-title">
              | genres |</div>
            <div class="genres">
              <a href="https://nostatic.mweatherford.rocks/albums/genres/Rock" target="_blank">Rock</a>
              <a href="https://nostatic.mweatherford.rocks/albums/genres/Ambient" target="_blank">Ambient</a>
              <a href="https://nostatic.mweatherford.rocks/albums/genres/Country" target="_blank">Country</a>
              <a href="https://nostatic.mweatherford.rocks/albums/genres/Electronic" target="_blank">Electronic</a>
              <a href="https://nostatic.mweatherford.rocks/albums/genres/Hip%20Hop" target="_blank">Hip Hop</a>
              <a href="https://nostatic.mweatherford.rocks/albums/genres/Indie%20Rock" target="_blank">Indie Rock</a>
              <a href="https://nostatic.mweatherford.rocks/albums/genres/Jazz" target="_blank">Jazz</a>
              <a href="https://nostatic.mweatherford.rocks/albums/genres/Metal" target="_blank">Metal</a>
              <a href="https://nostatic.mweatherford.rocks/albums/genres/Pop" target="_blank">Rock</a>
              <a href="https://nostatic.mweatherford.rocks/albums/genres/" target="_blank"><span
                  style="color: #D66C56;">go to genres...</span></a>
            </div>
          </div>
          <div class="puremood-section">
            <div class="puremood-title">
              | pure moods |</div>
            <div class="puremood">
              <a href="https://nostatic.mweatherford.rocks/albums/puremoods/Airport" target="_blank">Airport</a>
              <a href="https://nostatic.mweatherford.rocks/albums/puremoods/Basement" target="_blank">Basement</a>
              <a href="https://nostatic.mweatherford.rocks/albums/puremoods/Bedroom" target="_blank">Bedroom</a>
              <a href="https://nostatic.mweatherford.rocks/albums/puremoods/Cookout" target="_blank">Cookout</a>
              <a href="https://nostatic.mweatherford.rocks/albums/puremoods/Lab" target="_blank">Lab</a>
              <a href="https://nostatic.mweatherford.rocks/albums/puremoods/Library" target="_blank">Library</a>
              <a href="https://nostatic.mweatherford.rocks/albums/puremoods/Radio" target="_blank">Radio</a>
              <a href="https://nostatic.mweatherford.rocks/albums/puremoods/Twin%20Peaks" target="_blank">Twin Peaks</a>
              <a href="https://nostatic.mweatherford.rocks/albums/puremoods/Warehouse" target="_blank">Warehouse</a>
              <a href="https://nostatic.mweatherford.rocks/albums/puremoods/Yacht" target="_blank">Yacht</a>
              <a href="https://nostatic.mweatherford.rocks/albums/puremoods/" target="_blank"><span
                  style="color: #D66C56;">go to pure moods...</span></a>
            </div>
          </div>
          <div class="seasons-section">
            <div class="seasons-title">
              | seasons |</div>
            <div class="seasons">
              <a href="https://nostatic.mweatherford.rocks/albums/seasons/Spring" target="_blank">Spring</a>
              <a href="https://nostatic.mweatherford.rocks/albums/seasons/Summer" target="_blank">Summer</a>
              <a href="https://nostatic.mweatherford.rocks/albums/seasons/Autumn" target="_blank">Autumn</a>
              <a href="https://nostatic.mweatherford.rocks/albums/seasons/Winter" target="_blank">Winter</a>
              <a href="https://nostatic.mweatherford.rocks/albums/puremoods/" target="_blank"><span
                  style="color: #D66C56;">go to seasons...</span></a>
            </div>
          </div>
          <div class="nsrc-section"></div>
        </div>
        <div class="mobile-links-section">
          <a href="https://nostatic.mweatherford.rocks/albums" target="_blank">albums &nbsp;&#8226;&nbsp;&nbsp;</a>
          <a href="https://nostatic.mweatherford.rocks/albums/genres" target="_blank">genres
            &nbsp;&#8226;&nbsp;&nbsp;</a>
          <a href="https://nostatic.mweatherford.rocks/albums/seasons" target="_blank"> seasons
            &nbsp;&#8226;&nbsp;&nbsp;</a>
          <a href="https://nostatic.mweatherford.rocks/albums/puremoods" target="_blank"> pure moods
            &nbsp;&nbsp;&#8226;</a>
          <a href="https://nostatic.mweatherford.rocks/nsrc" target="_blank"> &nbsp;&nbsp;nsrc</a>
        </div>
      </div>
    </div>
  </div>
</template>

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

.container {
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
}

.latest-reviews {
  text-align: center;
  font-size: 35px;
  color: #ECDBBA;
}

.review-line {
  display: flex;
  justify-content: start;
  gap: 4rem;
  margin-top: 2rem;
}

.most-recent-review-1 img,
.most-recent-review-2 img,
.most-recent-review-3 img,
.most-recent-review-4 img {
  margin: auto;
  display: block;
  min-width: 200px;
  max-width: 200px;
  min-height: 200px;
  max-height: 200px;
  transition: box-shadow 0.2s ease;
}

.most-recent-review-1 img:hover,
.most-recent-review-2 img:hover,
.most-recent-review-3 img:hover,
.most-recent-review-4 img:hover {
  box-shadow: rgba(223, 223, 223, 0.78) 0px 0px 0.25em, rgba(143, 150, 163, 0.471) 0px 0.25em 1em;
}

.links-section {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.genre-section,
.seasons-section,
.puremood-section {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-top: 1rem;
}

.genre-title,
.seasons-title,
.puremood-title {
  color: #ECDBBA;
  font-size: 25px;
  margin-bottom: .5rem;
  margin-top: .5rem;
  text-wrap: nowrap;
}

.genres,
.seasons,
.puremood {
  padding: .5rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.genres a,
.seasons a,
.puremood a {
  text-decoration: none;
  color: white;
  margin-right: 1.5rem;
  font-size: 13px;
  text-wrap: nowrap;
}

@media (max-width: 1400px) {
  .container {
    margin-bottom: 50px;
  }
}

@media (max-width: 1300px) {
  .body {
    gap: 0rem;
  }

  .body {
    flex-direction: column;
  }

  .most-recent-review-1 img,
  .most-recent-review-2 img,
  .most-recent-review-3 img,
  .most-recent-review-4 img {
    min-width: 200px;
    max-width: 200px;
    min-height: 200px;
    max-height: 200px;
  }

  .genre-section,
  .seasons-section,
  .puremood-section {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;

  }
}

@media (max-width: 1000px) {
  .links-section {
    margin-top: 2rem;
    align-items: start;
  }

  .genre-title,
  .seasons-title,
  .puremood-title {
    font-size: 15px;
  }

  .genres a,
  .seasons a,
  .puremood a {
    text-decoration: none;
    color: white;
    margin-right: 1.5rem;
    font-size: 11px;
    text-wrap: nowrap;
  }
}

@media (max-width: 530px) {
  .container {
    margin-bottom: 50px;
  }

  .mobile-links-section {
    display: flex;
    flex-direction: row;
    font-size: 14px;
    justify-content: center;
    margin-top: 3rem;
  }

  .mobile-links-section a {
    text-decoration: none;
    color: #ECDBBA;

  }

  .latest-reviews {
    text-align: center;
    font-size: 20px;
    color: white;
  }

  .body {
    gap: .1rem;
  }

  .review-container {
    margin-right: 0rem;
  }

  .most-recent-review-1 img,
  .most-recent-review-2 img,
  .most-recent-review-3 img,
  .most-recent-review-4 img {
    transition: none;
    min-width: 150px;
    max-width: 150px;
    min-height: 150px;
    max-height: 150px;
  }

  .most-recent-review-1 img:hover,
  .most-recent-review-2 img:hover,
  .most-recent-review-3 img:hover,
  .most-recent-review-4 img:hover {
    box-shadow: none;
  }

  .review-line {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .most-recent-review-1,
  .most-recent-review-2 {
    flex-basis: calc(34% - 0rem);
    margin-bottom: 0rem;
  }

  .links-section {
    margin-top: none;
    display: none;
    flex-direction: none;
    align-items: none;
  }

  .genre-section,
  .seasons-section,
  .puremood-section {
    display: none;
    flex-direction: none;
    justify-content: none;
    align-items: none;
    margin-top: none;
  }

  .genre-title,
  .seasons-title,
  .puremood-title {
    color: none;
    font-size: none;
    margin-bottom: none;
    margin-top: none;
    text-wrap: none;
  }

  .genres,
  .seasons,
  .puremood {
    padding: none;
    padding-left: none;
    padding-right: none;
  }

  .genres a,
  .seasons a,
  .puremood a {
    text-decoration: none;
    color: none;
    margin-right: none;
    font-size: none;
    text-wrap: none;
  }

}
</style>
