<template>
    <div v-if="nsrc" class="section-title">
        <router-link to="/">home</router-link>
        <span style="color: rgb(43,46,40);"> |</span>
        <router-link to="/nsrc"><span style="color: rgb(43,46,40);"> no static record catalogue</span></router-link>
        <span style="color: white;"></span>
    </div>
    <div class="container">
        <div class="album-list-item">
            <div v-for="album in nsrc" :key="album.id" class="album-list">
                <router-link :to="{ name: 'nsrcDetail', params: { id: album.id } }">
                    <div class="album-entry">
                        <div class="album-details">
                            <div class="artist-name">#{{ album.nsrcListing }} &#x2022; {{ album.artistEntry }}</div>
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
            axios.get("/nsrc/nsrc.json").then((response) => {
                this.nsrc = response.data;
            });
        },
    },
};
</script>

<style scoped>
* {
    text-decoration: none;
    color: rgb(43,46,40);
    font-weight: 900;
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
    justify-content: start;
    margin-top: 0.5%;
    margin-left: 20%;
}

.album-list-item {
    position: relative;
    margin: 0 0px;
}

.album-list-item a {
    position: relative;
    font-size: 30px;
}

.album-list-item a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: #D66C56;
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.album-list-item a:hover::after {
    transform: scaleX(1);
}

@media (max-width: 700px) {
    .container {
        margin-top: 8%;
        margin-bottom: 640px;
    }

    .title {
        color: white;
        padding: 2.5%;
        margin-left: 5%;
        margin-right: 5%;
        font-size: 12px;
    }

    .container a {
        display: flex;
        justify-content: start;
        margin-top: .6rem;
        margin-left: 0%;
        font-size: 15px;
    }

    .album-list {
        display: flex;
        justify-content: start;
        margin-top: 0.5%;
        margin-left: 6%;
        font-size: 13px;
    }

    .section-title {
        font-size: 15px;
    }
}
</style>