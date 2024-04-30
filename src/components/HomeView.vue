<script>
export default {
  name: "Home",
};
</script>

<template>
  <div class="container">
    <div class="body">
      <div class="cta-container">
        <div class="cta">The most essentional albums of all time, according to one guy. </div>
        <div class="cta-second">
          New albums and reviews <span style="color: grey;">(hopefully)</span> added frequenly.
        </div>
      </div>
      <div class="review-container">
        <div class="review-line">
          <div class="most-recent-review-1">
            <a href="https://nostatic.mweatherford.rocks/20" target="_blank">
              <img src="../../public/tribemm.jpg" alt="">
            </a>
            <div class="review-preview"> </div>
          </div>
          <div class="most-recent-review-2">
            <a href="https://nostatic.mweatherford.rocks/19" target="_blank">
              <img src="../../public/bss.jpg" alt="">
            </a>
            <div class="review-preview"> </div>
          </div>
          <div class="most-recent-review-3">
            <a href="https://nostatic.mweatherford.rocks/18" target="_blank">
              <img src="../../public/timhecker.jpg" alt="">
            </a>
            <div class="review-preview"> </div>
          </div>
          <div class="most-recent-review-4">
            <a href="https://nostatic.mweatherford.rocks/17" target="_blank">
              <img src="../../public/nightdrive.jpg" alt="">
            </a>
            <div class="review-preview"> </div>
          </div>
        </div>
        <div class="review-line">
          <div class="most-recent-review-1">
            <a href="https://nostatic.mweatherford.rocks/1" target="_blank">
              <img src="../../public/fmtusk.png" alt="">
            </a>
            <div class="review-preview"> </div>
          </div>
          <div class="most-recent-review-2">
            <a href="https://nostatic.mweatherford.rocks/5" target="_blank">
              <img src="../../public/huercos.jpg" alt="">
            </a>
            <div class="review-preview"> </div>
          </div>
          <div class="most-recent-review-3">
            <a href="https://nostatic.mweatherford.rocks/7" target="_blank">
              <img src="../../public/marqueemoon.jpg" alt="">
            </a>
            <div class="review-preview"> </div>
          </div>
          <div class="most-recent-review-4">
            <a href="https://nostatic.mweatherford.rocks/10" target="_blank">
              <img src="../../public/fugazi.jpg" alt="">
            </a>
            <div class="review-preview"> </div>
          </div>
        </div>
        <div class="review-line">
          <div class="most-recent-review-1">
            <a href="https://nostatic.mweatherford.rocks/11" target="_blank">
              <img src="../../public/americanwater.jpg" alt="">
            </a>
            <div class="review-preview"> </div>
          </div>
          <div class="most-recent-review-2">
            <a href="https://nostatic.mweatherford.rocks/14" target="_blank">
              <img src="../../public/Aquemini.jpg" alt="">
            </a>
            <div class="review-preview"> </div>
          </div>
          <div class="most-recent-review-3">
            <a href="https://nostatic.mweatherford.rocks/9" target="_blank">
              <img src="../../public/beingthere.png" alt="">
            </a>
            <div class="review-preview"> </div>
          </div>
          <div class="most-recent-review-4">
            <a href="https://nostatic.mweatherford.rocks/3" target="_blank">
              <img src="../../public/bigstarradio.jpg" alt="">
            </a>
            <div class="review-preview"> </div>
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

.review-container {
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin-top: 2rem;
  margin-right: 2.1rem;
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
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px;
}

.body {
  display: flex;
  height: 100%;
  height: 78.8vh;
  margin-left: 0%;
  margin-right: 0%;
  gap: 5rem;
}

.cta-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
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

@media (max-width: 1300px) {
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
}

@media (max-width: 700px) {
  .review-line {
    flex-direction: column;
  }

  .most-recent-review-1,
  .most-recent-review-2,
  .most-recent-review-3,
  .most-recent-review-4 {
    width: 100%;
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
  }

  .body {
    gap: .1rem;
  }

  .review-container {

    margin-right: 0rem;
  }
}
</style>
