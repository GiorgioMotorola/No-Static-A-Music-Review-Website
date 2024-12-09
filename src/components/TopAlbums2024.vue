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
            <div class="music-for"><span style="font-weight: 700;">SOUNDS LIKE: </span>{{ album.soundsLike }}</div>
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
  </div>
</template>


<script>
export default {
  name: 'AlbumList',
  data() {
    return {
      albums: [
        // Example data
        { rank: '50', cover: './albums2024/Bright-Future.png', title: 'Bright Future', artist: 'Adrianne Lenker', videoId: 'GmycsQ30obg', genre: 'Singer-Songwriter, Alt Country', soundsLike:'a campfire, a few drinks, a few friends and wearing really cool cowboy hats. ', desc: 'Big Thief was a group I didn\'t get at first. Around the time UFOF and Two Hands came out, I would see rave reviews by every publication, see their albums on the display wall at my local record stores, and listen to friends talk ad nauseam about how great they were. To me, they were just a folksy indie rock band with a nice-sounding lead singer. But around the time Dragon New Warm Mountain I Believe in You came out, I was hooked. I finally got it. The band wasn\'t just a nice voice and some sparse instrumentation... they were a dialed-in songwriting machine. Adrianne Lenker continues their crusade on the masses of showing off how they were born to be a musician with their newest solo project New Bright Future. A beautiful, heartbreaking and sometimes very catchy monster of an album that continues the tradition of Adrianne Lenker doing what they do best. ' },
        { rank: '49',cover: './albums2024/stvin.jpg', title: 'All Born Screaming', artist: 'St. Vincent', videoId: 'BWkxzcWt51w', genre: 'Art Rock, Art Pop, Neo-Psychedelia', soundsLike:'art shows, Johnathon Demme music documentaries and coffee shops that serve weird drinks.',  desc: 'Starting out her career as a member of Polyphonic Spree (good god remember those guys?) and as a backing member of Sufjan Stevens\' band, Anne Clark aka St. Vincent continues to write angular art pop that David Byrne would kill to have written. Her latest album is her most engaging and wild, with big and loud guitar solos slicing through bright choruses layered like angel harmonies that God would kill to have written. But God wouldn\'t dare because St. Vincent would most likely beat God up first. All I am saying is if there was a fight between Anne Clark and any being, I would confidently bet on her walking away with maybe a scratch and a handful of cool artsy songs for her next album. St. Vincent lives in our hearts and she lives in my walls help me I am terrified.' },
        { rank: '48',cover: './albums2024/chrom.jpg', title: 'CHROMAKOPIA', artist: 'Tyler, The Creator', videoId: '16KSivdIGjQ', genre: 'West Coast Hip Hop, Experimental Hip Hop', soundsLike:'a fancy persons party you would see in a tv show where everyone is wearing nice jackets and holding drinks that look way too bright.',  desc: 'Tyler, the Creator has come a really, really reaaaaalllly long way from his days as the deep-voiced, cockroach-eating leader of Odd Future. He has done the opposite of what most artists do and put out not-so-great solo albums for a number of years and then, as if a light switch was snapped, became one of the most interesting and engaging Hip Hop artists to do it. On his new effort, he writes bold marching band beat mini movies built to withstand an atomic bomb. Or a cherry bomb, I guess in this case. He has taken the idea of an album rollout, which in my opinion can often come off as a narcissistic endeavor, and creates new characters like he is Mike Myers but not Canadian and with fewer silly voices but still brings something unique to the table."' },
        { rank: '47',cover: './albums2024/inwaves.png', title: 'In Waves', artist: 'Jamie xx', videoId: 'xeKSdJqFM6o', genre: 'House, Future Garage, UK Bass', soundsLike:'a house party at 1am where everyone is drunk but not too drunk to puke everywhere.',  desc: 'House producer extraordinaire Jamie xx returns after nearly ten years (cue Jeremy Piven from Grosse Pointe Blank shouting \"TEN YEARS! TEN\") to give us something that might not be superior to In Colour but certainly ain\'t something you would kick outta bed for eating crackers. As a matter of fact, if In Colour didn\'t exist, this album would have been talked about much more this year. But that\'s what happens when you take your time and try to follow up a masterpiece. Regardless, this album is a fun, texture-rich house album that\'s gonna get even those who aren\'t fans of electronic music tapping their toes. Just listen to Baddie on the Floor and tell me that song isn\'t gonna be on your running playlist for the next lifetime.' },
        { rank: '46',cover: './albums2024/manning.png', title: 'Manning Fireworks', artist: 'MJ Lenderman', videoId: 'YeGujHpGUIs', genre: 'Alt-Country, Slacker Rock', soundsLike:'a warm summer night on a porch drinking bourbon',  desc: 'Our beloved zoomers\' answer to Jeff Tweedy comes in the form of a man who has a funny face. Good thing that face makes him money. MJ Lenderman has been combining early Wilco with Pavement but with a small dash of Midwest Emo for quite some time and his new album is proof it\'s working. These are songs that would have fit in perfectly on Car Wheels on a Gravel Road by Lucinda Williams. They hang in the air like dust in a sunbeam or some other dirt road poetry this guy would lazily drip out of his mouth during a slide guitar solo. This guy is either gonna end up with a cult following or put something out that will have a world-shaking impact. But for now, just sit in a chair with some cheap bourbon and listen.' },
        { rank: '45',cover: './albums2024/jpeg.png', title: 'I LAY DOWN MY LIFE FOR YOU', artist: 'JPEGMAFIA', videoId: 'Ua_xNmwNbqY', genre: 'Experimental Hip Hop, Hardcore Hip Hop', soundsLike:'scaring the hoes',  desc: '\"JPEGMAFIA sounds like a computer\" would be a hilarious insult from an old grandpa if it wasn\'t sort of true. Peggy has spent the last 17 or so years making a mess sound incredible. He could have just gone the Alchemist route and made beats for Experimental Hip Hop artists and gone down as one of the greatest to ever do it. But not one to rest on his laurels, (I assume. I don\'t know the guy) he takes it a step further and pairs his beats with bars that sound lifted out of a long-forgotten 4chan thread. This new one has him mixing what he does best with rock samples and makes it work somehow. It\'s hard to make Rap Rock work but if one guy could do it, it\'s Peggy.' },
        { rank: '44',cover: './albums2024/35.png', title: '3 + 5', artist: 'Melt-Banana', videoId: 'ix_lYiFzMw0', genre: 'Noise Rock, Hardcore Punk, Experimental Rock', soundsLike:'the basement of your favorite anime store where they sell blood',  desc: 'I am not an anime fan, not even a little bit. It might be my age or the fact that animated content never really did it for me outside of when I was 5 years old and loved Teenage Mutant Ninja Turtles, but no man ever steps in the same river twice, for it\'s not the same river and he\'s not the same man. That being said, I am a weeb for Japanese music: all forms of Jazz, City Pop, Metal, Punk, Ambient... it all taps right into my Q zone. Melt Banana sounds like one of those J Pop songs you would hear in your favorite anime about a guy who can... I don\'t know, eat a lot of hot dogs and turn into a hot dog superhero or something... and put it at a noise rock fever pitch. Melt Banana has ruled and will continue to rule. This new album is a testament to that.' },
        { rank: '43',cover: './albums2024/allhell.jpg', title: 'All Hell', artist: 'Los Campesinos!', videoId: 'kk4UCP9vlA0', genre: 'Post-Punk Revival, Midwest Emo, Art Rock ', soundsLike:'meeting old friends after 10 years and counting the grey hairs on their head.',  desc: 'Los Campesinos! and I go way back. I was on board when they started getting coverage on Pitchfork and have at least listened to their new releases once or twice since. That being said, after Romance Is Boring, their albums could have been added to that list of things that are boring. They were still fine enough efforts, but it felt like the magic was gone. But baby, we are so back. These Welsh goofballs figured it out. It\'s hard to age in a world that\'s always changing, but it\'s even harder to figure out how to continue fitting in. But Los Campesinos somehow worked it all out and made an album that feels like a sore back and being 21 again.' },
        { rank: '42',cover: './albums2024/boldy1.jpg', title: 'Across The Tracks', artist: 'Boldy James & Conductor Williams', videoId: 'sSD_YS9FZjI', genre: 'Gangsta Rap, Boom Bap', soundsLike:'night time on a road trip. Its cold outside but the heat in the car works just fine. ',  desc: 'Boldy James is my guy right now. The patrons over at AOTY seem to think the guy releases too much music, but if that were the case, how will I get my two to three Boldy James albums a year if he chills out? I know, familiarity breeds contempt and all that, but Boldy is constantly working with different producers trying to carve his smooth, deadpan flow right into the side of their beats, so every release often feels fresh. He released two albums this year, and both earned a spot on my list. I am sure he is very happy to hear that. Him and I are good friends. Just kidding.' },
        { rank: '41',cover: './albums2024/whylawd.jpg', title: 'WHY LAWD?', artist: 'NxWorries', videoId: 'T741gjLy0LM', genre: 'Contemporary R&B, West Coast Hip Hop, Psychedelic Soul, Smooth Soul', soundsLike:'a smooth car ride thru a neon painted city',  desc: 'Do you guys remember the FlyLo radio station in GTA V? Man, I spent days of my very unimpressive life driving around listening to that station over and over again. Flying Lotus has a way of digging deep into what makes a song soulful, ripping the guts out and rearranging them into something bigger than the sum of its parts so giving him the authority to currate his own radio station is kind of a no brainer. FlyLo is not part of NxWorries but when producer Knxwledge and artist Anderson .Paak get together, it reminds me deeply of the feeling I had listening to that radio station driving around some beat up car I stole off of some old lady and that is truly a special feeling. ' },
        { rank: '40',cover: './albums2024/sam.jpg', title: 'Samurai', artist: 'Lupe Fiasco', videoId: 'MTMyoVt5GHs', genre: 'Jazz Rap, Abstract Hip Hop', soundsLike:'what the inside of a backpack rappers backpack sounds like but a little better',  desc: 'The reason artists of any type fall so hard from grace is because they find their lane and stay in it until the car breaks down. The reason Lupe Fiasco is still cruising along is his ability to try new stuff. Sometimes it works and sometimes it doesn\'t. This album absolutely works. At this point I assume you know the conceptual wrap for this project, but just in case you don\'t, here it is: This album is \"what if Amy Winehouse but she was a battle rapper?\" That\'s it. It\'s a ridiculous premise but Lupe makes it work very well. It\'s funny enough to be interesting and the album sounds great enough to keep you around. I can\'t wait until Westside Gunn writes his album about Britney Spears becoming a member of the Costco guys.' },
        { rank: '39',cover: './albums2024/healer.jpg', title: 'The Healer', artist: 'Sumac', videoId: '2VdGdQ6MtXc', genre: 'Atmospheric Sludge Metal, Avant-Garde Metal', soundsLike:'see the long winded, gross first part of the album description above',  desc: 'Imagine if the Melvins decided to go all in on what it means to make Sludge Metal music. They took the riffs deeper, made them slow forever, and then threw them inside of a swamp made of black sticky goo, blended it up, and then fed it to their amps. Then they took those amps and ate them and did a number two inside of that swamp again... okay, this analogy has gone too deep into the woods, but I am sure you get what I mean. This album is HEAVY so make sure your bass is up and your butt has something to hold on to.' },
        { rank: '38',cover: './albums2024/dtimes.png', title: 'Dark Times', artist: 'Vince Staples', videoId: '-VjAeaGu5x4', genre: 'Conscious Hip Hop, West Coast Hip Hop', soundsLike:'a glass of wine in a clean home thats well lit, being at peace with everything',  desc: 'Like most of the other hip hop artists on this list, Vince Staples isn\'t one to stay in one spot. The only difference between him and the other guys is he makes it look super easy. He almost sounds bored sometimes. But that\'s kind of his thing. He doesn\'t give a freaking crap about anything! I think a lot of people think they are going through life with no regard for anything or anyone, but if we are being honest with ourselves, we have plenty we care about. I don\'t know if that\'s the case for Vince Staples. But that\'s what makes him so appealing. He is the guy we all want to be, effortlessly making something great and then going home and probably just hanging out on his couch watching sports or The Office or something.' },
        { rank: '37',cover: './albums2024/highway.jpg', title: 'Highway Prayers', artist: 'Billy Strings', videoId: 'oTF-fD7eVcU', genre: 'Progressive Bluegrass', soundsLike:'a good ol hoedown in a barn thats on a different planet',  desc: 'For a few years of my life, I would go to this Folk and Bluegrass festival called Whispering Beard with some friends on what was usually the hottest days of the year. It was sweaty and exhausting, but it was always the high point of that year. The beer tasted better, my friend Connor would drink a jug of wine with hopes to be asked on stage to play a jug solo, and the creek water felt nice on my gross feet. Any time I listen to bluegrass, it takes me back to that time. Highway Prayers is like that feeling distilled into a grain alcohol that\'s strong but smooth. But don\'t drink too much or you might join a jug band! (Also, alcohol should be used sparingly; it\'s very bad for you.)' },
        { rank: '36',cover: './albums2024/fearless.png', title: 'Fearless Movement', artist: 'Kamasi Washington', videoId: 'nxMolO9CEaU', genre: 'Spiritual Jazz, Jazz Fusion', soundsLike:'a warm fireplace on a snowy Christmas Eve',  desc: 'Jazz isn\'t dead. Sure, it\'s not the dominating musical force it may have been in the early days of modern day America, but there are still artists out there willing to put out challenging jazz music for people who are into that sort of thing. Kamasi Washington has been and still is one of those guys. On Fearless Movement, he attempts to modernize the idea of jazz by interspersing and smashing other genres into what is considered the thinking man\'s genre. He also has Andre 3000 playing the dang flute on this thing, which for my money is enough to make me listen.' },
        { rank: '35',cover: './albums2024/theart.jpg', title: 'Tarantula Heart', artist: 'Melvins', videoId: 'Fsd8gDGSSKU', genre: 'Sludge Metal', soundsLike:'See that description for Sumacs The Healer but with more swing than sludge',  desc: 'You gotta love the Melvins. They have essentially done a variation on a theme for their entire 40-year career. Now, I know I have spent a lot of time talking about how in order for an artist or band or whatever to stay interesting and relevant, they have to try new things, but the Melvins are the exception to the rule. If it ain\'t broke, fix it. And if it is broke, add more fuzz and reverb. They are an evergreen in Rock and Metal music and can always be a sturdy post to lean on for every release. Not much else to say, just the Melvins doing what they do best.' },
        { rank: '34',cover: './albums2024/silence.jpg', title: 'The Closest Thing to Silence', artist: 'Ariel Kalma, Jeremiah Chiu & Marta Sofia Honer', videoId: 'b1B2dukuz_Y', genre: 'Ambient, Progressive Electronic', soundsLike:'Blade Runners cooler cousin, Blade Walker',  desc: 'Ambient music is one of my favorite genres of all time. I understand not everyone gets it, and that\'s fine, but allow me to try and sell it: Imagine all the movies you have watched that have soundtracks with what you might consider incidental music. Blade Runner, Drive, The Social Network, The Firm, etc. Now replace that soundtrack with something like Sugar Ray or Mighty Mighty Bosstones. While on an ironic level, that might be a funny idea, it certainly would change the vibe, right? So take that hidden feeling ambient music gives you while watching a classic movie and take away the movie. Now ambient is the movie now. I honestly don\'t know where I was going with this. This album is great. Awesome texture. You\'ll love it if you love Ambient and Progressive Electronic.' },
        { rank: '33',cover: './albums2024/mind.jpg', title: 'Mind Yo Fucking Business', artist: 'RXKNephew', videoId: 'tNXywRs6xMQ', genre: 'Hardcore Hip Hop', soundsLike:'The Comedy Store but actually funny. Take that, Pauly Shores ugly mom. ',  desc: 'Neph is a deeply funny guy. The way he raps, what he raps about... he could headline clubs. But his music isn\'t a joke. It might be funny like They Might Be Giants, but like They Might Be Giants, the primary focus is on how it sounds. You may laugh at song titles like “Punch Yo Father Out,” “Imma Drink Everyday,” and “Put You In A Wheelchair,” but it\'s going to be catchy and it\'s going to be fun. It\'s hard to say where RXKNephew will be in 5 years, but I wouldn\'t be shocked if it wasn\'t on the year-end list of every publication that has slept on him for so long. Also, as a side note, if you don\'t got that dawg in you, maybe sit this one out.' },
        { rank: '32',cover: './albums2024/three.png', title: 'Three', artist: 'Four Tet', videoId: 'DGaKVLFNWzs', genre: 'Microhouse, Folktronica, Ambient', soundsLike:'a nice spring morning jog where your pace is perfect',  desc: 'Four Tet is another evergreen. He is like the Melvins in the fact that whatever he decides to do, I will be there first thing and I will probably like it. The only difference is what he does is delicate and thoughtful. Upon first listen of any Four Tet album, you dig up a few things here and there that might be of use, but if you keep digging, you\'ll strike gold. Or oil. Or an old wrestling action figure you buried when you were a kid because the character died in your fake wrestling federation. The balancing act Four Tet performs between confident experimentation and pop-like hooks is admirable and he can\'t keep getting away with it.' },
        { rank: '31',cover: './albums2024/liquidmike.jpg', title: 'Paul Bunyan\'s Slingshot', artist: 'Liquid Mike', videoId: 'lltlvniBPkI', genre: 'Power Pop, Pop Punk', soundsLike:'the friday evening before getting to a house party where everyone there is someone you love',  desc: 'Hello, my name is Liquid Mike. Just kidding. The band is called Liquid Mike. I am not sure if anyone in the band is actually named Mike or if all of the members are named Mike, but it doesn\'t matter. This is a power pop titan. It\'s 25 minutes and some change worth of some of the catchiest stuff that has come out this year. Big hooks, crunchy and cool-sounding guitars, and the replayability of a Teenage Fanclub or Fountains of Wayne album. Dashed in with a tiny bit of pop punk, and you have a record that will live on and stand tall among the Joyce Manors of the world.' },
        { rank: '30',cover: './albums2024/leadership.jpg', title: 'Penalty of Leadership', artist: 'Boldy James & Nicholas Craven', videoId: 'sPHkRyiuu-w', genre: 'Gangsta Rap, Drumless', soundsLike:'Just go listen to the guy already will ya?',  desc: 'This is the second Boldy James album. Its great. What do you want from me?' },
        { rank: '29',cover: './albums2024/cool.png', title: 'Cool World', artist: 'Chat Pile', videoId: '6T8s1G3ku2I', genre: 'Noise Rock, Sludge Metal', soundsLike:'dissonant, death, destruction, autumn time :)',  desc: 'Hello, I Am Dog Now. Just kidding. I don\'t know if anyone in Chat Pile is a dog for real, but it really doesn\'t matter. Chat Pile is a newer group that seems to be getting darker and heavier. And as Garth Brooks would say after joining Facebook for the first time, “I like that.” They have the confidence of the dumbest lug head you have ever met in your life with the talent of the masters of their craft. And as Garth Brooks would further say after joining Facebook for the first time, “I really like that.” So if this is the future of sludge metal and punk, then I say “let the sludge metal and punk begin” or something.' },
        { rank: '28',cover: './albums2024/action.jpg', title: 'JOHANN SEBASTIAN BACHLAVA THE DOCTOR', artist: 'Action Bronson', videoId: 'R3jqt_s9MpU', genre: 'East Coast Hip Hop, Drumless, Jazz Rap', soundsLike:'a smooth afternoon with people who are a bit cooler than you are',  desc: 'He cooks! He Raps. He says funny crap! He is the perfect example of someone who probably wouldnt have left New York if youtube didnt exist but I sure am glad it does. Action Bronson is a pretty lovable guy. Sure, his album output can sometimes be a bit spotty but when he hits, he hits. Furthermore, the past few years for him has seemed like sort of a rebirth. He has gotten into better shape, a bit more of the limelight within the mainstream world and has come back to making really cool music. I just hope he doesnt read this because if he would probably beat me up. ' },
        { rank: '27',cover: './albums2024/upper.jpg', title: 'Upper Space', artist: 'DJ Rude One', videoId: 'K2FWndhR3aY', genre: 'Hip-Hop/Rap, Boom Bap', soundsLike:'what I imagine every New York basement studio sounds like',  desc: 'Full disclosure: I know DJ Rude One, or as my phone knows him: Rick. But if I didn\'t know this guy, this album would have still made my list. I love it when friends of mine go after something they want, and all the better when they make it work. DJ Rude One has worked with some of the biggest up-and-coming rappers and has given each and every one of them a sturdy stage made up of dark and grimy boom bap to do their thing on. This is his finest work yet. In all seriousness, if Rick doesn\'t blow up and act like he don\'t know me in a few years, I will eat my own hat.' },
        { rank: '26',cover: './albums2024/beak.jpg', title: '>>>>', artist: 'Beak>', videoId: 'IQ-tAOFvofU', genre: 'Krautrock, Post-Rock', soundsLike:'a trip in space on a spaceship with Neu! and CAN',  desc: 'Made up of members of Portishead and Sensational Space Shifters, Beak> takes krautrock and brings it into the present by ironically making it sound like a lost post-rock classic from the 60s. This one is patient, spacy, and lives inside a large room, bouncing around nothing and everything at the same time. That might be too busy of a description to fully grasp what I am getting at, but it\'s my list, and I\'ll do whatever I want to. No one is reading this anyway. Maybe TJ, maybe my Dad. Hey guys, hope your day is nice.' },
        { rank: '25',cover: './albums2024/something.jpg', title: 'Something in the Room She Moves', artist: 'Julia Holter', videoId: 'D36Zt7yy2OY', genre: 'Art Pop, Chamber Jazz', soundsLike:'a perfume that is classy but you can\t quite nail down what it smells like',  desc: 'If Björk, Harold Budd, and Sade all had a baby, then that would be big news because I\'m not sure how that would work. Unless they adopted a baby. Ok, let\'s say if Björk, Harold Budd, and Sade pooled their money and adopted a baby from the guy from Blue Nile, it would be this album. But babies can\'t be albums. So, I guess if they took that baby and that baby grew up to write this album, it would be this album. Yeah, that\'s what I meant to write initially. Also, that baby I guess would have to be Julia Holter.' },
        { rank: '24',cover: './albums2024/city.jpg', title: 'City Swamp', artist: 'Jake Long', videoId: 'pHKn9F_NwYQ', genre: 'Jazz Fusion, Jazz-Funk', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '23',cover: './albums2024/night.jpg', title: 'Night Palace', artist: 'Mount Eerie', videoId: 'sNJ46h1PS_g', genre: 'Avant-Folk, Slacker Rock, Post-Rock', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '22',cover: './albums2024/lightdeath.png', title: 'Light Of Death', artist: 'Umbra Vitae', videoId: 'BkxjiJKn-4k', genre: 'Deathcore, Death Metal', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '21',cover: './albums2024/nail.jpg', title: 'Every Bridge Burning', artist: 'Nails', videoId: 'PAmBKEDUG5M', genre: 'Grindcore, Powerviolence', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '20',cover: './albums2024/ka.png', title: 'The Thief Next to Jesus', artist: 'KA', videoId: 'l4oPd6lGFK0', genre: 'Abstract Hip Hop, Drumless, East Coast Hip Hop', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '19',cover: './albums2024/father.jpg', title: 'Mahashmashana', artist: 'Father John Misty', videoId: '73qfO13cjns', genre: 'Soft Rock, Baroque Pop, Chamber Pop, Traditional Pop ', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '18',cover: './albums2024/storm.jpg', title: 'Cometh the Storm', artist: 'High on Fire', videoId: 'cWBTQF3fY3Q', genre: 'Sludge Metal, Stoner Metal', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '17',cover: './albums2024/cutting.jpg', title: 'Cutting the Throat of God', artist: 'Ulcerate', videoId: 'UgpXvSzaqjo', genre: 'Dissonant Death Metal, Technical Death Metal', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '16',cover: './albums2024/nohands.png', title: 'NO HANDS', artist: 'Joey Valence & Brae', videoId: 'iUGclRjzfm4', genre: 'Hardcore Hip Hop, East Coast Hip Hop', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '15',cover: './albums2024/Ekathe.jpg', title: '1686', artist: 'Ekathe', videoId: 'repNXDF4t4M', genre: 'Jazz Fusion ', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '14',cover: './albums2024/norther.jpg', title: 'Norther', artist: 'Ex-Easter Island Head', videoId: 'rIx0QWwuG8o', genre: 'Ambient, Drone', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '13',cover: './albums2024/searching.jpg', title: 'Searching', artist: 'James Devane', videoId: 'eT6MF0K-qNM', genre: 'Ambient Dub', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '12',cover: './albums2024/freddie.jpg', title: 'You Only Die 1nce', artist: 'Freddie Gibbs', videoId: 'Vlp0__rHyZU', genre: 'Trap, Boom Bap, Jazz Rap, Conscious Hip Hop ', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '11',cover: './albums2024/maze.jpg', title: 'Maze Envy', artist: 'Civerous', videoId: 'qM6K9vYYWTg', genre: 'Death Doom Metal, Death Metal', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '10',cover: './albums2024/blood.jpg', title: 'Absolute Elsewhere', artist: 'Blood Incantation', videoId: 'tz_YBkl3QUw', genre: 'Progressive Death Metal', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '9',cover: './albums2024/Muuntautuja.jpg', title: 'Muuntautuja', artist: 'Oranssi Pazuzu', videoId: 'fos2ThPMU0k', genre: 'Avant-Garde Metal, Psychedelic Rock', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '8',cover: './albums2024/Endlessness.jpg', title: 'Endlessness', artist: 'Nala Sinephro', videoId: '_dWOVhYElT4', genre: 'Space Ambient, Jazz Fusion', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '7',cover: './albums2024/spirit.jpg', title: 'YOU\'LL HAVE TO LOSE SOMETHING', artist: 'SPIRIT OF THE BEEHIVE', videoId: 'lNNDJyYUH0Y', genre: 'Indie Pop, Neo-Psychedelia', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '6',cover: './albums2024/gnx.png', title: 'GNX', artist: 'Kendrick Lamar', videoId: 'U8F5G5wR1mk', genre: 'West Coast Hip Hop', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '5',cover: './albums2024/stab.jpg', title: 'Manual Manic Procedures', artist: '200 Stab Wounds', videoId: 'B9CJxE2Qp-E', genre: 'Death Metal', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '4',cover: './albums2024/mach.jpeg', title: '#RICHAXXHAITIAN', artist: 'Mach-Hommy', videoId: 'jtyxeRz37Kg', genre: 'Abstract Hip Hop, East Coast Hip Hop', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '3',cover: './albums2024/magda.jpg', title: 'Imaginal Disk', artist: 'Magdalena Bay', videoId: 'PE6yDzNQ0Ac', genre: 'Synthpop, Neo-Psychedelia', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '2',cover: './albums2024/vampire.png', title: 'Only God Was Above Us', artist: 'Vampire Weekend', videoId: 'Ns7umApdwOY', genre: 'Indie Rock, Chamber Pop', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { rank: '1',cover: './albums2024/newsound.png', title: 'The New Sound', artist: 'Geordie Greep', videoId: 'A4EU_0vFzuU', genre: 'Jazz-Rock, Progressive Rock, Art Rock', soundsLike:'',  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
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

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
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
  border-bottom: .5px solid #949292;
  margin-top: 6%;
  margin-bottom: 6%;
  width: 100%;
}

@media only screen and (max-width: 1000px) {
  .main-title {
    font-size: 50px;
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
}


</style>