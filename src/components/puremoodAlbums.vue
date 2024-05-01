<template>
    <div class="section-title"><router-link to="/">home</router-link>
        <span style="color: white;"> |</span>
        <router-link to="/albums/puremoods"> pure moods</router-link> <span style="color: white;">|</span>
        <span style="color: #ECDBBA; text-transform: lowercase;">&nbsp;{{
            puremood }}
        </span>
    </div>
    <div class="container">
        <div class="puremood-list-item">
            <div v-for="album in filteredAlbums" :key="album.id" class="puremood-list">
                <router-link :to="{ name: 'AlbumDetail', params: { puremood: puremood, id: album.id } }">
                    {{ album.artist }}&nbsp;&#8226;&nbsp;{{ album.album }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    props: ['puremood'],
    data() {
        return {
            allAlbums: [],
            puremoodAlbums: [],
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
                    this.filterpuremoodAlbums();
                })
                .catch(error => {
                    console.error('Error fetching all albums:', error);
                });
        },
        filterpuremoodAlbums() {
            this.puremoodAlbums = this.allAlbums.filter(album => album.puremood === this.puremood);
        },
    },
    computed: {
        filteredAlbums() {
            return this.puremoodAlbums;
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
    margin-bottom: 700px;
}

.puremood-list {
    display: flex;
    justify-content: start;
    margin-top: 0.5%;
    margin-left: 20%;
    font-size: 30px;
}

.puremood-list-item {
    position: relative;
    margin: 0 10px;
}

.puremood-list-item a {
    position: relative;
}

.puremood-list-item a::after {
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

.puremood-list-item a:hover::after {
    transform: scaleX(1);
}

@media (max-width: 600px) {
    .container {
        margin-top: 19%;
    }

    .puremood-list {
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