<template>
  <div class="album-list">
    <div class="main-title">TOP 50 ALBUMS OF 2024</div>
    <div>
      <div v-for="(album, index) in reversedAlbums" :key="index" class="album-entry">
        <div class="rank-title-artist">
        <div class="ranking">{{ album.rank }}</div>
      <div class="title-artist">
        <div class="title">{{ album.title }}</div>
        <div class="artist">{{ album.artist }}</div>
        <div class="genre">{{ album.genre }}</div>
      </div>
      </div>
        <div class="album-content">
          <img :src="album.cover" alt="Album Cover" class="album-cover" />
          <div class="album-details">
            <div class="desc">{{ album.desc }}</div>
            <div class="music-for"><span style="font-weight: 700;">This is music for: </span>{{ album.thisIsMusicFor }}</div>
          </div>
        </div>
        <iframe
          v-if="album.videoId"
          :src="'https://www.youtube.com/embed/' + album.videoId"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="video-embed"
        ></iframe>
        <div class="divide"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlbumList',
  data() {
    return {
      albums: [
        // Example data
        { rank: '50', cover: './albums2024/Bright-Future.png', title: 'Bright Future', artist: 'Adrianne Lenker', videoId: 'GmycsQ30obg', genre: 'Singer-Songwriter, Alt Country', thisIsMusicFor:'a campfire, a few drinks, a few friends and wearing really cool cowboy hats. ', desc: 'Big Thief was a group I didn\'t get at first. Around the time UFOF and Two Hands came out, I would see rave reviews by every publication, see their albums on the display wall at my local record stores, and listen to friends talk ad nauseam about how great they were. To me, they were just a folksy indie rock band with a nice-sounding lead singer. But around the time Dragon New Warm Mountain I Believe in You came out, I was hooked. I finally got it. The band wasn\'t just a nice voice and some sparse instrumentation... they were a dialed-in songwriting machine. Adrianne Lenker continues their crusade on the masses of showing off how they were born to be a musician with their newest solo project New Bright Future. A beautiful, heartbreaking and sometimes very catchy monster of an album that continues the tradition of Adrianne Lenker doing what they do best. ' },
        { rank: '49',cover: './albums2024/stvin.jpg', title: 'All Born Screaming', artist: 'St. Vincent', videoId: 'BWkxzcWt51w', genre: 'Art Rock, Art Pop, Neo-Psychedelia', thisIsMusicFor:'art shows, Johnathon Demme music documentaries and coffee shops that serve weird drinks.',  desc: 'Starting out her career as a member of Polyphonic Spree (good god remember those guys?) and as a backing member of Sufjan Stevens\' band, Anne Clark aka St. Vincent continues to write angular art pop that David Byrne would kill to have written. Her latest album is her most engaging and wild, with big and loud guitar solos slicing through bright choruses layered like angel harmonies that God would kill to have written. But God wouldn\'t dare because St. Vincent would most likely beat God up first. All I am saying is if there was a fight between Anne Clark and any being, I would confidently bet on her walking away with maybe a scratch and a handful of cool artsy songs for her next album. St. Vincent lives in our hearts and she lives in my walls help me I am terrified.' },
        { rank: '48',cover: './albums2024/chrom.jpg', title: 'CHROMAKOPIA', artist: 'Tyler, The Creator', videoId: '16KSivdIGjQ', genre: 'West Coast Hip Hop, Experimental Hip Hop', thisIsMusicFor:'a fancy persons party you would see in a tv show where everyone is wearing nice jackets and holding drinks that look way too bright.',  desc: 'Tyler, the Creator has come a really, really reaaaaalllly long way from his days as the deep-voiced, cockroach-eating leader of Odd Future. He has done the opposite of what most artists do and put out not-so-great solo albums for a number of years and then, as if a light switch was snapped, became one of the most interesting and engaging Hip Hop artists to do it. On his new effort, he writes bold marching band beat mini movies built to withstand an atomic bomb. Or a cherry bomb, I guess in this case. He has taken the idea of an album rollout, which in my opinion can often come off as a narcissistic endeavor, and creates new characters like he is Mike Myers but not Canadian and with fewer silly voices but still brings something unique to the table."' },
        { rank: '47',cover: './albums2024/inwaves.png', title: 'In Waves', artist: 'Jamie xx', videoId: 'xeKSdJqFM6o', genre: 'House, Future Garage, UK Bass', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '46',cover: './albums2024/manning.png', title: 'Manning Fireworks', artist: 'MJ Lenderman', videoId: 'YeGujHpGUIs', genre: 'Alt-Country, Slacker Rock', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '45',cover: './albums2024/jpeg.png', title: 'I LAY DOWN MY LIFE FOR YOU', artist: 'JPEGMAFIA', videoId: 'MwTTnppbtKA', genre: 'Experimental Hip Hop, Hardcore Hip Hop', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '44',cover: './albums2024/35.png', title: '3 + 5', artist: 'Melt-Banana', videoId: 'ix_lYiFzMw0', genre: 'Noise Rock, Hardcore Punk, Experimental Rock', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '43',cover: './albums2024/allhell.jpg', title: 'All Hell', artist: 'Los Campesinos!', videoId: 'kk4UCP9vlA0', genre: 'Post-Punk Revival, Midwest Emo, Art Rock ', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '42',cover: './albums2024/boldy1.jpg', title: 'Across The Tracks', artist: 'Boldy James & Conductor Williams', videoId: 'sSD_YS9FZjI', genre: 'Gangsta Rap, Boom Bap', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '41',cover: './albums2024/whylawd.jpg', title: 'WHY LAWD?', artist: 'NxWorries', videoId: 'T741gjLy0LM', genre: 'Contemporary R&B, West Coast Hip Hop, Psychedelic Soul, Smooth Soul', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '40',cover: './albums2024/sam.jpg', title: 'Samurai', artist: 'Lupe Fiasco', videoId: 'L_brIj-go8U', genre: 'Jazz Rap, Abstract Hip Hop', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '39',cover: './albums2024/healer.jpg', title: 'The Healer', artist: 'Sumac', videoId: '2VdGdQ6MtXc', genre: 'Atmospheric Sludge Metal, Avant-Garde Metal', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '38',cover: './albums2024/dtimes.png', title: 'Dark Times', artist: 'Vince Staples', videoId: '-VjAeaGu5x4', genre: 'Conscious Hip Hop, West Coast Hip Hop', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '37',cover: './albums2024/highway.jpg', title: 'Highway Prayers', artist: 'Billy Strings', videoId: 'oTF-fD7eVcU', genre: 'Progressive Bluegrass', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '36',cover: './albums2024/fearless.png', title: 'Fearless Movement', artist: 'Kamasi Washington', videoId: 'nxMolO9CEaU', genre: 'Spiritual Jazz, Jazz Fusion', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '35',cover: './albums2024/theart.jpg', title: 'Tarantula Heart', artist: 'Melvins', videoId: 'Fsd8gDGSSKU', genre: 'Sludge Metal', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '34',cover: './albums2024/silence.jpg', title: 'The Closest Thing to Silence', artist: 'Ariel Kalma, Jeremiah Chiu & Marta Sofia Honer', videoId: 'b1B2dukuz_Y', genre: 'Ambient, Progressive Electronic', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '33',cover: './albums2024/mind.jpg', title: 'Mind Yo Fucking Business', artist: 'RXKNephew', videoId: 'tNXywRs6xMQ', genre: 'Hardcore Hip Hop', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '32',cover: './albums2024/three.png', title: 'Three', artist: 'Four Tet', videoId: 'DGaKVLFNWzs', genre: 'Microhouse, Folktronica, Ambient', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '31',cover: './albums2024/liquidmike.jpg', title: 'Paul Bunyan\'s Slingshot', artist: 'Liquid Mike', videoId: 'lltlvniBPkI', genre: 'Power Pop, Pop Punk', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '30',cover: './albums2024/leadership.jpg', title: 'Penalty of Leadership', artist: 'Boldy James & Nicholas Craven', videoId: 'sPHkRyiuu-w', genre: 'Gangsta Rap, Drumless', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '29',cover: './albums2024/cool.png', title: 'Cool World', artist: 'Chat Pile', videoId: '6T8s1G3ku2I', genre: 'Noise Rock, Sludge Metal', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '28',cover: './albums2024/action.jpg', title: 'JOHANN SEBASTIAN BACHLAVA THE DOCTOR', artist: 'Action Bronson', videoId: 'R3jqt_s9MpU', genre: 'East Coast Hip Hop, Drumless, Jazz Rap', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '27',cover: './albums2024/upper.jpg', title: 'Upper Space', artist: 'DJ Rude One', videoId: 'K2FWndhR3aY', genre: 'Hip-Hop/Rap Boom Bap', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '26',cover: './albums2024/beak.jpg', title: '>>>>', artist: 'Beak>', videoId: 'IQ-tAOFvofU', genre: 'Krautrock, Post-Rock', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '25',cover: './albums2024/something.jpg', title: 'Something in the Room She Moves', artist: 'Julia Holter', videoId: 'D36Zt7yy2OY', genre: 'Art Pop, Chamber Jazz', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '24',cover: './albums2024/city.jpg', title: 'City Swamp', artist: 'Jake Long', videoId: 'pHKn9F_NwYQ', genre: 'Jazz Fusion, Jazz-Funk', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '23',cover: './albums2024/night.jpg', title: 'Night Palace', artist: 'Mount Eerie', videoId: 'sNJ46h1PS_g', genre: 'Avant-Folk, Slacker Rock, Post-Rock', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '22',cover: './albums2024/lightdeath.png', title: 'Light Of Death', artist: 'Umbra Vitae', videoId: 'BkxjiJKn-4k', genre: 'Deathcore, Death Metal', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '21',cover: './albums2024/nail.jpg', title: 'Every Bridge Burning', artist: 'Nails', videoId: 'PAmBKEDUG5M', genre: 'Grindcore, Powerviolence', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '20',cover: './albums2024/ka.png', title: 'The Thief Next to Jesus', artist: 'KA', videoId: 'l4oPd6lGFK0', genre: 'Abstract Hip Hop, Drumless, East Coast Hip Hop', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '19',cover: './albums2024/father.jpg', title: 'Mahashmashana', artist: 'Father John Misty', videoId: '73qfO13cjns', genre: 'Soft Rock, Baroque Pop, Chamber Pop, Traditional Pop ', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '18',cover: './albums2024/storm.jpg', title: 'Cometh the Storm', artist: 'High on Fire', videoId: 'cWBTQF3fY3Q', genre: 'Sludge Metal, Stoner Metal', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '17',cover: './albums2024/cutting.jpg', title: 'Cutting the Throat of God', artist: 'Ulcerate', videoId: 'UgpXvSzaqjo', genre: 'Dissonant Death Metal, Technical Death Metal', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '16',cover: './albums2024/nohands.png', title: 'NO HANDS', artist: 'Joey Valence & Brae', videoId: 'iUGclRjzfm4', genre: 'Hardcore Hip Hop, East Coast Hip Hop', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '15',cover: './albums2024/Ekathe.jpg', title: '1686', artist: 'Ekathe', videoId: 'repNXDF4t4M', genre: 'Jazz Fusion ', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '14',cover: './albums2024/norther.jpg', title: 'Norther', artist: 'Ex-Easter Island Head', videoId: 'rIx0QWwuG8o', genre: 'Ambient, Drone', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '13',cover: './albums2024/searching.jpg', title: 'Searching', artist: 'James Devane', videoId: 'eT6MF0K-qNM', genre: 'Ambient Dub', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '12',cover: './albums2024/freddie.jpg', title: 'You Only Die 1nce', artist: 'Freddie Gibbs', videoId: 'Vlp0__rHyZU', genre: 'Trap, Boom Bap, Jazz Rap, Conscious Hip Hop ', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '11',cover: './albums2024/maze.jpg', title: 'Maze Envy', artist: 'Civerous', videoId: 'qM6K9vYYWTg', genre: 'Death Doom Metal, Death Metal', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '10',cover: './albums2024/blood.jpg', title: 'Absolute Elsewhere', artist: 'Blood Incantation', videoId: 'tz_YBkl3QUw', genre: 'Progressive Death Metal', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '9',cover: './albums2024/Muuntautuja.jpg', title: 'Muuntautuja', artist: 'Oranssi Pazuzu', videoId: 'fos2ThPMU0k', genre: 'Avant-Garde Metal, Psychedelic Rock', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '8',cover: './albums2024/Endlessness.jpg', title: 'Endlessness', artist: 'Nala Sinephro', videoId: '_dWOVhYElT4', genre: 'Space Ambient, Jazz Fusion', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '7',cover: './albums2024/spirit.jpg', title: 'YOU\'LL HAVE TO LOSE SOMETHING', artist: 'SPIRIT OF THE BEEHIVE', videoId: 'lNNDJyYUH0Y', genre: 'Indie Pop, Neo-Psychedelia', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '6',cover: './albums2024/gnx.png', title: 'GNX', artist: 'Kendrick Lamar', videoId: 'U8F5G5wR1mk', genre: 'West Coast Hip Hop', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '5',cover: './albums2024/stab.jpg', title: 'Manual Manic Procedures', artist: '200 Stab Wounds', videoId: 'B9CJxE2Qp-E', genre: 'Death Metal', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '4',cover: './albums2024/mach.jpeg', title: '#RICHAXXHAITIAN', artist: 'Mach-Hommy', videoId: 'jtyxeRz37Kg', genre: 'Abstract Hip Hop, East Coast Hip Hop', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '3',cover: './albums2024/magda.jpg', title: 'Imaginal Disk', artist: 'Magdalena Bay', videoId: 'PE6yDzNQ0Ac', genre: 'Synthpop, Neo-Psychedelia', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '2',cover: './albums2024/vampire.png', title: 'Only God Was Above Us', artist: 'Vampire Weekend', videoId: 'Ns7umApdwOY', genre: 'Indie Rock, Chamber Pop', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '1',cover: './albums2024/newsound.png', title: 'The New Sound', artist: 'Geordie Greep', videoId: 'A4EU_0vFzuU', genre: 'Jazz-Rock, Progressive Rock, Art Rock', thisIsMusicFor:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      ]
    };
  },
  computed: {
    reversedAlbums() {
      return this.albums.slice();
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap');


* {
  font-family: "Geist Mono", serif;
}

.main-title {
  font-size: 70px;
  text-align: center;
  margin-bottom: 10%;
}

.ranking {
  font-size: 70px;
  color: #677c8a;
  align-content: start;
}

.rank-title-artist {
  display: flex;
}

.title-artist {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2.5%;
  margin-bottom: 3%;
}

.album-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3%;
  margin-bottom: 4%;
}

.album-list {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.album-list h1 {
  text-align: center;
  margin-bottom: 20px;
}

.title {
  font-size: 30px;
  font-style: italic;
  font-weight: 200;
}

.artist {
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
}

.genre {
  font-size: 14px;
  border-top: 1px solid black;
  color: #949292;
  font-weight: 500;
}

.rank {
  font-size: 50px;
  font-weight: bold;
  margin-right: 60px;
  border-radius: 50%;
  border: solid 2px black;
  padding: 2%;
  background-color: aliceblue;
}

.album-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.album-cover {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}

.video-embed {
  width: 950px;
  height: 500px;
  margin-top: 15px;
  border: none;
  border-radius: 8px;
}

.desc {
  font-size: 16px;
  margin-bottom: 3%;
  text-indent: 6%;
  margin-right: 6%;
}

.music-for {
  margin-right: 6%;
}

.divide {
  border-bottom: .5px solid #949292;
  margin-top: 6%;
  margin-bottom: 6%;
  width: 950px;
}

</style>