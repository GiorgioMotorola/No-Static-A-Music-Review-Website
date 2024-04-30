<script>
export default {
  name: "Home",
};
</script>

<template>
  <div class="container">
    <div class="body">
      <div class="most-recent-review-1">
        <a href="http://localhost:5173/20" target="_blank">
          <img src="../../public/tribemm.jpg" alt="">
        </a>
        <div class="review-preview"> </div>
      </div>
      <div class="most-recent-review-2">
        <a href="http://localhost:5173/19" target="_blank">
          <img src="../../public/bss.jpg" alt="">
        </a>
        <div class="review-preview"> </div>
      </div>
      <div class="most-recent-review-3">
        <a href="http://localhost:5173/18" target="_blank">
          <img src="../../public/timhecker.jpg" alt="">
        </a>
        <div class="review-preview"> </div>
      </div>
      <div class="most-recent-review-4">
        <a href="http://localhost:5173/17" target="_blank">
          <img src="../../public/nightdrive.jpg" alt="">
        </a>
        <div class="review-preview"> </div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
}

.most-recent-review-1,
.most-recent-review-2,
.most-recent-review-3,
.most-recent-review-4 {
  display: flex;
  flex-direction: column;
  color: white;
  padding: 2%;
}

.most-recent-review-1 img,
.most-recent-review-2 img,
.most-recent-review-3 img,
.most-recent-review-4 img {
  margin: auto;
  display: block;
  margin-top: 15vh;
  width: 350px;
}

.body {
  display: flex;
  height: 100%;
  height: 78.8vh;
  margin-left: 3%;
  margin-right: 3%;
  gap: 3px;
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
    width: 225px;
  }
}
</style>
