<template>
  <div class="calendar-container">
    <div class="calendar-header">
      <button @click="prevMonth">< prev</button>
      <div class="header-current-month">{{ months[currentMonthIndex] }}</div>
      <button @click="nextMonth">next ></button>
    </div>

    <div class="calendar-grid">
      <div class="calendar-weekdays">
        <div v-for="day in weekdays" :key="day" class="weekday-header">{{ day }}</div>
      </div>
      
      <template v-for="(week, weekIndex) in weeks" :key="weekIndex">
        <div class="calendar-row">
          <div
            v-for="(day, dayIndex) in week"
            :key="dayIndex"
            class="calendar-day"
            @click="selectAlbum(day, weekIndex)"
          >
            <template v-if="day">
              <div class="date-temp-container">
                <div class="day-date">{{ day.date }}</div>
                <img v-if="day?.weathericon" :src="day.weathericon" alt="Weather Icon" class="weather-icon"/>
                <div class="weather-type">{{ day.weathertype }}</div>
                <div class="day-temp">{{ day.high }}° &nbsp;|&nbsp; {{ day.low }}°</div>
              </div>
            </template>
          </div>
        </div>
        
        <div v-if="selectedWeekIndex === weekIndex" class="album-details-row">
          <div class="album-details-left">
            <div class="selected-album-title-and-artist">
              {{ selectedAlbum?.title }} by {{ selectedAlbum?.artist }}
            </div>
        <div class="selected-day-container">
            <div class="day-box">
              <div class="selected-day-date">{{ selectedAlbum?.date }} | Day</div>
              <div class="selected-temp-day">{{ selectedAlbum?.high }}°</div>
              <div class="selected-day-write-up">{{ selectedAlbum?.daywriteup }}</div>
        </div>
        <div class="night-box">
          <div class="selected-day-date">{{ selectedAlbum?.date }} | Night</div>
          <div class="selected-temp-night">{{ selectedAlbum?.low }}°</div>
          <div class="selected-night-write-up">{{ selectedAlbum?.nightwriteup }}</div>
        </div>
      </div>
            <div v-if="youtubeEmbedUrl" class="youtube">
              <iframe
                :src="youtubeEmbedUrl"
                frameborder="0"
                allowfullscreen
                class="youtube-video"
              ></iframe>
            </div>
          </div>
          <div class="album-details-right">
            <img v-if="selectedAlbum?.cover" :src="selectedAlbum.cover" alt="Album cover" class="selected-album-cover"/>
            <div class="selected-album-year">Released {{ selectedAlbum?.year }}</div>
            <div class="selected-album-genre">{{ selectedAlbum?.genre }}</div>
            <img v-if="selectedAlbum?.chart" :src="selectedAlbum.chart" alt="Album cover" class="selected-chart"/>
          </div>
          <div v-if="youtubeEmbedUrl" class="youtube-mobile">
              <iframe
                :src="youtubeEmbedUrl"
                frameborder="0"
                allowfullscreen
                class="youtube-video-mobile"
              ></iframe>
            </div>
        </div>
      </template>
    </div>
  </div>
</template>


<script setup>
import { ref, computed, onMounted } from 'vue';

const months = ['April', 'May', 'June'];
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentMonthIndex = ref(0);
const selectedAlbum = ref(null);
const selectedWeekIndex = ref(null);
const days = ref({ April: [], May: [], June: [] });

const monthStartDays = {
  'April': new Date(2025, 3, 1).getDay(),
  'May': new Date(2025, 4, 1).getDay(),
  'June': new Date(2025, 5, 1).getDay(),
};

onMounted(async () => {
  try {
    const response = await fetch("/springalbums/springlist.json");
    const jsonData = await response.json();
    console.log('Fetched data:', jsonData); 
    days.value = processCalendarData(jsonData, monthStartDays);
  } catch (error) {
    console.error("Error loading JSON data:", error);
  }
});

const processCalendarData = (data, monthStartDays) => {
  const months = { April: [], May: [], June: [] };
  
  data.forEach(entry => {
    const month = entry.date.split(" ")[0]; 
    if (months[month]) {
      months[month].push({
        date: entry.date,
        high: Number(entry.high),
        low: Number(entry.low),
        weathericon: entry.weathericon,
        album: {
          title: entry.title,
          artist: entry.artist,
          year: Number(entry.year),
          cover: entry.cover || "",
          chart: entry.chart || "",
          daywriteup: entry.daywriteup || "",
          nightwriteup: entry.nightwriteup || "",
          youtube: entry.youtube,
          weathertype: entry.weathertype,
          genre: entry.genre || "",
          date: entry.date,
          high: Number(entry.high),
          low: Number(entry.low),
        },
        weathertype: entry.weathertype,
        selected: entry.selected === "true"
      });
    }
  });

  console.log('Processed calendar data:', months);

  return {
    April: new Array(monthStartDays['April']).fill(null).concat(months.April),
    May: new Array(monthStartDays['May']).fill(null).concat(months.May),
    June: new Array(monthStartDays['June']).fill(null).concat(months.June)
  };
};

const weeks = computed(() => {
  const monthDays = days.value[months[currentMonthIndex.value]] || [];
  const weeksArr = [];
  for (let i = 0; i < monthDays.length; i += 7) {
    weeksArr.push(monthDays.slice(i, i + 7));
  }
  return weeksArr;
});

const selectAlbum = (day, weekIndex) => {
  if (!day) return;
  selectedAlbum.value = day.album;
  selectedWeekIndex.value = weekIndex;
};

const prevMonth = () => {
  if (currentMonthIndex.value > 0) {
    currentMonthIndex.value--;
    selectedAlbum.value = null;
    selectedWeekIndex.value = null;
  }
};

const nextMonth = () => {
  if (currentMonthIndex.value < months.length - 1) {
    currentMonthIndex.value++;
    selectedAlbum.value = null;
    selectedWeekIndex.value = null;
  }
};

const youtubeEmbedUrl = computed(() => {
  if (!selectedAlbum.value?.youtube) return "";
  const videoIdMatch = selectedAlbum.value.youtube.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
  const videoId = videoIdMatch ? videoIdMatch[1] : null;
  return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
});

</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

.header-current-month {
  background-color: #ffffff;
  color: #6b6a6a;
  font-family: "IBM Plex Sans", serif;
  font-weight: 400;
  font-size: 25px;
  letter-spacing: .5px;
  padding-left: 3rem;
  padding-right: 3rem;
  text-transform: uppercase;
}

button {
  background-color: #ffffff;
  font-family: "IBM Plex Sans", serif;
  font-weight: 250;
  font-size: 15px;
  border: transparent;
  border-bottom: 1px solid black;
  cursor: pointer;
  color: #1B6CEB;
}

.calendar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
  margin-left: 10%;
  margin-right: 10%;
  border: 1px solid black;
  margin-top: 2%;
  border-radius: .4%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.calendar-header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  background-color: white;
}

.calendar-weekdays, .calendar-row {
  display: grid;
  grid-template-columns: repeat(7, minmax(50px, 1fr));
  width: 100%;
  background-color: #ffffff;
}

.weekday-header {
  text-align: center;
  font-family: "IBM Plex Sans", serif;
  font-weight: 300;
  padding: 10px;
  font-size: 20px;
  color: #af0606;
  background-color: #ffffff;
}

.calendar-grid {
  display: flex;
  flex-direction: column;
  gap: 1px;
  width: 95%;
  background-color: #ffffff;
}

.calendar-day {
  padding-top: .3rem;
  min-height: 80px;
  border: 1px solid #ddd;
  text-align: center;
  max-width: 200px;
  height: 200px;
  background-color: white;
  cursor: pointer;
}

.calendar-day:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.day-date {
  font-family: "IBM Plex Sans", serif;
  font-size: 20px;
  font-weight: 300;
  padding-bottom: 2rem;
  background-color: #ffffff;
}

.day-temp {
  font-size: 12px;
  color: gray;
  font-family: "IBM Plex Sans", serif;
  background-color: #ffffff;
}

.weather-icon {
  width: 50px;
  height: 50px;
  background-color: #ffffff;
}

.album-details-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  gap: 20px;
  background-color: #ffffff;
}

.album-details-left, .album-details-right {
  flex: 1;
  background-color: #ffffff;
}

.album-details-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
}

.selected-album-cover {
  max-width: 250px;
  height: auto;
  border: solid 3px black;
  background-color: #ffffff;
}

.selected-chart {
  max-width: 400px;
  height: auto;
  margin-top: 1.5rem;
  background-color: #ffffff;
}

.selected-album-title-and-artist {
  font-size: 25px;
  margin-bottom: 0rem;
  font-family: "IBM Plex Sans", serif;
  font-style: italic;
  letter-spacing: .5px;
  font-weight: 400;
  border-bottom: 1px solid black;
  background-color: #ffffff;
  text-align: start;
}

.selected-album-year, .selected-album-genre {
  font-family: "IBM Plex Sans", serif;
  font-style: italic;
  background-color: #ffffff;
}

.selected-album-year {
  font-size: 15px;
  background-color: #ffffff;
}

.selected-album-genre {
  font-size: 18px;
  background-color: #ffffff;
}

.weather-type, .date-temp-container {
  background-color: #ffffff;
}

.youtube {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  border: solid 3px black;
  background-color: #ffffff;
}

.youtube-video {
  width: 700px;
  height: 400px;
}

.selected-day-container {
  display: flex;
  gap: 16px;
  font-family: "IBM Plex Sans", serif;
  background-color: #ffffff;
}

.day-box, .night-box {
  flex: 1;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid black;
  margin-top: 2rem;
  background-color: #ffffff;
}

.selected-temp-day, .selected-temp-night {
  font-size: 40px;
  color: #af0606;
  background-color: #ffffff;
  text-align: start;
}

.selected-day-date, .selected-day-write-up, .selected-night-write-up {
  font-family: "IBM Plex Sans", serif;
  background-color: #ffffff;
}

.selected-day-write-up, .selected-night-write-up {
  text-align: start;
}

.youtube-mobile, .youtube-video-mobile {
  display: none;
}

@media (max-width: 1500px){
  .day-box, .night-box {
  padding: 8px;
  margin-top: .5rem;
}

.selected-temp-day {
  font-size: 22px;
}

.selected-temp-night {
  font-size: 22px;
}

.selected-day-write-up, .selected-night-write-up {
  font-size: 13px;
}

.youtube-video {
  width: 100%;
  width: 475px;
  height: 250px;
}

.selected-chart {
  max-width: 350px;
  margin-top: 1.5rem;
}

.selected-album-cover {
  max-width: 200px;
}

.youtube-mobile, .youtube-video-mobile {
  display: none;
}

}


@media (max-width: 1140px) {
  .calendar-container {
    margin-left: 0%;
    margin-right: 0%;
    border: none;
    box-shadow: none;
  }
  .calendar-day {
    max-height: 90px;
    max-width: 220px;
  }
  .header-current-month {
    font-size: 17px;
  }
  .day-date {
    font-size: 11px;
    padding-bottom: .5rem;
  }
  .weather-icon {
    width: 20px;
    height: 20px;
  }
  .weather-type {
    padding-bottom: .5rem;
    font-size: 7px;
  }
  .day-temp {
    font-size: 9px;
  }
  .weekday-header {
    font-size: 9px;
    padding: 3px;
  }
  .selected-album-title-and-artist {
    font-size: 15px;
  }
  .album-details-row {
    flex-direction: column;
    padding-top: .5rem;
    padding-bottom: .5rem;
  }
  .selected-day-container {
    flex-direction: column;
    gap: 11px;
    text-align: start;
  }
  .selected-temp-day, .selected-temp-night {
    font-size: 25px;
  }
  .selected-day-write-up, .selected-night-write-up {
    font-size: 12px;
  }

  .youtube-mobile, .youtube-video-mobile {
    display: flex;
    width: 375px;
    height: 200px;
  }

  .youtube {
    display: none;
  }

  .selected-album-cover {
  max-width: 250px;
}

.day-box, .night-box {
  border: none;
}
}
</style>

