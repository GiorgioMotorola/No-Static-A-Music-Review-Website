<template>
    <div v-if="album" class="section-title"><router-link to="/">home</router-link> <span style="color: white;">|</span>
        <router-link to="/nsrc"> no static record catalogue</router-link> <span style="color: white;"></span>
        <router-link to="/albums"><span style="color: #ECDBBA; text-transform: lowercase;">{{
            album.album }}</span></router-link>
    </div>
    <div class="album-details-container">
        <div v-if="album">
            <div class="img-container">
                <div class="artist-and-number">
                    <div class="artist">{{ album.artistEntry }}</div>
                    <div class="album-number">{{ album.nsrcId }}</div>
                </div>
                <img :src="album.imageOne" alt="Album Cover">
            </div>
            <div class="write-up">
                <div class="intro">{{ album.introParagraph }}</div>
                <div class="side-one">{{ album.sideOneParagraph }}</div>
                <div class="side-two">{{ album.sideTwoParagraph }}</div>
                <div class="name-and-image-writeup">{{ album.nameAndImageParagraph }}</div>
                <div class="wrap-up">{{ album.wrapUpparagraph }}</div>
            </div>
            <div class="front-back-img">
                <img :src="album.albumImageFront" alt="Album Cover">
                <img :src="album.albumImageBack" alt="Album Cover">
            </div>
            <div class="spotify-container">
                <iframe :src="album.spotifyPlaylistLink" frameborder="0" width="100%" height="352" frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>
            </div>

        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>


<script>
import axios from "axios";

export default {
    name: "nsrcDetail",
    props: {
        nsrcId: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            album: null
        };
    },
    mounted() {
        this.fetchAlbum(this.nsrcId);
    },
    methods: {
        fetchAlbum(nsrcId) {
            axios.get(`nsrc.json`).then((response) => {
                const album = response.data.find(album => album.nsrcId === nsrcId);
                if (album) {
                    this.album = album;
                } else {
                    console.error(`Album with ID ${nsrcId} not found`);
                }
            }).catch(error => {
                console.error('Error fetching album:', error);
            });
        },
    },
};
</script>

<style scoped>
.section-title {
    padding: 10px;
    margin-left: 1rem;
    font-size: 30px;
    color: #ECDBBA;
}

.section-title a {
    color: #D66C56;
    text-decoration: none;
}

.img-container {
    color: white;
    display: flex;
    flex-direction: row;
    padding: 5%;
    justify-content: space-evenly;
    align-items: center;
}

.artist-and-number {
    display: flex;
    flex-direction: column;
}

.artist {
    text-decoration: underline;
}

.write-up {
    margin: 5%;
    color: #c9c8c8;
    font-size: 30px;
}

.intro {
    margin-bottom: 1.5rem;
    text-indent: 100px;
    font-family: 'Courier New', Courier, monospace;
}

.side-one {
    margin-bottom: 1.5rem;
    text-indent: 100px;
    font-family: 'Courier New', Courier, monospace;
}

.side-two {
    margin-bottom: 1.5rem;
    text-indent: 100px;
    font-family: 'Courier New', Courier, monospace;
}

.name-and-image-writeup {
    margin-bottom: 1.5rem;
    text-indent: 100px;
    font-family: 'Courier New', Courier, monospace;
}

.wrap-up {
    margin-bottom: 1.5rem;
    text-indent: 100px;
    font-family: 'Courier New', Courier, monospace;
}
</style>
