<template>
    <div class="section-title"><router-link to="/">home</router-link>
        <span style="color: white;"> |</span>
        <router-link to="/albums/genres"> genres</router-link> <span style="color: white;">|</span>
        <span style="color: #ECDBBA; text-transform: lowercase;">&nbsp;{{
            genre }}
        </span>
    </div>
    <div class="container">
        <div class="genre-list-item">
            <div v-for="album in filteredAlbums" :key="album.id" class="genre-list">
                <router-link :to="{ name: 'AlbumDetail', params: { genre: genre, id: album.id } }">
                    {{ album.artist }}&nbsp;&#8226;&nbsp;{{ album.album }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    props: ['genre'],
    data() {
        return {
            allAlbums: [],
            genreAlbums: [],
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
                    this.filterGenreAlbums();
                })
                .catch(error => {
                    console.error('Error fetching all albums:', error);
                });
        },
        filterGenreAlbums() {
            this.genreAlbums = this.allAlbums.filter(album => album.genre === this.genre);
        },
    },
    computed: {
        filteredAlbums() {
            return this.genreAlbums;
        },
    },
};
</script>

<style scoped>
* {
    text-decoration: none;
    color: #D66C56;
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

.container {
    margin-top: 3%;
    margin-bottom: 710px;
}

.genre-list {
    display: flex;
    justify-content: start;
    margin-top: 0.5%;
    margin-left: 20%;
    font-size: 30px;
}

.genre-list-item {
    position: relative;
    margin: 0 10px;
}

.genre-list-item a {
    position: relative;
}

.genre-list-item a::after {
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

.genre-list-item a:hover::after {
    transform: scaleX(1);
}

@media (max-width: 600px) {
    .container {
        margin-top: 8%;
    }

    .genre-list {
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