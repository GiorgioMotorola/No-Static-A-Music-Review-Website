<script>
export default {
  name: "Home",
};
</script>

<template>
  <div class="container">
    <div class="body">
      <div class="cta-container">
        <div class="cta">The most essential albums of all time, according to one guy. </div>
        <div class="cta-second">
          New albums and reviews <span style="color: grey;">(hopefully)</span> added frequenly.
        </div>
        <div class="cta-links">
          <router-link to="/albums">&#x260A; Search Albums</router-link>
          <router-link to="/albums/genres">&#x260A; Search Genres</router-link>
          <router-link to="/albums/seasons">&#x260A; Search Seasons</router-link>
          <router-link to="/albums/puremoods">&#x260A; Search Pure Moods</router-link>
        </div>
      </div>
      <div class="review-container">
        <div class="latest-reviews">
          Latest Reviews
        </div>
        <div class="review-line">
          <div class="most-recent-review-1">
            <a href="https://nostatic.mweatherford.rocks/20" target="_blank">
              <img src="../../public/tribemm.jpg" alt="">
            </a>

          </div>
          <div class="most-recent-review-2">
            <a href="https://nostatic.mweatherford.rocks/19" target="_blank">
              <img src="../../public/bss.jpg" alt="">
            </a>
          </div>
          <div class="most-recent-review-3">
            <a href="https://nostatic.mweatherford.rocks/18" target="_blank">
              <img src="../../public/timhecker.jpg" alt="">
            </a>
          </div>
          <div class="most-recent-review-4">
            <a href="https://nostatic.mweatherford.rocks/17" target="_blank">
              <img src="../../public/nightdrive.jpg" alt="">
            </a>
          </div>
        </div>
        <div class="review-line">
          <div class="most-recent-review-1">
            <a href="https://nostatic.mweatherford.rocks/1" target="_blank">
              <img src="../../public/fmtusk.png" alt="">
            </a>
          </div>
          <div class="most-recent-review-2">
            <a href="https://nostatic.mweatherford.rocks/5" target="_blank">
              <img src="../../public/huercos.jpg" alt="">
            </a>
          </div>
          <div class="most-recent-review-3">
            <a href="https://nostatic.mweatherford.rocks/7" target="_blank">
              <img src="../../public/marqueemoon.jpg" alt="">
            </a>
          </div>
          <div class="most-recent-review-4">
            <a href="https://nostatic.mweatherford.rocks/10" target="_blank">
              <img src="../../public/fugazi.jpg" alt="">
            </a>
          </div>
        </div>
        <div class="review-line">
          <div class="most-recent-review-1">
            <a href="https://nostatic.mweatherford.rocks/11" target="_blank">
              <img src="../../public/americanwater.jpg" alt="">
            </a>
          </div>
          <div class="most-recent-review-2">
            <a href="https://nostatic.mweatherford.rocks/14" target="_blank">
              <img src="../../public/Aquemini.jpg" alt="">
            </a>
          </div>
          <div class="most-recent-review-3">
            <a href="https://nostatic.mweatherford.rocks/9" target="_blank">
              <img src="../../public/beingthere.png" alt="">
            </a>
          </div>
          <div class="most-recent-review-4">
            <a href="https://nostatic.mweatherford.rocks/3" target="_blank">
              <img src="../../public/bigstarradio.jpg" alt="">
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
  margin-bottom: 120px;
}

.review-container {
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin-top: 2rem;
  margin-right: 2.1rem;
}

.latest-reviews {
  text-align: center;
  font-size: 45px;
  color: #D66C56;
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
  gap: 5rem;
}

.cta-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
}

.cta {
  color: white;
  text-align: center;
  font-size: 22px;
  padding: 10px;
}

.cta-second {
  color: aliceblue;
  font-size: 14px;
  text-align: center;
}

.cta-links {
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  font-size: 26px;
}


.cta-links a:hover {
  text-decoration: underline;
  text-decoration-color: white;
}

.cta-links a {
  text-decoration: none;
  color: antiquewhite;
  margin-right: 10px;
  text-align: center;
}

@media (max-width: 1400px) {
  .cta-links {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    font-size: 20px;
  }

  .container {
    margin-bottom: 300px
  }
}

@media (max-width: 1300px) {
  .body {
    gap: 0rem;
  }

  .container {
    margin-bottom: 500px
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
    margin-bottom: 2850px
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
    font-size: 18px;
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
