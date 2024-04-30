<template>
    <div class="section-title"><router-link to="/">home</router-link> <span style="color: white;">|</span> genres</div>
    <div class="container">
        <div class="genre-list-item">
            <div v-for="genre in genres" :key="genre" class="genre-list">
                <router-link :to="{ name: 'GenreAlbums', params: { genre: genre } }">{{ genre }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            genres: [
                "Rock",
                "Electronic",
                "Ambient",
                "Indie Rock",
                "Punk",
                "New Wave",
                "Power Pop",
                "Alt Country",
                "Hip Hop",
                "Yacht Rock"
            ]
        };
    }
};
</script>

<style scoped>
* {
    text-decoration: none;
    color: white;
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
    margin-bottom: 100px;
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
    font-size: 50px;
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