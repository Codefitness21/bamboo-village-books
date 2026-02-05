<template>
    <section class="founding-book-container">
        <div class="founding-synopsis">
            <div class="white-arrow">
                <arrow-books />
            </div>
            <h2>The Founding Scroll</h2>
            <div class="info-container">
                <div class="left-aligned-image-container">
                    <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Founding-Scroll.webp"
                        alt="The Founding Scroll book cover image">
                </div>
                <div class="text-container">
                    <p>The Founding Scroll is the first installment of The Vowforged Saga, an epic fantasy series
                        centered on oath-bound power, guild structures, and the cost of authority.<br><br>

                        Set in a world where magic is shaped by sworn vows rather than bloodline or chance, the story
                        follows Seren, a reluctant bearer drawn into a system of ancient agreements that govern power,
                        protection, and dominion. As guilds rise and fracture under competing interpretations of these
                        oaths, Seren must navigate political intrigue, moral consequence, and escalating conflict.<br><br>

                        The novel blends traditional epic fantasy with progression elements, including structured power
                        growth, defined roles, and an in-world codex that expands the setting's rules and lore. While
                        inspired by MMORPG-style systems, the narrative remains character-driven, focusing on choice,
                        responsibility, and the long-term consequences of power.<br><br>

                        Designed as the foundation for a multi-book saga, The Founding Scroll emphasizes immersive
                        worldbuilding, serialized momentum, and thematic depth, appealing to readers of epic fantasy who
                        enjoy structured magic systems and evolving power dynamics.</p>
                </div>
            </div>
            <div class="cta-row">
                <div class="read-btn"><a
                        href="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/pdfs/FoundingScroll.pdf"><button
                            class="read-sample-btn white-btn">READ
                            SAMPLE</button></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ArrowBooks from '../components/ArrowBooks.vue'

export default {
    components: { ArrowBooks },
    name: 'FoundingView',
    data() {
        return {
            showModal: false,
            currentLocation: null
        }
    },
    async mounted() {
        this.currentLocation = this.$route.name
        window.scrollTo(0, 0)
    },
    methods: {
        open(target) {
            this.currentLocation = target
            this.$router.push({ name: target })
        },
        openModal() {
            this.showModal = true
        },
        closeModal() {
            this.showModal = false
        },
        nextReview() {
            this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
        },
        prevReview() {
            this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
        },
        changeReview(index) {
            this.currentIndex = index
        },
    }
}
</script>

<style>
/* Gravis Container  */
.founding-book-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .arrow-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        padding-top: 64px;
        cursor: pointer;
        gap: 4px;

        a {
            color: var(--secondary);
        }
    }
}

/* Section 1 - Gravis Synopsis */
.founding-synopsis {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--quinary);
    background-image: url('https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/camping-stars-forest.webp.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    padding: 32px 64px 96px 64px;

    h2 {
        color: var(--secondary);
        margin: 48px 0 48px 0;
    }

    p {
        font-size: 20px;
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.6);
        color: var(--secondary);
        padding: 15px;
    }

    .info-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .left-aligned-image-container {
        align-items: center;
    }

    img {
        border: 1px solid var(--quinary);
        width: 60%;
    }
}

@media (min-width:768px) and (max-width:1024px) {
    .founding-synopsis {
        img {
            width: 80%;
            margin-bottom: 36px;
        }

        p {
            font-size: 20px;
        }

        .info-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
}

@media (max-width: 767px) {
    .founding-synopsis .info-container .text-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            font-size: 14px;
        }
    }

    .left-aligned-image-container {
        display: flex;
        width: 100%;
        align-items: center;
        flex-direction: column;

        img {
            width: 60%;
            margin: 32px 0 32px 0;
        }
    }

    .founding-synopsis {
        padding: 32px 32px 96px 32px;

        h2 {
            margin: 32px 0 0px 0;
        }

        .info-container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
}
</style>