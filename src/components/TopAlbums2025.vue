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
{ rank: '49', cover: './albums2025/hawalat.jpg', title: 'Hawalat', artist: 'Charif Megarbane', videoId: '9PRJODsbDuI', genre: 'Habibi Funk, Lounge, Jazz-Fusion', soundsLike:'Ennio Morricone takes a trip to Lebanon.', desc: 'This is as cinematic a record to come out this year as anything. The only thing that could rival it is the Expedition 33 soundtrack, but that doesn’t count since it was made specifically for another art form. Hawalat by Charif Megarbane combines sounds from all over the world to make one hell of an album for your sunset drives or springtime grill outs. This is one to get lost in.' },
{ rank: '48', cover: './albums2025/horses.jpg', title: 'Horses', artist: 'Tobacco City', videoId: 'L9XBol_Vafs', genre: 'Alt-Country, Americana', soundsLike:'A newly built barn, I guess.', desc: 'Alt country is on the rise for the first time since the No Depression era of Uncle Tupelo, and as annoying people on the internet say, I am HERE for it. I have been waiting for a moment like this since Wilco took hold of me in my late teens and early twenties. Horses by Tobacco City offers a straight down the lane modern take on what Gram Parsons and Emmylou Harris were doing before Parsons decided to die on us. It isn’t going to change the world or anything, but this album is a great listen for those looking for a bit of twang in their indie music.' },
{ rank: '47', cover: './albums2025/lifetime.jpg', title: 'Lifetime', artist: 'Erika de Casier', videoId: 'i36-wzw2g7k', genre: 'Downtempo, Alternative R&B, Trip Hop', soundsLike:'Hanging out in your high rise in a post dystopian megapolis.', desc: 'Trip hop’s best moments are not the drums or the longing words sung over it all, but instead the airy, ambient spaces it fills. Erika de Casier has that figured out and then some. I feel as if a warm blanket of snow is washing over me while listening to her fourth studio album, Lifetime. If that doesn’t make sense, then just listen to it and tell me I am wrong, you ghoul.' },
{ rank: '46', cover: './albums2025/deux-paradis.jpg', title: 'Deux Paradis', artist: 'Domenique Dumont', videoId: 'cAafYcll-K0', genre: 'Sophisti-Pop, Synthpop', soundsLike:'A really fun art exhibit for old Casio keyboards.', desc: 'Sorry I called you a ghoul. Deux Paradis is also the fourth studio album, but this time from the collaboration of multi instrumentalist and producer Arturs Liepins and vocalist Anete Stuce, also known as Domenique Dumont. At first, this may seem like a New Order for the French type album, but the harder you look, the more you realize this is an expert level class in stripping back the cruft to let the songs do the talking. Every song hits like a punch and will have you doing some odd boogie shuffle in the middle of a field.' },
{ rank: '45', cover: './albums2025/tuff-times-never-last.jpg', title: 'Tuff Times Never Last', artist: 'Kokoroko', videoId: 'l5JQAMB-iYQ', genre: 'Afrobeat, Neo-Soul, Jazz Fusion', soundsLike:'The funky side of your radio band.', desc: 'Oh gross, they’re British?! Oh well. Kokoroko is a septet London-based band that puts together Afrobeat, neo-soul, and jazz easier than you can do a two-piece puzzle. I haven’t looked this up, but I wouldn’t be surprised if Kokoroko has worked with Anderson .Paak. Hold on, let me look.' },
{ rank: '44', cover: './albums2025/goldstar.jpg', title: 'Goldstar', artist: 'Imperial Triumphant', videoId: '7Ios6fwqrSU', genre: 'Avant-Garde Metal, Dissonant Death Metal', soundsLike:'The death of an empire in real time.', desc: 'Alright, so Anderson Paak has not collaborated with Kokoroko, which to me seems like a slam dunk. But do you know who has collaborated with Anderson Paak? Dissonant death metal tyrants Imperial Triumphant. Okay, that isn’t true. But I can tell you this: Imperial Triumphant have such a knack for mixing things that aren’t typically associated with metal that I would be comfortable saying they could figure out an Anderson Paak collab. Listen to this if you need your head reimaged.' },
{ rank: '43', cover: './albums2025/dry-drunk.jpg', title: 'Dry Drunk', artist: 'Street Sects', videoId: 'WpZW-Q6HKR4', genre: 'Electro-Industrial, Industrial Rock, Synth Punk', soundsLike:'Something isnt right in a small rural town.', desc: 'Street Sects have been on my radar since their debut Pole Position. Since then, they have explored the dark-to-light spectrum of industrial. On Dry Drunk, they take it back to basics and offer a terrifying thrill ride of what I can only assume is an album about a drunk guy killing people. Also, there are few artists right now who have better album covers than these dudes.' },
{ rank: '42', cover: './albums2025/lux.png', title: 'LUX', artist: 'ROSALÍA', videoId: 'htQBS2Ikz6c', genre: 'Art Pop, Orchestral', soundsLike:'Catholic Mass but its cool.', desc: 'Rosalía has been one of the most ambitious pop artists ever, and on her new album Lux, she takes it even further. Written in 14 languages about four different saints, Lux gives us a world tour of the classically tragic and religiously romantic. There is a reason you see this on so many year-end lists, and I hope it will push some of the boring, stuck-in-the-mud pop artists to do bigger things and be less boring.' },
{ rank: '41', cover: './albums2025/caveman-wakes-up.jpg', title: 'Caveman Wakes Up', artist: 'Friendship', videoId: 'xB_fN-Ghb2w', genre: 'Alt-Country, Indie Rock', soundsLike:'The National with a little cowboy hat on em.', desc: 'More alt-country slop for the twanghead troth on Redneck Farm! Just kidding. Caveman Wakes Up by Friendship is alt-country’s answer to “but where does The National fit in all of this?” I haven’t made a list of my favorite songs of the year, but I can guarantee that Free Association is in the top five, and the rest of the songs are no slouches either. Give this a listen if your country needs more brooding.' },
{ rank: '40', cover: './albums2025/live-laugh-love.jpg', title: 'Live Laugh Love', artist: 'Earl Sweatshirt', videoId: 'q_nwxIIUVAw', genre: 'Abstract Hip Hop, West Coast Hip Hop', soundsLike:'A guy woke up and then made a great rap album.', desc: 'Not everything in music has to sound like it was arranged and recorded inside Sound City. Sure, those Fleetwood Mac drums are killer, and Steely Dan can make records you can set your watch to, but at the end of the day, everything has its place. Earl Sweatshirt makes the most sense on top of beats that sound a little half-baked and drumless. It is what it is. And if you don’t get it, maybe you will the next time he drops a lo-fi killer.' },
{ rank: '39', cover: './albums2025/infinite.jpg', title: 'Infinite', artist: 'Mobb Deep', videoId: 'trX0YtwlojQ', genre: 'East Coast Hip Hop, Gangsta Rap', soundsLike:'Old heads who still got it.', desc: 'Gun to my head, if you asked me what my favorite hip hop album of all time was, I would probably say The Infamous by Mobb Deep. It is a deeply enjoyable and addictive breakout from two legends, Prodigy (RIP) and Havoc, and over 30 years later, with the help of The Alchemist (goat), they put the legend to rest. While it’s not as shining as The Infamous, Hell on Earth, or Murda Muzik, it’s a great swan song for two of the best to ever do it.' },
{ rank: '38', cover: './albums2025/from-the-pyre.jpg', title: 'From the Pyre', artist: 'The Last Dinner Party', videoId: '4T5nNmaTPEY', genre: 'Indie Rock, Glam Rock', soundsLike:'Cabaret for the cool guys.', desc: 'Prelude to Ecstasy, the debut from glam rock outfit The Last Dinner Party, did nothing for me. It was alright. Maybe I wasn’t in the mood for it, or maybe it just wasn’t directly for me. That being said, this new one hit me like a truck. This is a theatrical spectacle for nerds of big choruses and those who prefer the ’80s version of Heart (me, lol). Maybe I’ll go back and give Prelude another shot, but for now, I can’t see how it can beat their follow-up.' },
{ rank: '37', cover: './albums2025/stochastic-drift.jpg', title: 'Stochastic Drift', artist: 'Barker', videoId: 'hxGItLRJ5Dc', genre: 'Ambient Techno, Minimal Techno', soundsLike:'Comfort in a snowstorm', desc: 'I hate the term IDM (Intelligent Dance Music), and I suspect a lot of others hate it too. Now, if you want to listen to anything that would have been classified as IDM before, you’re going to have to look up the subgenre Brain Dance. Guess what? I hate that term even more. So I’m going to stick with ambient techno. Either way, if you like challenging electronic music with deep textures and somewhat glitchy production, this is a hot one for you right here.' },
{ rank: '36', cover: './albums2025/gift-songs.jpg', title: 'Gift Songs', artist: 'Jefre Cantu-Ledesma', videoId: 'WjqPSXKClUo', genre: 'Ambient, Drone', soundsLike:'A dewy spring morning.', desc: 'Gift Songs starts out with a 20-minute opus that sounds like a piano being covered by a raging river. The way the song moves fluidly, without any care as to whether it has gone on too long, will hypnotize you into a state of relaxation. This is certainly ambient music for people who want to get into ambient music, but being entry-level doesn’t always mean it’s not a modern classic.' },
{ rank: '35', cover: './albums2025/hideous-aftermath.jpg', title: 'Hideous Aftermath', artist: 'Sanguisugabogg', videoId: 'moaTy4vQ2BY', genre: 'Brutal Death Metal, Slam Death Metal', soundsLike:'Troll music for Slam fans.', desc: 'Columbus death metal band Sanguisugabogg does two things: hard riffs and hard-to-pronounce band names, and brother, they’re all out of whatever they say in They Live. Hideous Aftermath is a deep continuation of some of the nastiest brutal death metal going these days. There isn’t much to say other than if you like to get kicked in the head on an aural level, this album is for you.' },
{ rank: '34', cover: './albums2025/maravilhosamente-bem.jpg', title: 'MARAVILHOSAMENTE BEM', artist: 'Julia Mestre', videoId: 'WXGKLe0DJ7U', genre: 'Sophisti-Pop, Boogie, Dance-Pop', soundsLike:'The 80s called: they want their casio keys back.', desc: 'From death metal to the catchiest dance pop album you’ll hear all year. I am full of surprises, aren’t I? Julia Mestre is new to me, but she is now someone I will be watching in the coming years. Not only does this album demand you boogie through foggy, disco esque pop landscapes, but it does it in Portuguese and if you can’t speak Portuguese, that means these songs could be about anything! Check this out if you want some sweetness in your life, you goblin.' },
{ rank: '33', cover: './albums2025/racing-mount-pleasant.jpg', title: 'Racing Mount Pleasant', artist: 'Racing Mount Pleasant', videoId: 'yxk4xG68lXY', genre: 'Art Rock, Chamber Pop', soundsLike:'Fleet Foxes gets depressed and moody.', desc: 'Ever since Brexit, there has been a flood of UK-based bands with 10 or more members who all play every brass and woodwind instrument you can think of. While I appreciate the exploration, Brexit-core did get a bit oversaturated for a while. Racing Mount Pleasant isn’t from the UK, but they may as well be. You can tell they got their influences from Godspeed You! Black Emperor, The Microphones, and the newer dramatic groups like Black Country, New Road. It makes me glad that even though a subgenre can be explored to death, there still comes some greatness from it.' },
{ rank: '32', cover: './albums2025/adventure.jpg', title: 'Adventure', artist: 'Half Japanese', videoId: 'uZlxCaLHl2M', genre: 'Experimental Rock, Noise Rock, Post-Punk', soundsLike:'Slightly Buzzed at a local show and the band has a grip on you more than the booze does.', desc: 'Jad and David Fair formed Half Japanese in the 1970s, and in 1980 they released the feral-sounding 1/2 Gentlemen/Not Beasts. It rules but is definitely not for everyone. This album, however, is a continuation of their growth through the years and leans heavily on the catchy, bar-band indie that pairs perfectly with Guided By Voices’ cleanest moments. There is still a little of that left-of-center feeling retained here, but that just makes life more interesting.' },
{ rank: '31', cover: './albums2025/touch.jpg', title: 'Touch', artist: 'Tortoise', videoId: 'HMERycG1uyw', genre: 'Post-Rock, Indietronica, Krautrock', soundsLike:'Tortoise.', desc: 'Tortoise are goats. The band, not the animal. The animals are turtles or something. But the band Tortoise are legends. They can’t miss even if they tried. A perfect blend of jazz, electronic, krautrock, and post-rock for late-night introspection sessions, and this album is no different. It’s a continuation in a long line of fantastic albums, and just like the animal, the tortoise, this band will live forever.' },
{ rank: '30', cover: './albums2025/6-days-in-leysin.jpg', title: '6 Days In Leysin', artist: 'Greg Foat', videoId: '-tkNtB3ivpk', genre: 'Jazz Fusion, ECM Style Jazz', soundsLike:'Slowcore for flight attendants', desc: 'Album covers that perfectly reflect the feeling of an album are a really uncommon occurrence. Sure, there are plenty of artists that get close, but to have a perfect one-to-one ratio of what something sounds like and what the cover looks like is no easy feat. Greg Foat’s 6 Days in Leysin cover looks like an advertisement for somewhere only the rich go. Its snow-covered mountaintops convey a moody, hazy feel, and the ski lift moving into the photo makes you feel like you are about to go on the most relaxing, cozy trip imaginable.' },
{ rank: '29', cover: './albums2025/painter-of-the-invisible.jpg', title: 'Painter of The Invisible', artist: 'Jaleel Shaw', videoId: 'n9NAfopDYKM', genre: 'Jazz, Post-Bop', soundsLike:'Good Jazz', desc: 'Guy: Hey, Lamarr. Is there any place around here with really good jazz? Lamarr: [skeptical] Oh, you want good jazz? GOOD jazz? Lemme ask you a question. Who played cornet for Jacques St. Claire on "Vital Stats"? Guy: Scotty MacDonald. Lamarr: Get in the cab. GET in the CAB. [to driver] Lamarr: Take this young man to the Blue Spot.' },
{ rank: '28', cover: './albums2025/struck-a-nerve.jpg', title: 'Struck A Nerve', artist: 'Struck A Nerve', videoId: 'FlLUsOBmh_Q', genre: 'Thrash Metal, Heavy Metal', soundsLike:'The backseat of a muscle car on a summer evening', desc: 'Braindead meathead thrash metal should be celebrated and cherished. It’s a dying art form. Every year, at least six times, I will google best thrash metal albums of whatever year it is and turn my volume up way too loud. This album rips, man. Crack a beer if that’s your thing. Rip a dart and work on your broken-down Mustang if the mood strikes you. Nothing else needs to be said.' },
{ rank: '27', cover: './albums2025/the-truth-is-always-within-you.jpg', title: '真実はいつもあなたの中にある [The Truth Is Always Within You]', artist: 't e l e p a t h テレパシー能力者', videoId: 'uKDpqLkTWyg', genre: 'Ambient, Slushwave', soundsLike:'Dying at the end of the universe', desc: 'Vaporwave came and went like all good art. It showed up, and then everyone who had Audacity, Paul Stretch, and a big Quiet Storm music collection tried to make some. Maybe that’s not how everything comes and goes, but it sure is how vaporwave came and went. The genre, made for nostalgia that never existed, became overdone to the point where all the greats had to switch lanes. Telepath moved from slush wave over to spacey ambient seamlessly and made one of the better ambient records of the year. Honestly, I would recommend this to anyone, even those who aren’t into vaporwave or ambient. It’s that good.' },
{ rank: '26', cover: './albums2025/humanhood.jpg', title: 'Humanhood', artist: 'The Weather Station', videoId: 'GMbii8lEjII', genre: 'Art Pop, Sophisti-Pop, Singer-Songwriter', soundsLike:'The War On Drugs but the drug is whatever drug Bruce Horsny does.', desc: 'I was wrong about The Weather Station. When Ignorance came out in 2021, I had no idea it was named after my own lack of respect. I didn’t get it. But now I do. I have since gone back and listened to Ignorance as well as a couple of her other albums, and I’ve got to say I am a fan. If you like sophisti-pop and music you can take on the road with you, check this one out right away.' },
{ rank: '25', cover: './albums2025/private-music.jpg', title: 'private music', artist: 'Deftones', videoId: 'U_uVVO7eGic', genre: 'Shoegaze, Post-Hardcore, Post-Metal', soundsLike:'Chino', desc: 'Deftones have been in my life for close to 30 years now, which means I have more or less been with them since the beginning, give or take an album. I have vivid memories of listening to Adrenaline and White Pony while waiting for the bus, and crushing Miller High Lifes while listening to White Pony. So you could say the gate is wide open for me to say this: Deftones may have the most impressive run based purely on being dead center in an otherwise maligned genre. Limp Bizkit and Creed might be memed from time to time, and for whatever reason I can’t understand, Linkin Park is considered an all-timer, but Deftones have proven to be the giants at making their own lane and continuing to improve with each release.' },
{ rank: '24', cover: './albums2025/through-the-wal.jpg', title: 'Through The Wall', artist: 'Rochelle Jordan', videoId: '8TyAH7PoMoY', genre: 'Deep House, Alternative R&B, Dance-Pop', soundsLike:'Kaytranada was here.', desc: 'I have to move to Canada, if only for the electronic music scene. Every time I find a new artist using time-tested electronic music genres and twisting them to their will, it’s often an artist from Canada. There’s got to be something going on up there. Maybe they have training camps with the intention to one day take over the world. If that’s the case, then put me in Rochelle Jordan’s barracks, please.' },
{ rank: '23', cover: './albums2025/lonely-people-with-power.jpg', title: 'Lonely People With Power', artist: 'Deafheaven', videoId: '4cjJ-b-W_7A', genre: 'Blackgaze, Post-Black Metal', soundsLike:'Sunbather but they bather caught on fire from the dang sun.', desc: 'I once spent 70 dollars on an original press of Sunbather by Deafheaven, which puts me in the running for coolest guy on the planet. Just based on that fact alone, I have been married 15 times to 14 different women. To this day, I never thought Deafheaven would make something as good as Sunbather. I thought they were destined to be that one band who would release a game-changing first album and then put out good to great albums for the rest of their career. That is an alright place to be. Most great artists do exactly that, or some form of it. But Deafheaven couldn’t let that be and made one of the most exciting metal albums of 2025.' },
{ rank: '22', cover: './albums2025/the-future-is-here-and-everything-needs-to-be-destroyed.jpg', title: 'THE FUTURE IS HERE AND EVERYTHING NEEDS TO BE DESTROYED', artist: 'The Armed', videoId: 'RU5z-l7SSTw', genre: 'Noise Rock, Post-Hardcore', soundsLike:'blown out psychosis', desc: 'Fair warning: we are getting a new Converge album next year, which means there is a very good chance I already know my album of the year for 2026. But until then, we have The Armed, the weird anonymous art collective from Detroit, doing what Converge does for the modern hardcore scene. This album rips. It’s nasty, loud, chaotic, and meant for anything looking to get ripped to shreds.' },
{ rank: '21', cover: './albums2025/let-god-sort-em-out.jpg', title: 'Let God Sort Em Out', artist: 'Clipse', videoId: '5lDVpyjkuhE', genre: 'Gangsta Rap, Southern Hip Hop', soundsLike:'Clipse.', desc: 'What will probably be Anthony Fantano’s album of the year, and surely an album that will be talked about for years to come, Let God Sort ’Em Out is Clipse showing everyone that OGs can still be on top. Pusha T, Malice, and Pharrell Williams reunite as Clipse after 16 years with a tight and easy testament to never ring the bell until the bell is broken. While it’s not as much of a masterpiece as Hell Hath No Fury, this is as good as any comeback album has been or ever will be.' },
{ rank: '20', cover: './albums2025/equus-caballus-equus-asinus.jpg', title: 'Equus Caballus / Equus Asinus', artist: 'Men I Trust', videoId: '9O0krQAcob8', genre: 'Sophisti-Pop, Dream Pop, Soft Rock, Jangle Pop', soundsLike:'Smooth but not Yacht Rock.', desc: 'I have a running list of indie rock artists who are leading the way for the best of the best in the 2020s so far, and Men I Trust is near the top of that list. Turns out, if you take sophisti-pop and mash it against a sheen of Fleetwood Mac and the dreamy parts of Beach House, you get something pretty timeless and pretty great. I didn’t have the heart to separate these two albums, but they are essentially a double album released a month or so apart, so I don’t feel that bad. Actually, I don’t feel bad at all. Leave me alone.' },
{ rank: '19', cover: './albums2025/crooked-wing.jpg', title: 'Crooked Wing', artist: 'These New Puritans', videoId: 'vad8yBqJZuU', genre: 'Neoclassical Darkwave, Post-Industrial, Modern Classical', soundsLike:'Mark Hollis for the 2020s', desc: 'These New Puritans are the closest thing we will get to late-period Talk Talk. Their latest album since Inside the Rose, and their best since Field of Reeds, Crooked Wing is full of moody, beautiful songs that will have you floating over the streets. Bonus points: Caroline Polachek is on this thing, and she typically makes pretty good choices when it comes to whose albums she guests on.' },
{ rank: '18', cover: './albums2025/the-passionate-ones.jpg', title: 'The Passionate Ones', artist: 'Nourished By Time', videoId: 'UErHzhLq6Kg', genre: 'Bedroom Pop, Alternative R&B, Hypnagogic Pop', soundsLike:'The future of R&B.', desc: 'I called it, man. I’m not sure if I have recorded proof of this, but I promise you I have been saying that Nourished By Time was going to be something special when Erotic Probiotic 2 came out in 2023. Now, in 2025, his new album The Passionate Ones is on nearly every year-end list I have seen so far. Really, you all should start listening to me. It’s embarrassing you keep sleeping on this stuff. Just kidding, do whatever you like. Great album.' },
{ rank: '17', cover: './albums2025/getting-killed.jpg', title: 'Getting Killed', artist: 'Geese', videoId: 'RGE-JRsJ2uo', genre: 'Art Rock, Indie Rock', soundsLike:'Heavy Metal with a full band.', desc: 'I love this album, but I would rather take my time here to talk about Heavy Metal by Cameron Winter instead. Heavy Metal came out at the end of 2024 and missed a lot of year-end lists. There are some that are putting Heavy Metal on their best of 2025 lists, but I can’t bring myself to do it because we have to have rules around here. That being said, Getting Killed is great. It is. But Heavy Metal? That’s an all-timer. It’s easily the best album of the 2020s and one of the greatest albums ever made. So listen to Getting Killed. But absolutely listen to Heavy Metal by Cameron Winter.' },
{ rank: '16', cover: './albums2025/aint-no-damn-way.png', title: "AIN'T NO DAMN WAY!", artist: 'KAYTRANADA', videoId: 'X7kHGD3xJoc', genre: 'Deep House, Funky House', soundsLike:'Sweaty Disco House.', desc: 'Kaytranada can’t make a bad album even if he was paid to make a bad album. If some dork like Elon Musk or something gave Kaytranada a million dollars and said some stupid idiot stuff like “keck comedy is dead, here is money, make a bad album for the lulz” or whatever that dork says, Kaytranada would take the money and put out a classic. And then we would all stuff Elon Musk in a locker or something for being a dumb nerd.' },
{ rank: '15', cover: './albums2025/cancionera.jpg', title: 'Cancionera', artist: 'Natalia Lafourcade', videoId: 'UgvR5S4RBh8', genre: 'Singer-Songwriter, Chamber Jazz, Traditional Folk Music', soundsLike:'I love music, man.', desc: 'The best way to listen to Natalia Lafourcade is either loud on a porch during a cookout or through good headphones, also loud. Probably the best sounding non-electronic album of the year and full of words I can’t understand, there is beauty in every crevice of the album. Put this album on, get a piece of paper, and make a tally for each time you say “wow” during it, and you’ll have to flip the paper halfway through the album.' },
{ rank: '14', cover: './albums2025/scanners.jpg', title: 'Scanners', artist: 'Anthony Naples', videoId: '2CzitrlVrUs', genre: 'Ambient House, Tech House, Microhouse', soundsLike:'Cool guy music.', desc: 'Anthony Naples released Orbs a few years back, and it was one that snuck up on me toward the end of the year. It ended up being a top contender for that year for me. Scanners is no different. I slept on this one for so long, but after my first run-through, I knew it would end up on my 2025 list. Incredibly cool tech house for very cool people, with sounds that will make you feel like you’re riding a cool motorcycle through a cool city on a warm night.' },
{ rank: '13', cover: './albums2025/massive-shoe.jpg', title: 'Massive Shoe', artist: 'Way Dynamic', videoId: 'dd3SFGhWJ3I', genre: 'Soft Rock, Singer-Songwriter', soundsLike:'This doesnt really sound like a massive shoe at all, to be honest.', desc: 'Whitney’s new album got bodied this year. It’s a shame, too, because I liked it quite a bit. It didn’t make the cut this year, but it was pretty good. They continue to make pretty great AM-sounding sunshine pop. But if we’re being honest, Way Dynamic outdid them by a mile. This album has no gimmicks and doesn’t go out of its way to get your attention. It is just great music, and that’s about it. I’m going to “Nourished By Time” this band on the record right now and say: Way Dynamic will do big things in the years to come.' },
{ rank: '12', cover: './albums2025/drive-to-goldenhammer.jpg', title: 'Drive to Goldenhammer', artist: 'Divorce', videoId: 'KwbA826o918', genre: 'Indie Rock, Indie Pop', soundsLike:'A road trip in 2008', desc: 'I mentioned earlier that Free Association by Friendship would be in my top five songs of the year if I decided to make that list. Well, here is another one: Fever Pitch off of Drive to Goldenhammer by Divorce. This song is punchy and electrifying. And just like that Friendship album, the rest of these tracks are no slouches either. It’s nice to see indie rock still putting out music that’s as wonderful as this.' },
{ rank: '11', cover: './albums2025/tranquilizer.jpg', title: 'Tranquilizer', artist: 'Oneohtrix Point Never', videoId: 'YfjsyKFbyqM', genre: 'Ambient, Progressive Electronic, Sound Collage', soundsLike:'Oneohtrix Point Never forever.', desc: 'Oneohtrix Point Never forever.' },
{ rank: '10', cover: './albums2025/i-love-my-computer.jpg', title: 'I Love My Computer', artist: 'Ninajirachi', videoId: 'MxekyGtqcNE', genre: 'Electro House, EDM', soundsLike:'Fun.', desc: 'The first time I put this album on, I listened to it four times in a row. It was a Saturday afternoon, and I was killing time before going out to a couple of bars, and I almost stayed home just to listen four more times. Fun is really the only word you can use. This album is just a lot of fun.' },
{ rank: '9', cover: './albums2025/the-wringing-cloth.jpg', title: 'The Wringing Cloth', artist: 'Old Saw', videoId: 'AtBAzkelBkg', genre: 'Ambient, Free Folk, American Primitivism, Drone', soundsLike:'Bill Callahans hard drive', desc: 'American Primitivism is a genre I need to get more into. While I’m only familiar with it on a surface level, I can confidently say that Old Saw’s The Wringing Cloth will go down as one of the greats. Drone acoustic instruments meet long ambient passages, all accompanied by arpeggiated guitar sending you up and over mountains, into cold rivers, and back onto dusty, fertile ground. It’s a patient listen, but rewarding nonetheless.' },
{ rank: '8', cover: './albums2025/alfredo-2.jpg', title: 'Alfredo 2', artist: 'Freddie Gibbs & The Alchemist', videoId: 'dvnNeQzhmjs', genre: 'Gangsta Rap, Jazz Rap, Drumless, Boom Bap', soundsLike:'Alfredo but again.', desc: 'Clipse took the crown this year for a lot of people as hip hop album of the year, and it’s very deserving. But for my money, Freddie Gibbs and The Alchemist reuniting for one more main course is the one. I know The Alchemist is on the edge of being “overplayed” for a lot of dorks out there, but they are dorks, full stop. He remains the GOAT of hip hop production, and Freddie Gibbs might be on my Mount Rushmore of hip hop artists at this point.' },
{ rank: '7', cover: './albums2025/the-spiritual-sound.jpg', title: 'The Spiritual Sound', artist: 'Agriculture', videoId: 'EMcqAt0zI-w', genre: 'Blackgaze, Post-Black Metal, Avant-Garde Metal', soundsLike:'Beauty in pain.', desc: 'You ever play early access for the new Skate video game and listen to The Spiritual Sound by Agriculture over and over again? Well, I did once. And I gotta say: soaring through the air on a skateboard while the coolest blackgaze of the year seeps out of your speakers is a pretty good feeling.' },
{ rank: '6', cover: './albums2025/how-you-been.jpg', title: 'How You Been', artist: 'SML', videoId: 'kkKhsf2hGs8', genre: 'Avant-Garde Jazz, Jazz Fusion, Post-Rock', soundsLike:'Weirdo Jazz.', desc: 'Maybe my most “obscure” pick of the year, How You Been by SML is CAN meets Herbie Hancock meets the warm sun. A little krautrock and a lot of jazz fusion goes a long way and makes me wonder why this band only has 45k monthly listeners. This type of album is exactly the kind of album I expect to be looked back on years down the line as a good example that interesting music can still be made. Check this out if you wish Beak was a bit more funky.' },
{ rank: '5', cover: './albums2025/linked.jpg', title: 'Linked', artist: 'Martinou', videoId: 'zCbZfVXtf0s', genre: 'Ambient Techno, Minimal Techno', soundsLike:'Beauty backed with good drums.', desc: 'Sometimes albums are so simple and so beautiful, you have to imagine they were extremely difficult to make. I don’t know for sure, but that’s the impression I get when I listen to Linked by Martinou. There isn’t musical stress on these tracks. Most of them are pretty straightforward, but you couldn’t imagine these songs being any different. Whether Martinou made this in an afternoon or spent years crafting it, it’s clear they were locked in either way.' },
{ rank: '4', cover: './albums2025/hagen.jpg', title: 'HAGEN', artist: 'Titanic', videoId: '46-dKCULkWQ', genre: 'Chamber Jazz, Post-Rock, Experimental Rock', soundsLike:'Wild.', desc: 'Phew, boy, the opener on HAGEN by Titanic has no right to go as hard as it does. But here’s the thing: it keeps going! Just like a lot of the best albums ever made, these songs are unassuming at first, but if you give it a second or third spin, things really start to open up. Inventive and wild at times while always being interesting, this is a must for anyone who wants art rock to always impress.' },
{ rank: '3', cover: './albums2025/iconoclasts.png', title: 'ICONOCLASTS', artist: 'Anna von Hausswolff', videoId: '4rL3ATRkeKw', genre: 'Art Rock, Post-Rock, Neoclassical Darkwave', soundsLike:'Michael Gira without a cowboy hat.', desc: 'Yes sir, the Swedish are the Canadians of Not America. Anna von Hausswolff has been quietly making really cool neo-classical music for a while, but ICONOCLASTS has her in full Swans mode. Some of the biggest and most bombastic music of the year is on this album, and rarely does it quit. From the start, it is a full-on gate running for its life from some kind of evil, only to win out with its beauty and charm. I gotta say, Anna von Hausswolff is a real dynamite lady.' },
{ rank: '2', cover: './albums2025/under-tangled-silence.jpg', title: 'Under Tangled Silence', artist: 'Djrum', videoId: 'ma5TpX7_7bs', genre: 'UK Bass, Atmospheric Drum and Bass, Modern Classical', soundsLike:'Shifting glaciers.', desc: 'With what is probably the best sounding album technically of the year, Under Tangled Silence by DJRUM does everything Oneohtrix Point Never does with their production while building the most complex drums only Aphex Twin could match. I feel like Im living in a frozen world that is slowly melting under my feet listening to this. ' },
{ rank: '1', cover: './albums2025/faith.jpg', title: 'Faith', artist: 'Purelink', videoId: '_5xCxj76HCM', genre: 'Ambient, Ambient Dub', soundsLike:'Patient and Remarkable.', desc: 'I have learned in the past 4 or so years that I love Ambient Dub/Techno. For those who arent in the know: if you take Ambient music and make it sound like it could be made for the floor but was too cool to dance, you would have either Ambient Dub or Ambient Techno. Thats certainly a reductive way of describing the genres but Im no writer I am just a guy. Faith by Purelink is and will be as timeless edition to my life. Just like For Those Of You Who Have Never (And Also Those Who Have) by Huerco S, I am sure I am going to be spinning this one over and over again forever and ever, amen.' },

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
