<template>
    <div class="section-title"><router-link to="/">home</router-link>
        <span style="color: rgb(43,46,40);"> |</span>
        <router-link to="/albums/seasons"> seasons</router-link> <span style="color: rgb(43,46,40);">|</span>
        <span style="color: rgb(43,46,40); text-transform: lowercase;">&nbsp;{{
            season }}
        </span>
    </div>
    <div class="container">
        <div class="season-list-item">
            <div v-for="album in filteredAlbums" :key="album.id" class="season-list">
                <router-link :to="{ name: 'AlbumDetail', params: { season: season, id: album.id } }">
                    {{ album.artist }}&nbsp;&#8226;&nbsp;{{ album.album }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    props: ['season'],
    data() {
        return {
            allAlbums: [],
            seasonAlbums: [],
        };
    },
    mounted() {
        this.fetchAllAlbums();
    },
    methods: {
        fetchAllAlbums() {
            axios.get(`/albums.json`)
                .then((response) => {
                    this.allAlbums = response.data;
                    this.filterSeasonAlbums();
                })
                .catch(error => {
                    console.error('Error fetching all albums:', error);
                });
        },
        filterSeasonAlbums() {
            this.seasonAlbums = this.allAlbums.filter(album => album.season === this.season);
        },
    },
    computed: {
        filteredAlbums() {
            return this.seasonAlbums;
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

.container {
    margin-top: 3%;
    margin-bottom: 700px;
}

.season-list {
    display: flex;
    justify-content: start;
    margin-top: 0.5%;
    margin-left: 20%;
    font-size: 30px;
}

.season-list-item {
    position: relative;
    margin: 0 10px;
}

.season-list-item a {
    position: relative;
}

.season-list-item a::after {
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

.season-list-item a:hover::after {
    transform: scaleX(1);
}

@media (max-width: 600px) {
    .container {
        margin-top: 8%;
    }

    .season-list {
        display: flex;
        justify-content: start;
        margin-top: .6rem;
        margin-left: 4%;
        font-size: 15px;
    }

    .section-title {
        font-size: 15px;
    }
}
</style>