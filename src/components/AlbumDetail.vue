<template>
    <div v-if="album" class="section-title"><router-link to="/">home</router-link> <span style="color: rgb(43,46,40);">|</span>
        <router-link to="/albums"> albums</router-link> <span style="color: rgb(43,46,40);">|</span> <router-link
            to="/albums"><span style="color: rgb(43,46,40); text-transform: lowercase;">{{
                album.album }}</span></router-link>
    </div>
    <div class="album-details-container">
        <div v-if="album">
            <div class="album-artist">
                <div class="img-container">
                    <img :src="album.image" alt="Album Cover">
                    <div class="genre">{{ album.genre }}, {{ album.subGenre }} &nbsp;&#8226;&nbsp;{{ album.yearReleased
                        }}</div>
                <div class="album-cover-rating-container">
                <div class="cover-rating">Album Cover Rating: <span :style="{ color: ratingColor }" style="font-family: 'Courier New', Courier, monospace;">{{ album.albumCoverRating }}</span>/10</div>
            </div>
                </div>
                <div class="details">
                    <div class="album">{{ album.album }}</div>
                    <div class="artist">{{ album.artist }}</div>
                </div>
            </div>
            <div class="feeling">
                <div class="entry-number"><span style="color: #1e1e1e;">&#x2116; <router-link to="/albums">{{
                    album.entryNumber }}</router-link></span></div>
                <div class="puremood"><span style="color: #1e1e1e;">&#127796; <router-link to="/albums/puremoods">{{
                    album.puremood }}</router-link></span></div>
                <div class="season"><span style="color: #1e1e1e;">&#x2600; <router-link to="/albums/seasons">{{
                    album.season }}</router-link></span></div>
            </div>
            <div class="tracks">
                <div v-for="track in album.tracks" :key="track.trackNumber" class="track-item">
                    <div class="track-details">
                        <div class="track-number">{{ track.trackNumber }}</div>
                        <div class="track-info">
                            <div class="track-name">{{ track.trackName }}</div>
                            <div class="track-duration">{{ track.duration }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lyrics">
                &ldquo;{{ album.lyric }}&rdquo;
            </div>
            <div class="review-section">
                <div class="review">{{ album.review }}</div>
            </div>
        </div>
        <div v-else>
            <p class="load">Loading...</p>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "AlbumDetail",
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            album: null
        };
    },
    computed: {
        ratingColor() {
            const rating = parseInt(this.album.albumCoverRating);
            if (rating >= 1 && rating <= 3) {
                return '#1e1e1e'; 
            } else if (rating >= 4 && rating <= 6) {
                return '#1e1e1e'; 
            } else if (rating >= 7 && rating <= 10) {
                return '#1e1e1e'; 
            } else {
                return 'white'; 
            }
        }
    },
    mounted() {
        this.fetchAlbum(this.id);
    },
    methods: {
        fetchAlbum(id) {
            axios.get(`/albums.json`).then((response) => {
                const albums = response.data;
                const album = albums.find(album => album.id === parseInt(id));
                if (album) {
                    this.album = album;
                } else {
                    console.error(`Album with ID ${id} not found`);
                }
            }).catch(error => {
                console.error('Error fetching album:', error);
            });
        },
    },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    color: #1e1e1e;
}

.section-title {
    padding: 10px;
    margin-left: 1rem;
    font-size: 30px;
    color: rgb(43,46,40);
}

.section-title a {
    color: #D66C56;
    text-decoration: none;
}

.album-artist {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 5rem;
}

.artist {
    font-size: 30px;
    text-align: center;
    color: rgb(86, 97, 97);
    font-weight: 500;
}

.album {
    font-size: 45px;
    text-decoration: underline 2px rgb(43,46,40);
    text-underline-offset: 5px;
    text-align: center;
    color: #D66C56;
    font-weight: 600;
}

.genre {
    font-size: 14px;
    text-align: center;
    font-style: italic;
    color: rgb(43,46,40);
    margin-top: 1px;
    font-size: 12px;
}

.feeling {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 20px;
    margin-top: 5rem;
    margin-left: 20rem;
    margin-right: 20rem;
    margin-bottom: 8rem;
    border-top: 1px solid rgb(43,46,40);
    border-bottom: 1px solid rgb(43,46,40);
}

.album-cover-rating-container {
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    font-size: 20px;
    font-weight: 600;
}

.cover-rating {
    font-family: 'Courier New', Courier, monospace;
}

.puremood,
.season,
.entry-number {
    color: rgb(43,46,40);
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.puremood a,
.season a,
.entry-number a {
    text-decoration: none;
}

.puremood a:hover,
.season a:hover,
.entry-number a:hover {
    text-decoration: underline;
}

.tracks {
    font-size: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.tracks-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
    justify-content: center;
}

.track-item {
    flex-basis: calc(50% - 300px);
    margin: 10px;
    text-align: center;
    box-sizing: border-box;
}

.track-details {
    display: flex;
    align-items: center;
    font-weight: 500;
}

.track-name {
    color: rgb(43,46,40);
}

.track-number {
    font-size: 30px;
    color: #5479b4;
    font-weight: 500;
}

.track-info {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    gap: 15px;
}

.track-duration {
    margin-right: 5px;
    font-size: 13px;
    color: #5479b4;
    font-weight: 500;
}

.lyrics {
    display: flex;
    justify-content: center;
    margin-top: 150px;
    font-style: oblique;
    font-size: 25px;
    color: #6a6a69;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    margin-left: 3rem;
    margin-right: 3rem;
}

.review-section {
    margin-top: 50px;
    font-size: 20px;
    padding: 6%;
    margin-left: 2%;
    margin-right: 2%;
    line-height: 1.2;
    border-top: 1px solid rgb(43,46,40);
    border-bottom: 1px solid rgb(43,46,40);
    font-weight: 500;
}

.review {
    color: rgb(43,46,40);
    /* font-family: "IBM Plex Mono", monospace; */
    line-height: 1.5;
}


img {
    border-radius: 0%;
    margin-bottom: .2rem;
    max-height: 350px;
    min-height: 350px;
    min-width: 350px;
    max-width: 350px;
    border: 2px double;
    border-color: rgb(43,46,40);
}


@media (max-width: 1200px) {
    .tracks {
        flex-direction: column;
    }

    .album-details-container {
        margin-bottom: 100px;
    }

    .lyrics {
        font-size: 22px;
    }

}

@media (max-width: 1000px) {

    .feeling {
        margin-left: none;
        margin-right: none;
        border-top: none;
        border-bottom: none;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
        margin: 80px;
    }
}

@media (max-width: 600px) {

    .album-artist {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
    }

    .artist {
        font-size: 25px;
        text-align: center;
    }

    .album {
        font-size: 30px;
        text-underline-offset: 5px;
    }

    .genre {
        margin-top: -15px;
        margin-bottom: 50px;
        font-size: 10px;
        margin-top: 1px
    }

    .puremood,
    .season,
    .entry-number {
        font-size: 13px;

    }

    img {
        border-radius: 0%;
        margin-bottom: 1rem;
        max-height: 250px;
        min-height: 200px;
        min-width: 250px;
        max-width: 200px;
    }

    .tracks {
        font-size: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .tracks-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        justify-content: center;
    }

    .track-item {
        flex-basis: 100%;
        margin: 10px;
        text-align: center;
        box-sizing: border-box;
    }

    .track-details {
        display: flex;
        align-items: center;
    }

    .track-number {
        font-size: 25px;
    }

    .track-info {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        gap: 15px;
    }

    .track-duration {
        margin-right: 5px;
        font-size: 13px;
    }

    .lyrics {
        font-size: 16px;
        margin-top: 60px;
    }

    .review-section {
        margin-top: 4rem;
        font-size: 15px;
        padding: .5%;
        margin-left: 10%;
        margin-right: 10%;
    }

    .review {
        margin-top: 30px;
        margin-bottom: 30px;
        font-size: 13.9px;
        line-height: 1.65;
    }

    .section-title {
        font-size: 15px;
    }

    .album-cover-rating-container {
        font-size: 17px;
    }

}
</style>