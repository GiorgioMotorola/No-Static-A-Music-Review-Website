<template>
    <div class="section-title"><router-link to="/">home</router-link> <span style="color: white;">|</span> seasons</div>
    <div class="container">
        <div class="season-list-item">
            <div v-for="season in seasons" :key="season" class="season-list">
                <router-link :to="{ name: 'SeasonAlbums', params: { season: season } }">{{ season }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            seasons: [
                "Spring",
                "Summer",
                "Autumn",
                "Winter",
            ]
        };
    }
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

a {
    text-decoration: none;
}

.container {
    margin-top: 1%;
    margin-bottom: 500px;
}

.season-list {
    display: flex;
    justify-content: start;
    margin-top: 0.5%;
    margin-left: 20%;
}

.season-list-item {
    position: relative;
    margin: 0 10px;
}

.season-list-item a {
    position: relative;
    font-size: 50px;
}

.season-list-item a::after {
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

.season-list-item a:hover::after {
    transform: scaleX(1);
}

@media (max-width: 700px) {
    .container {
        margin-top: 8%;
        margin-bottom: 565px;
    }

    .container a {
        font-size: 30px;
        margin: .2rem;
    }

    .season-list {
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