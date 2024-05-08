<script>
export default {
  name: "Home",
};
</script>

<template>
  <div class="container">
    <div class="body">
      <!-- <div class="cta-container">
        <div class="cta-links">
          <router-link to="/albums">&#x260A; Albums</router-link>
          <router-link to="/albums/genres">&#x260A; Genres</router-link>
          <router-link to="/albums/seasons">&#x260A; Seasons</router-link>
          <router-link to="/albums/puremoods">&#x260A; Pure Moods</router-link>
          <router-link to="/nsrc">&#x260A; No Static Record Catalogue</router-link>
        </div>
      </div> -->
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
        <div class="review-line">
          <div class="most-recent-review-1">
            <a href="https://nostatic.mweatherford.rocks/21" target="_blank">
              <img src="/aja.jpg" alt="">
            </a>
          </div>
          <div class="most-recent-review-2">
            <a href="https://nostatic.mweatherford.rocks/20" target="_blank">
              <img src="/tribemm.jpg" alt="">
            </a>
          </div>
          <div class="most-recent-review-3">
            <a href="https://nostatic.mweatherford.rocks/19" target="_blank">
              <img src="/bss.jpg" alt="">
            </a>
          </div>
          <div class="most-recent-review-4">
            <a href="https://nostatic.mweatherford.rocks/18" target="_blank">
              <img src="/timhecker.jpg" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
}

.container {
  margin-bottom: 200px;
}

.review-container {
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin-top: 2rem;
  margin-left: 27%;
}

.latest-reviews {
  text-align: center;
  font-size: 35px;
  color: #bababa;
}

.review-line {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.most-recent-review-1,
.most-recent-review-2,
.most-recent-review-3,
.most-recent-review-4 {
  flex: 1;
  display: flex;
  flex-direction: column;
  color: white;
  padding: .5%;
}

.most-recent-review-1 img,
.most-recent-review-2 img,
.most-recent-review-3 img,
.most-recent-review-4 img {
  margin: auto;
  display: block;
  margin-top: 2vh;
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

.body {
  display: flex;
  height: 100%;
  height: 75vh;
  margin-left: 0%;
  margin-right: 0%;
  gap: 20rem;
}

.cta-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.cta-links {
  display: flex;
  flex-direction: column;
  margin-top: 0rem;
  font-size: 26px;
  margin-left: 150px;
}


.cta-links a:hover {
  text-decoration: underline;
  text-decoration-color: white;
}

.cta-links a {
  text-decoration: none;
  color: antiquewhite;
  margin-right: 1px;
  text-align: center;
}

@media (max-width: 1400px) {
  .cta-links {
    display: flex;
    flex-direction: column;
    margin-top: 0rem;
    font-size: 20px;
  }

  .container {
    margin-bottom: 310px;
  }

  .review-container {
    margin-left: 15%;
  }
}

@media (max-width: 1300px) {
  .body {
    gap: 0rem;
  }

  .review-container {
    margin-left: 0%;
  }

  .container {
    margin-bottom: 550px;
  }

  .body {
    flex-direction: column;
  }

  .most-recent-review-1 img,
  .most-recent-review-2 img,
  .most-recent-review-3 img,
  .most-recent-review-4 img {
    margin-top: 5vh;
    min-width: 200px;
    max-width: 200px;
    min-height: 200px;
    max-height: 200px;
  }

  .cta-container {
    padding: 3rem;
  }

}


@media (max-width: 700px) {

  .container {
    margin-bottom: 2900px
  }

  .review-line {
    flex-direction: column;
  }

  .latest-reviews {
    text-align: center;
    font-size: 20px;
    color: white;
  }

  .most-recent-review-1,
  .most-recent-review-2,
  .most-recent-review-3,
  .most-recent-review-4 {
    width: 99%;
  }

  .cta-container {
    padding: 1rem;
  }

  .cta {
    font-size: 22px;
    padding: 0px;
  }

  .cta-second {
    font-size: 14px;
    margin-top: 10px;
  }

  .cta-links {
    font-size: 16px;
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
  }

  .most-recent-review-1 img:hover,
  .most-recent-review-2 img:hover,
  .most-recent-review-3 img:hover,
  .most-recent-review-4 img:hover {
    box-shadow: none;
  }
}
</style>
