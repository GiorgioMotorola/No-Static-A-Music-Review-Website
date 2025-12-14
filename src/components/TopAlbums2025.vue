<template>
  <div class="album-list">
    <div class="main-title">TOP 50 ALBUMS OF 2025</div>
    <div>
      <div
        v-for="(album, index) in paginatedAlbums"
        :key="index"
        class="album-entry"
      >
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
            <div class="music-for">
              <span style="font-weight: 700">SOUNDS LIKE: </span
              >{{ album.soundsLike }}
            </div>
          </div>
        </div>
        <div v-if="album.videoId" class="video-wrapper">
          <iframe
            :src="'https://www.youtube.com/embed/' + album.videoId"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="video-embed"
          ></iframe>
        </div>
        <div class="divide"></div>
      </div>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <button
        v-for="page in totalPages"
        :key="page"
        @click="goToPage(page)"
        :class="{ active: page === currentPage }"
      >
        {{ page }}
      </button>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumList",
  data() {
    return {
      albums: [
        { rank: '50', cover: './albums2025/45-pounds.jpg', title: '45 Pounds', artist: 'YHWH Nailgun', videoId: '41flmWt-9l8', genre: 'Experimental Rock, Art Punk, No Wave', soundsLike:'Filth by Swans with a tiny bit more accessibility.', desc: 'If you were to guess where this album was recorded, you wouldn’t be outside your mind if you guessed “inside a sheet metal factory.” But you would be wrong. This experimental no wave wrecker was laid down at a goat farm in upstate New York. And just like a goat, this band eats tin cans and nails, then rams its dumb head into the side of a wooden fence post for fun. The only reason this isn’t higher on my list is its runtime, which left me wanting more, but I’m for sure going to be looking out for more from these guys in the future.' },
{ rank: '49', cover: './albums2025/jazz-report-from-the-hood.jpg', title: 'Jazz Report from the Hood', artist: 'Omasta', videoId: 'T_YIdTDV04g', genre: 'Jazz Fusion', soundsLike:'A warm, semi full jazz club on a chilly autumn night.', desc: 'Last year was a good year for metal. This year was a good year for jazz. It’s heartening to know the New Orleans born genre still lives on in places elsewhere. Krakow based jazz hip hop group Omasta prove jazz can still be just as cool on the other side of the world. Deep bass, snappy drums, and moody piano back the seductive flutes, trumpets, and sax... there isn’t much else needed but just like the best foods in the world, you only need a few things to make something great.' },
{ rank: '48', cover: './albums2025/hawalat.jpg', title: 'Hawalat', artist: 'Charif Megarbane', videoId: '9PRJODsbDuI', genre: 'Habibi Funk, Lounge, Jazz-Fusion', soundsLike:'Ennio Morricone takes a trip to Lebanon.', desc: 'This is as cinematic a record to come out this year as anything. The only thing that could rival it is the Expedition 33 soundtrack, but that doesn’t count since it was made specifically for another art form. Hawalat by Charif Megarbane combines sounds from all over the world to make one hell of an album for your sunset drives or springtime grill outs. This is one to get lost in.' },
{ rank: '47', cover: './albums2025/horses.jpg', title: 'Horses', artist: 'Tobacco City', videoId: 'L9XBol_Vafs', genre: 'Alt-Country, Americana', soundsLike:'A newly built barn, I guess.', desc: 'Alt country is on the rise for the first time since the No Depression era of Uncle Tupelo, and as annoying people on the internet say, I am HERE for it. I have been waiting for a moment like this since Wilco took hold of me in my late teens and early twenties. Horses by Tobacco City offers a straight down the lane modern take on what Gram Parsons and Emmylou Harris were doing before Parsons decided to die on us. It isn’t going to change the world or anything, but this album is a great listen for those looking for a bit of twang in their indie music.' },
{ rank: '46', cover: './albums2025/lifetime.jpg', title: 'Lifetime', artist: 'Erika de Casier', videoId: 'i36-wzw2g7k', genre: 'Downtempo, Alternative R&B, Trip Hop', soundsLike:'Hanging out in your high rise in a post dystopian megapolis.', desc: 'Trip hop’s best moments are not the drums or the longing words sung over it all, but instead the airy, ambient spaces it fills. Erika de Casier has that figured out and then some. I feel as if a warm blanket of snow is washing over me while listening to her fourth studio album, Lifetime. If that doesn’t make sense, then just listen to it and tell me I am wrong, you ghoul.' },
{ rank: '45', cover: './albums2025/deux-paradis.jpg', title: 'Deux Paradis', artist: 'Domenique Dumont', videoId: 'cAafYcll-K0', genre: 'Sophisti-Pop, Synthpop', soundsLike:'A really fun art exhibit for old Casio keyboards.', desc: 'Sorry I called you a ghoul. Deux Paradis is also the fourth studio album, but this time from the collaboration of multi instrumentalist and producer Arturs Liepins and vocalist Anete Stuce, also known as Domenique Dumont. At first, this may seem like a New Order for the French type album, but the harder you look, the more you realize this is an expert level class in stripping back the cruft to let the songs do the talking. Every song hits like a punch and will have you doing some odd boogie shuffle in the middle of a field.' },
{ rank: '44', cover: './albums2025/tuff-times-never-last.jpg', title: 'Tuff Times Never Last', artist: 'Kokoroko', videoId: 'l5JQAMB-iYQ', genre: 'Afrobeat, Neo-Soul, Jazz Fusion', soundsLike:'The funky side of your radio band.', desc: 'Oh gross, they’re British?! Oh well. Kokoroko is a septet London-based band that puts together Afrobeat, neo-soul, and jazz easier than you can do a two-piece puzzle. I haven’t looked this up, but I wouldn’t be surprised if Kokoroko has worked with Anderson .Paak. Hold on, let me look.' },
{ rank: '43', cover: './albums2025/goldstar.jpg', title: 'Goldstar', artist: 'Imperial Triumphant', videoId: '7Ios6fwqrSU', genre: 'Avant-Garde Metal, Dissonant Death Metal', soundsLike:'The death of an empire in real time.', desc: 'Alright, so Anderson Paak has not collaborated with Kokoroko, which to me seems like a slam dunk. But do you know who has collaborated with Anderson Paak? Dissonant death metal tyrants Imperial Triumphant. Okay, that isn’t true. But I can tell you this: Imperial Triumphant have such a knack for mixing things that aren’t typically associated with metal that I would be comfortable saying they could figure out an Anderson Paak collab. Listen to this if you need your head reimaged.' },
{ rank: '42', cover: './albums2025/dry-drunk.jpg', title: 'Dry Drunk', artist: 'Street Sects', videoId: 'WpZW-Q6HKR4', genre: 'Electro-Industrial, Industrial Rock, Synth Punk', soundsLike:'Something isnt right in a small rural town.', desc: 'Street Sects have been on my radar since their debut Pole Position. Since then, they have explored the dark-to-light spectrum of industrial. On Dry Drunk, they take it back to basics and offer a terrifying thrill ride of what I can only assume is an album about a drunk guy killing people. Also, there are few artists right now who have better album covers than these dudes.' },
{ rank: '41', cover: './albums2025/lux.png', title: 'LUX', artist: 'ROSALÍA', videoId: 'htQBS2Ikz6c', genre: 'Art Pop, Orchestral', soundsLike:'Catholic Mass but its cool.', desc: 'Rosalía has been one of the most ambitious pop artists ever, and on her new album Lux, she takes it even further. Written in 14 languages about four different saints, Lux gives us a world tour of the classically tragic and religiously romantic. There is a reason you see this on so many year-end lists, and I hope it will push some of the boring, stuck-in-the-mud pop artists to do bigger things and be less boring.' },
{ rank: '40', cover: './albums2025/caveman-wakes-up.jpg', title: 'Caveman Wakes Up', artist: 'Friendship', videoId: 'xB_fN-Ghb2w', genre: 'Alt-Country, Indie Rock', soundsLike:'The National with a little cowboy hat on em.', desc: 'More alt-country slop for the twanghead troth on Redneck Farm! Just kidding. Caveman Wakes Up by Friendship is alt-country’s answer to “but where does The National fit in all of this?” I haven’t made a list of my favorite songs of the year, but I can guarantee that Free Association is in the top five, and the rest of the songs are no slouches either. Give this a listen if your country needs more brooding.' },
{ rank: '39', cover: './albums2025/live-laugh-love.jpg', title: 'Live Laugh Love', artist: 'Earl Sweatshirt', videoId: 'q_nwxIIUVAw', genre: 'Abstract Hip Hop, West Coast Hip Hop', soundsLike:'A guy woke up and then made a great rap album.', desc: 'Not everything in music has to sound like it was arranged and recorded inside Sound City. Sure, those Fleetwood Mac drums are killer, and Steely Dan can make records you can set your watch to, but at the end of the day, everything has its place. Earl Sweatshirt makes the most sense on top of beats that sound a little half-baked and drumless. It is what it is. And if you don’t get it, maybe you will the next time he drops a lo-fi killer.' },
{ rank: '38', cover: './albums2025/infinite.jpg', title: 'Infinite', artist: 'Mobb Deep', videoId: 'trX0YtwlojQ', genre: 'East Coast Hip Hop, Gangsta Rap', soundsLike:'', desc: '' },
{ rank: '37', cover: './albums2025/from-the-pyre.jpg', title: 'From the Pyre', artist: 'The Last Dinner Party', videoId: '4T5nNmaTPEY', genre: 'Indie Rock, Glam Rock', soundsLike:'', desc: '' },
{ rank: '36', cover: './albums2025/stochastic-drift.jpg', title: 'Stochastic Drift', artist: 'Barker', videoId: 'hxGItLRJ5Dc', genre: 'Ambient Techno, IDM, Minimal Techno', soundsLike:'', desc: '' },
{ rank: '35', cover: './albums2025/gift-songs.jpg', title: 'Gift Songs', artist: 'Jefre Cantu-Ledesma', videoId: 'WjqPSXKClUo', genre: 'Ambient, Drone', soundsLike:'', desc: '' },
{ rank: '34', cover: './albums2025/drive-to-goldenhammer.jpg', title: 'Drive to Goldenhammer', artist: 'Divorce', videoId: 'KwbA826o918', genre: 'Indie Rock, Indie Pop', soundsLike:'', desc: '' },
{ rank: '33', cover: './albums2025/hideous-aftermath.jpg', title: 'Hideous Aftermath', artist: 'Sanguisugabogg', videoId: 'moaTy4vQ2BY', genre: 'Brutal Death Metal, Slam Death Metal', soundsLike:'', desc: '' },
{ rank: '32', cover: './albums2025/maravilhosamente-bem.jpg', title: 'MARAVILHOSAMENTE BEM', artist: 'Julia Mestre', videoId: 'WXGKLe0DJ7U', genre: 'Sophisti-Pop, Boogie, Dance-Pop', soundsLike:'', desc: '' },
{ rank: '31', cover: './albums2025/racing-mount-pleasant.jpg', title: 'Racing Mount Pleasant', artist: 'Racing Mount Pleasant', videoId: 'yxk4xG68lXY', genre: 'Art Rock, Chamber Pop', soundsLike:'', desc: '' },
{ rank: '30', cover: './albums2025/adventure.jpg', title: 'Adventure', artist: 'Half Japanese', videoId: 'uZlxCaLHl2M', genre: 'Experimental Rock, Noise Rock, Post-Punk', soundsLike:'', desc: '' },
{ rank: '29', cover: './albums2025/touch.jpg', title: 'Touch', artist: 'Tortoise', videoId: 'HMERycG1uyw', genre: 'Post-Rock, Indietronica, Krautrock', soundsLike:'', desc: '' },
{ rank: '28', cover: './albums2025/6-days-in-leysin.jpg', title: '6 Days In Leysin', artist: 'Greg Foat', videoId: '-tkNtB3ivpk', genre: 'Jazz Fusion, ECM Style Jazz', soundsLike:'', desc: '' },
{ rank: '27', cover: './albums2025/painter-of-the-invisible.jpg', title: 'Painter of The Invisible', artist: 'Jaleel Shaw', videoId: 'n9NAfopDYKM', genre: 'Jazz, Post-Bop', soundsLike:'', desc: '' },
{ rank: '26', cover: './albums2025/struck-a-nerve.jpg', title: 'Struck A Nerve', artist: 'Struck A Nerve', videoId: 'FlLUsOBmh_Q', genre: 'Thrash Metal, Heavy Metal', soundsLike:'', desc: '' },
{ rank: '25', cover: './albums2025/the-truth-is-always-within-you.jpg', title: '真実はいつもあなたの中にある [The Truth Is Always Within You]', artist: 't e l e p a t h テレパシー能力者', videoId: 'uKDpqLkTWyg', genre: 'Ambient, Slushwave', soundsLike:'', desc: '' },
{ rank: '24', cover: './albums2025/humanhood.jpg', title: 'Humanhood', artist: 'The Weather Station', videoId: 'GMbii8lEjII', genre: 'Art Pop, Sophisti-Pop, Singer-Songwriter', soundsLike:'', desc: '' },
{ rank: '23', cover: './albums2025/private-music.jpg', title: 'private music', artist: 'Deftones', videoId: 'U_uVVO7eGic', genre: 'Shoegaze, Post-Hardcore, Post-Metal', soundsLike:'', desc: '' },
{ rank: '22', cover: './albums2025/through-the-wal.jpg', title: 'Through The Wall', artist: 'Rochelle Jordan', videoId: '8TyAH7PoMoY', genre: 'Deep House, Alternative R&B, Dance-Pop', soundsLike:'', desc: '' },
{ rank: '21', cover: './albums2025/lonely-people-with-power.jpg', title: 'Lonely People With Power', artist: 'Deafheaven', videoId: '4cjJ-b-W_7A', genre: 'Blackgaze, Post-Black Metal', soundsLike:'', desc: '' },
{ rank: '20', cover: './albums2025/the-future-is-here-and-everything-needs-to-be-destroyed.jpg', title: 'THE FUTURE IS HERE AND EVERYTHING NEEDS TO BE DESTROYED', artist: 'The Armed', videoId: 'RU5z-l7SSTw', genre: 'Noise Rock, Post-Hardcore', soundsLike:'', desc: '' },
{ rank: '19', cover: './albums2025/let-god-sort-em-out.jpg', title: 'Let God Sort Em Out', artist: 'Clipse', videoId: '5lDVpyjkuhE', genre: 'Gangsta Rap, Southern Hip Hop', soundsLike:'', desc: '' },
{ rank: '18', cover: './albums2025/equus-caballus-equus-asinus.jpg', title: 'Equus Caballus / Equus Asinus', artist: 'Men I Trust', videoId: '9O0krQAcob8', genre: 'Sophisti-Pop, Dream Pop, Soft Rock, Jangle Pop', soundsLike:'', desc: '' },
{ rank: '17', cover: './albums2025/crooked-wing.jpg', title: 'Crooked Wing', artist: 'These New Puritans', videoId: 'vad8yBqJZuU', genre: 'Neoclassical Darkwave, Post-Industrial, Modern Classical', soundsLike:'', desc: '' },
{ rank: '16', cover: './albums2025/the-passionate-ones.jpg', title: 'The Passionate Ones', artist: 'Nourished By Time', videoId: 'UErHzhLq6Kg', genre: 'Bedroom Pop, Alternative R&B, Hypnagogic Pop', soundsLike:'', desc: '' },
{ rank: '15', cover: './albums2025/getting-killed.jpg', title: 'Getting Killed', artist: 'Geese', videoId: 'RGE-JRsJ2uo', genre: 'Art Rock, Indie Rock', soundsLike:'', desc: '' },
{ rank: '14', cover: './albums2025/aint-no-damn-way.png', title: "AIN'T NO DAMN WAY!", artist: 'KAYTRANADA', videoId: 'X7kHGD3xJoc', genre: 'Deep House, Funky House', soundsLike:'', desc: '' },
{ rank: '13', cover: './albums2025/cancionera.jpg', title: 'Cancionera', artist: 'Natalia Lafourcade', videoId: 'UgvR5S4RBh8', genre: 'Singer-Songwriter, Chamber Jazz, Traditional Folk Music', soundsLike:'', desc: '' },
{ rank: '12', cover: './albums2025/scanners.jpg', title: 'Scanners', artist: 'Anthony Naples', videoId: '2CzitrlVrUs', genre: 'Ambient House, Tech House, Microhouse', soundsLike:'', desc: '' },
{ rank: '11', cover: './albums2025/massive-shoe.jpg', title: 'Massive Shoe', artist: 'Way Dynamic', videoId: 'dd3SFGhWJ3I', genre: 'Soft Rock, Singer-Songwriter', soundsLike:'', desc: '' },
{ rank: '10', cover: './albums2025/tranquilizer.jpg', title: 'Tranquilizer', artist: 'Oneohtrix Point Never', videoId: 'YfjsyKFbyqM', genre: 'Ambient, Progressive Electronic, Sound Collage', soundsLike:'', desc: '' },
{ rank: '9', cover: './albums2025/i-love-my-computer.jpg', title: 'I Love My Computer', artist: 'Ninajirachi', videoId: 'MxekyGtqcNE', genre: 'Electro House, EDM', soundsLike:'', desc: '' },
{ rank: '8', cover: './albums2025/the-wringing-cloth.jpg', title: 'The Wringing Cloth', artist: 'Old Saw', videoId: 'AtBAzkelBkg', genre: 'Ambient, Free Folk, American Primitivism, Drone', soundsLike:'', desc: '' },
{ rank: '7', cover: './albums2025/alfredo-2.jpg', title: 'Alfredo 2', artist: 'Freddie Gibbs & The Alchemist', videoId: 'dvnNeQzhmjs', genre: 'Gangsta Rap, Jazz Rap, Drumless, Boom Bap', soundsLike:'', desc: '' },
{ rank: '6', cover: './albums2025/the-spiritual-sound.jpg', title: 'The Spiritual Sound', artist: 'Agriculture', videoId: 'EMcqAt0zI-w', genre: 'Blackgaze, Post-Black Metal, Avant-Garde Metal', soundsLike:'', desc: '' },
{ rank: '5', cover: './albums2025/how-you-been.jpg', title: 'How You Been', artist: 'SML', videoId: 'kkKhsf2hGs8', genre: 'Avant-Garde Jazz, Jazz Fusion, Post-Rock', soundsLike:'', desc: '' },
{ rank: '4', cover: './albums2025/linked.jpg', title: 'Linked', artist: 'Martinou', videoId: 'zCbZfVXtf0s', genre: 'Ambient Techno, Minimal Techno', soundsLike:'', desc: '' },
{ rank: '3', cover: './albums2025/hagen.jpg', title: 'HAGEN', artist: 'Titanic', videoId: '46-dKCULkWQ', genre: 'Chamber Jazz, Post-Rock, Experimental Rock', soundsLike:'', desc: '' },
{ rank: '2', cover: './albums2025/iconoclasts.png', title: 'ICONOCLASTS', artist: 'Anna von Hausswolff', videoId: '4rL3ATRkeKw', genre: 'Art Rock, Post-Rock, Neoclassical Darkwave', soundsLike:'', desc: '' },
{ rank: '1', cover: './albums2025/under-tangled-silence.jpg', title: 'Under Tangled Silence', artist: 'Djrum', videoId: 'ma5TpX7_7bs', genre: 'UK Bass, Atmospheric Drum and Bass, Modern Classical', soundsLike:'', desc: '' },

      ],
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    reversedAlbums() {
      return this.albums.slice();
    },
    paginatedAlbums() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.reversedAlbums.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.albums.length / this.itemsPerPage);
    },
  },
  methods: {
    goToPage(page) {
      this.currentPage = page;
      this.scrollToTop();
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.scrollToTop();
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.scrollToTop();
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap");

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

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
  border-radius: 8px;
  margin: 15px auto;
}

.video-embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
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
  border-bottom: 0.5px solid #949292;
  margin-top: 6%;
  margin-bottom: 6%;
  width: 100%;
}

.pagination {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.pagination button {
  margin: 0 5px;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgb(43, 46, 40);
  color: #0d0d0e;
  background-color: aliceblue;
}

.pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.pagination button.active {
  font-weight: bold;
  text-decoration: underline;
}

@media only screen and (max-width: 1000px) {
  .main-title {
    font-size: 30px;
    margin-bottom: 10%;
  }

  .album-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .video-wrapper {
    max-width: 725px;
  }
}

@media only screen and (max-width: 600px) {
  .video-wrapper {
    max-width: 400px;
  }

  .main-title {
    font-size: 25px;
  }

  .title {
    font-size: 20px;
  }

  .artist {
    font-size: 20px;
  }

  .ranking {
    font-size: 70px;
    text-align: center;
  }

  .genre {
    font-size: 12px;
    margin-bottom: 6%;
  }

  .desc {
    font-size: 15px;
    margin-right: 0%;
  }

  .music-for {
    font-size: 15px;
    margin-right: 0%;
  }

  .rank-title-artist {
    display: flex;
    flex-direction: column;
  }

  .pagination button {
    margin: 0 5px;
    padding: 3px 7px;
    cursor: pointer;
    box-shadow: 0 1px 1px rgb(43, 46, 40);
    color: #0d0d0e;
    background-color: aliceblue;
  }
}
</style>
