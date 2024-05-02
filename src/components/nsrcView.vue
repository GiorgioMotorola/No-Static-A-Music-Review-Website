<template>
    <div v-if="nsrc" class="section-title">
        <router-link to="/">home</router-link>
        <span style="color: white;"> |</span>
        <router-link to="/nsrc"><span style="color: #ECDBBA; "> no static record catalogue</span></router-link>
        <span style="color: white;"></span>
    </div>
    <div class="title">
        The No Static Record Catalogue is not real. But it's really fun. Artists with sizeable discographies have a
        secret album inside of them. NSRC aims to gather 10 tracks from these artists albums with senquencing, theme and
        mood in mind and deliver an album name, what the album cover may look like and a Spotify playlist if you choose
        to listen. Click an artist below to read.
    </div>
    <div class="container">
        <div class="album-list">
            <div v-for="album in nsrc" :key="album.nsrcId" class="album-list-item">
                <router-link :to="{ name: 'nsrcDetail', params: { nsrcId: album.nsrcId } }">
                    <div class="album-entry">
                        <div class="album-details">
                            <div class="artist-name">#{{ album.nsrcId }} - {{ album.artistEntry }}</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "nsrcView",
    data() {
        return {
            nsrc: [],
        };
    },
    mounted() {
        this.fetchAlbums();
    },
    methods: {
        fetchAlbums() {
            axios.get("nsrc.json").then((response) => {
                this.nsrc = response.data;
            });
        },
    },
};
</script>

<style scoped>
* {
    text-decoration: none;
    color: #D66C56;
}

.title {
    color: white;
    padding: 2%;
    margin-left: 15%;
    margin-right: 15%;
    font-size: 15px;
}

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

a {
    text-decoration: none;
}

.container {
    margin-top: 1%;
    margin-bottom: 650px;
}

.album-list {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-top: 0.5%;
    margin-left: 20%;
}

.album-list-item {
    position: relative;
    margin: 0 10px;
}

.album-list-item a {
    position: relative;
    font-size: 50px;
}

.album-list-item a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: white;
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.album-list-item a:hover::after {
    transform: scaleX(1);
}

@media (max-width: 600px) {
    .container {
        margin-top: 19%;
        margin-bottom: 480px;
    }

    .title {
        color: white;
        padding: 2.5%;
        margin-left: 5%;
        margin-right: 5%;
        font-size: 12px;
    }

    .container a {
        font-size: 30px;
    }

    .album-list {
        display: flex;
        justify-content: start;
        margin-top: 0.5%;
        margin-left: 10%;
        font-size: 13px;
    }

    .section-title {
        font-size: 15px;
    }
}
</style>