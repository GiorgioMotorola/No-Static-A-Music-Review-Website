<template>
    <div class="section-title"><router-link to="/">home</router-link> <span style="color: rgb(43,46,40);">|</span> genres</div>
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
                "Alt Country",
                "Ambient",
                "Business Rock",
                "Country",
                "Dream Pop",
                "Electronic",
                "Hip Hop",
                "Indie Pop",
                "Indie Rock",
                "Jazz",
                "Metal",
                "New Wave",
                "Pop",
                "Power Pop",
                "Punk",
                "Rock",
                "Singer-Songwriter",
                "Sophisti-Pop",
                "Soul",
                "Vaporwave",
                "Yacht Rock"
            ]
        };
    }
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

a {
    text-decoration: none;
}

.container {
    margin-top: 1%;
    margin-bottom: 100px;
}

.genre-list {
    display: flex;
    justify-content: start;
    margin-top: 0.5%;
    margin-left: 20%;
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
    background-color: #D66C56;
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.genre-list-item a:hover::after {
    transform: scaleX(1);
}

@media (max-width: 700px) {
    .container {
        margin-top: 8%;
        margin-bottom: 50px;
    }

    .container a {
        font-size: 30px;
        margin: .2rem;
    }

    .genre-list {
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