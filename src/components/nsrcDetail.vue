<template>
    <div v-if="nsrc" class="section-title">
        <router-link to="/">home</router-link>
        <span style="color: white;"> |</span>
        <router-link to="/nsrc"> no static record catalogue</router-link>
        <span style="color: white;"> | </span>
        <router-link to="/"><span style="color: #ECDBBA; text-transform: lowercase;">#{{ nsrc.nsrcListing
                }}</span></router-link>
    </div>
    <div class="album-details-container">
        <div v-if="nsrc">
            <div class="img-container">
                <img :src="nsrc.imageOne" alt="Album Cover">
                <div class="artist-and-number">
                    <div class="artist">{{ nsrc.artistEntry }}</div>
                    <div class="album-number">#{{ nsrc.nsrcListing }}</div>
                </div>
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
            <div class="spotify-wrapper">
                <div class="spotify-container">
                    <iframe :src="nsrc.spotifyPlaylistLink" frameborder="0" width="100%" height="100%" frameBorder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"></iframe>
                </div>
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
        id: {
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
        console.log("id:", this.id);
        this.fetchAlbum(this.id);
    },
    methods: {
        fetchAlbum(id) {
            axios.get(`/nsrc/nsrc.json`)
                .then((response) => {
                    const albums = response.data;
                    const nsrc = albums.find(album => album.id === parseInt(id));
                    if (nsrc) {
                        this.nsrc = nsrc;
                    } else {
                        console.error(`Album with ID ${id} not found`);
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
    flex-direction: column;
    padding: 3%;
    justify-content: space-evenly;
    align-items: center;
}

.img-container img {
    border: 2.5px solid rgb(0, 0, 0);
    border-radius: 1.5%;
    max-width: 500px;
}

.artist-and-number {
    display: flex;
    flex-direction: column;
    font-size: 40px;
    text-align: center;
    margin-top: 5%
}

.artist {
    text-decoration: underline;
    font-size: 45px;
    text-decoration: underline 2px #ECDBBA;
    text-underline-offset: 5px;
    color: #D66C56;
}

.album-number {
    font-size: 30px;
    text-align: center;
    color: rgb(86, 97, 97);
}

.write-up {
    color: #c9c8c8;
    font-size: 20px;
    margin-left: 10%;
    margin-right: 10%;
    line-height: 1.2;
    border-top: 1px solid rgba(117, 114, 114, 0.164);
    border-bottom: 1px solid rgba(117, 114, 114, 0.164);
}

.intro {
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
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

.front-back-img {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 7rem;
}

.spotify-wrapper {
    position: relative;
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.spotify-container {
    width: 60%;
    height: 50vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}



@media (max-width: 1000px) {

    .img-container {
        flex-direction: column;
    }

    .img-container img {
        margin-top: 30px;
        max-width: 500px;
        max-height: 500px;
    }

    .artist-and-number {
        display: flex;
        flex-direction: column;
    }

    .artist {
        text-decoration: underline;
    }

    .write-up {
        color: #c9c8c8;
        margin-top: 0rem;
        font-size: 20px;
        padding: 6%;
        margin: 1%;
        line-height: 1.2;
        border-top: 1px solid rgba(117, 114, 114, 0.164);
        border-bottom: 1px solid rgba(117, 114, 114, 0.164);
    }

    .spotify-wrapper {
        position: relative;
        width: 100%;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .spotify-container {
        width: 80%;
        height: 40vh;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

@media (max-width: 700px) {

    .img-container img {
        max-width: 300px;
    }

    .section-title {
        font-size: 13px;
    }

    .front-back-img {
        display: flex;
        justify-content: center;
        gap: 50px;
        margin-top: 7rem;
        flex-direction: column;
    }

    .front-back-img {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .front-back-img img {
        max-width: 325px;
    }

    .spotify-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
    }

    .write-up {
        color: #c9c8c8;
        margin-top: 0rem;
        font-size: 16px;
        padding: 6%;
        margin: 1%;
        line-height: 1.2;
        border-top: 1px solid rgba(117, 114, 114, 0.164);
        border-bottom: 1px solid rgba(117, 114, 114, 0.164);
    }

    .spotify-wrapper {
        height: 50vh;
    }

    .spotify-container {
        width: 90%;
        height: 40vh;
    }
}
</style>
