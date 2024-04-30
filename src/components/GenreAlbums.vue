<template>
    <div class="container">
        <div class="genre-title">{{ genre }}</div>
        <div class="genre-list-item">
            <div v-for="album in filteredAlbums" :key="album.id" class="genre-list">
                <router-link :to="{ name: 'AlbumDetail', params: { genre: genre, id: album.id } }">
                    {{ album.artist }} - {{ album.album }}
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
    color: white;
}

.genre-title {
    text-align: center;
    margin-bottom: 5%;
    font-size: 30px;
    color: rgb(76, 160, 234);
}

.container {
    margin-top: 3%;
}

.genre-list {
    display: flex;
    justify-content: center;
    margin-top: 0.5%;
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
        margin-top: 19%;
    }

    .genre-list {
        display: flex;
        justify-content: center;
        margin-top: 3%;
        font-size: 13px;
    }
}
</style>