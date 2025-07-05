<template>
    <section class="ember-book-container">
        <div class="ember-synopsis">
            <div class="white-arrow">
                <arrow-books />
            </div>
            <h2>The Ember Experiment</h2>
            <div class="info-container">
                <div class="left-aligned-image-container">
                    <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Ember.webp"
                        alt="The Ember Experiment book cover image">
                </div>
                <div class="text-container">
                    <p>In the explosive sequel to Ashes of the City, The Ember Experiment thrusts Maya into a decaying
                        world manipulated by lies, surveillance, and brutal power. As Solace crumbles under the weight
                        of chaos, Maya discovers the horrifying truth: their suffering was part of a controlled
                        experiment designed to test human resilience.

                        With The Order collapsing and factions like the Black Suns rising to fill the void, Maya must
                        rally survivors and confront a devastating betrayal that threatens to unravel everything she's
                        built. Torn between vengeance and hope, she must decide how far she's willing to go—and who
                        she's willing to become—to protect those she loves.

                        The Ember Experiment is a gripping young adult dystopian novel filled with action, heartache,
                        rebellion, and sacrifice. A story of leadership forged through fire and the unbreakable spirit
                        of those who refuse to be broken.</p>
                </div>
            </div>
            <div class="cta-row">
                <!-- <div class="read-btn"><a
                        href=""><button
                            class="read-sample-btn white-btn">READ
                            SAMPLE</button></a>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script>
import ArrowBooks from '../components/ArrowBooks.vue'

export default {
    components: { ArrowBooks },
    name: 'EmberView',
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
.ember-book-container {
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
.ember-synopsis {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--quinary);
    background-image: url('https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/city-on-fire.v3.jpg');
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
        background-color: rgba(0, 0, 0, 0.8);
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
    .ember-synopsis {
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
    .ember-synopsis .info-container .text-container {
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

    .ember-synopsis {
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