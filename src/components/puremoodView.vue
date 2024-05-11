<template>
    <div class="section-title">
        <router-link to="/">home</router-link> <span style="color: white;">|</span> pure moods
    </div>
    <div class="container">
        <div class="puremood-list-item">
            <div v-for="puremood in puremoods" :key="puremood" class="puremood-list">
                <router-link :to="{ name: 'puremoodAlbums', params: { puremood: puremood } }">
                    {{ puremood }}
                </router-link>
                <span class="tooltip-icon" :title="tooltipTexts[puremood]" @click="toggleTooltip(puremood)">
                    &#x24D8;
                    <span v-if="showTooltip[puremood]" class="tooltip-text">
                        {{ tooltipTexts[puremood] }}
                    </span>
                </span>
            </div>
        </div>
        <!-- <div class="disclaimer-container">
            <div class="disclaimer">Note: I am aware that a lot of albums could fit in more than one category so I
                placed an
                album in the category I thought was the best fit. If you have an argument why one album belongs in a
                different category, please reach out. You can find my contact info in the footer link "PORTFOLIO".</div>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            puremoods: [
                "Airport",
                "Basement",
                "Bedroom",
                "Cookout",
                "Lab",
                "Library",
                "Radio",
                "Twin Peaks",
                "Warehouse",
                "Yacht",
            ],
            tooltipTexts: {
                Airport: "airy, floaty music that is meant to inspire relaxiation and ambience",
                Basement: "sometimes aggressive, sometimes dark but mainly for metal and punk adjacent sounds",
                Bedroom: "lo-fi, diy, sometimes with some experimentation",
                Cookout: "perfect albums to play while cooking out or hanging out with friends or by yourself",
                Lab: "calculated, often focused on complex songwriting and production",
                Library: "smart, bookish, often a focus on lyrically blowing the listeners mind",
                Radio: "adult oriented rock or your sleak pop. usually made for the masses regardless of it's essentialness",
                "Twin Peaks": "a strong focus on experimentation, something where the weirdness is the appeal",
                Warehouse: "exicting, dancy, a strong focus on beat driven tunes",
                Yacht: "smooth, bouncy and made for the boat",
            },
            showTooltip: {}
        };
    },
    methods: {
        toggleTooltip(puremood) {
            this.showTooltip[puremood] = !this.showTooltip[puremood];
        },
        closeTooltipsOnClickOutside(event) {
            if (!event.target.classList.contains('tooltip-icon')) {
                Object.keys(this.showTooltip).forEach(puremood => {
                    this.showTooltip[puremood] = false;
                });
            }
        }
    },
    mounted() {
        document.addEventListener('click', this.closeTooltipsOnClickOutside);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.closeTooltipsOnClickOutside);
    }
};
</script>

<style scoped>
* {
    text-decoration: none;
    color: #D66C56;
}

.tooltip-icon {
    margin-left: 20px;
    cursor: pointer;
    position: relative;
    font-size: 25px;
    line-height: 1.2;
    color: #ffffff;
}

.tooltip-text {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    top: -30px;
    left: 20px;
    z-index: 999;
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
    margin-top: 3%;
    margin-bottom: 100px;
}

.puremood-list {
    display: flex;
    justify-content: start;
    margin-top: 0.5%;
    margin-left: 20%;
}

.puremood-list-item {
    position: relative;
    margin: 0 10px;
}

.puremood-list-item a {
    position: relative;
    font-size: 50px;
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

.disclaimer-container {
    font-size: 14px;
    margin-bottom: 15px;
    color: white;
    padding: 1%;
}

@media (max-width: 700px) {
    .container {
        margin-top: 8%;
        margin-bottom: 315px;
    }

    .puremood-list {
        display: flex;
        justify-content: start;
        margin-top: 0.5%;
        margin-left: 10%;
    }

    .section-title {
        font-size: 15px;
    }

    .puremood-list-item a {
        font-size: 30px;
        margin: .2rem;
    }
}
</style>