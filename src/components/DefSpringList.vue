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

.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: white;
  font-weight: bold;
  padding: 0px 0;
  text-align: center;
}

.calendar-weekdays, .calendar-row {
  display: grid;
  grid-template-columns: repeat(7, minmax(50px, 1fr));
  width: 100%;
}

.weekday-header {
  text-align: center;
  font-family: "IBM Plex Sans", serif;
  font-weight: 300;
  padding: 10px;
  font-size: 20px;
  background-color: white;
  color: #af0606;
}

.calendar-grid {
  display: flex;
  flex-direction: column;
  gap: 1px;
  width: 95%;
  background-color: #ffffff;
}

.calendar-row {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background-color: white;
}

.calendar-day {
  padding-top: .3rem;
  min-height: 80px;
  border: 1px solid #ddd;
  text-align: center;
  /* padding: 5px; */
  max-width: 200px;
  height: 200px;
  background-color: white;
}

.calendar-day:hover {
  /* background-color: #f1f1f1; */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.day-date {
  font-family: "IBM Plex Sans", serif;
  font-size: 20px;
  font-weight: 300;
  background-color: #ffffff;
  padding-bottom: 2rem;
}

.day-temp {
  font-size: 12px;
  color: gray;
  background-color: #ffffff;
  font-family: "IBM Plex Sans", serif;
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

.album-details-left {
  flex: 1;
  text-align: left;
  background-color: #ffffff;
}

.album-details-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
}

.selected-album-cover {
  max-width: 250px;
  height: auto;
  border: solid 3px black;
}

.selected-chart {
  max-width: 400px;
  height: auto;
  margin-top: 1.5rem;
}

.selected-album-title-and-artist {
  font-size: 25px;
  margin-top: 1px;
  background-color: #ffffff;
  font-family: "IBM Plex Sans", serif;
  font-style: italic;
  letter-spacing: .5px;
  font-weight: 400;
  border-bottom: 1px solid black;
}

.selected-album-year {
  margin-top: .1rem;
  background-color: #ffffff;
  font-family: "IBM Plex Sans", serif;
  font-size: 15px;
  font-style: italic;
}


.selected-album-genre {
  background-color: #ffffff;
  font-family: "IBM Plex Sans", serif;
  font-size: 18px;
}


.weather-type {
  background-color: #ffffff;
  padding-bottom: 3rem;
  font-family: "IBM Plex Sans", serif;
}

.date-temp-container {
  background-color: #ffffff;
}

.youtube {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  border: solid 3px black;
}

.youtube-video {
  width: 100%;
  width: 700px;
  height: 400px;
}

.selected-day-container {
  display: flex;
  gap: 16px; 
  background-color: #ffffff;
  font-family: "IBM Plex Sans", serif;
}

.day-box, .night-box {
  flex: 1;
  padding: 15px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgb(0, 0, 0);
  background-color: #ffffff;
  font-family: "IBM Plex Sans", serif;
  margin-top: 2rem;
}

.selected-temp-day {
  background-color: #ffffff;
  font-family: "IBM Plex Sans", serif;
  font-size: 40px;
  color: #af0606;
}

.selected-temp-night {
  background-color: #ffffff;
  font-family: "IBM Plex Sans", serif;
  font-size: 40px;
  color: #af0606;
}


.selected-day-date {
  margin-bottom: 8px;
  background-color: #ffffff;
  font-family: "IBM Plex Sans", serif;
}

.selected-day-write-up, .selected-night-write-up {
  font-size: 15px;
  background-color: #ffffff;
  font-family: "IBM Plex Sans", serif;
}



/* @media (max-width: 768px) {
  .calendar-grid {
    grid-template-columns: repeat(7, minmax(30px, 1fr)); 
  }

  .calendar-day {
    min-height: 50px;
    font-size: 12px; 
  }

  .album-cover {
    max-width: 60px;
  }
} */

@media (max-width: 1000px) {
  .calendar-grid {
    grid-template-columns: repeat(7, minmax(15px, 1fr)); 
  }

  .calendar-container {
  margin-left: 0%;
  margin-right: 0%;
  border: none;
  box-shadow: none;
}

.calendar-day {
  padding-top: .3rem;
  max-height: 90px;
  border: 1px solid #ddd;
  text-align: center;
  max-width: 220px;
  background-color: white;
}

.day-date {
  font-size: 11px;
  padding-bottom: .5rem;
}

.weather-icon {
  width: 20px;
  height: 20px;
  background-color: #ffffff;
}

.weather-type {
  padding-bottom: .5rem;
  font-size: 7px;
}

.day-temp {
  font-size: 9px;
  font-weight: 500;
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

.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: white;
  font-weight: bold;
  padding: 0px 0;
  text-align: center;
}

.calendar-weekdays, .calendar-row {
  display: grid;
  grid-template-columns: repeat(7, minmax(50px, 1fr));
  width: 100%;
}

.calendar-grid {
  display: flex;
  flex-direction: column;
  gap: 1px;
  width: 95%;
  background-color: #ffffff;
}

.calendar-row {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background-color: white;
}

  .weekday-header {
    font-size: 9px;
    padding: 3px;
  }

  .calendar-day {
    min-height: 40px;
    font-size: 10px;
  }

  .album-cover {
    max-width: 50px;
  }
}
</style>
