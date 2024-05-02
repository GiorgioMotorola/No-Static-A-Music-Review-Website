<template>
    <div v-if="nsrc" class="section-title">
        <router-link to="/">home</router-link>
        <span style="color: white;">|</span>
        <router-link to="/nsrc"> no static record catalogue</router-link>
        <span style="color: white;"></span>
        <router-link to="/"><span style="color: #ECDBBA; text-transform: lowercase;">{{ nsrc.album
                }}</span></router-link>
    </div>
    <div class="album-details-container">
        <div v-if="nsrc">
            <div class="img-container">
                <div class="artist-and-number">
                    <div class="artist">{{ nsrc.artistEntry }}</div>
                    <div class="album-number">{{ nsrc.nsrcId }}</div>
                </div>
                <img :src="nsrc.imageOne" alt="Album Cover">
            </div>
            <div class="write-up">
                <div class="intro">{{ nsrc.introParagraph }}</div>
                <div class="side-one">{{ nsrc.sideOneParagraph }}</div>
                <div class="side-two">{{ nsrc.sideTwoParagraph }}</div>
                <div class="name-and-image-writeup">{{ nsrc.nameAndImageParagraph }}</div>
                <div class="wrap-up">{{ nsrc.wrapUpparagraph }}</div>
            </div>
            <div class="front-back-img">
                <img :src="nsrc.albumImageFront" alt="Album Cover">
                <img :src="nsrc.albumImageBack" alt="Album Cover">
            </div>
            <div class="spotify-container">
                <iframe :src="nsrc.spotifyPlaylistLink" frameborder="0" width="100%" height="352" frameBorder="0"
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
            nsrc: null
        };
    },
    mounted() {
        console.log("nsrcId:", this.nsrcId);
        this.fetchAlbum(this.nsrcId);
    },
    methods: {
        fetchAlbum(nsrcId) {
            axios.get(`/nsrc.json`)
                .then((response) => {
                    const albums = response.data;
                    const nsrc = albums.find(album => album.nsrcId === nsrcId);
                    if (nsrc) {
                        this.nsrc = nsrc;
                    } else {
                        console.error(`Album with ID ${nsrcId} not found`);
                    }
                })
                .catch(error => {
                    console.error('Error fetching album:', error);
                });
        }
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
