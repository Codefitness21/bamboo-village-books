<template>
    <section class="divinity-book-container">
        <div class="divinity-synopsis">
            <div class="white-arrow">
                <arrow-books />
            </div>
            <h2>The Divinity Of Gods</h2>
            <div class="info-container">
                <div class="left-aligned-image-container">
                    <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Divinity-of-Gods.webp"
                        alt="The Divinity Of Gods book cover image">
                </div>
                <div class="text-container">
                    <p>When the Inquisitors tear their father from their home, Lira and Branwen are thrust into a brutal
                        world where cruelty rules and faith has become a weapon. Lira, bound to the quiet magic of earth
                        and bloom, sees the world in patterns and truths. Branwen, fierce and unyielding, burns with
                        fire she cannot always control. Together, they must uncover family secrets long buried—and
                        survive the enemies hunting them in the shadows.

                        But in a land where gods have fallen silent, loyalty is tested not only by blood and power… but
                        by love. Drawn into dangerous alliances, both sisters find themselves entangled with partners
                        who challenge their hearts and threaten their survival. Desire becomes as perilous as betrayal,
                        and passion burns brightest in the dark.

                        As the Inquisitors close in and the myth of the old gods stirs awake, Lira and Branwen must
                        decide: will love save them from the storm—or condemn them to it?</p>
                </div>
            </div>
            <div class="cta-row">
                <div class="read-btn"><a
                        href="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/pdfs/The+Divinity+of+Gods+by+Caitlyn+M.+Downs.pdf"><button
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
    name: 'DivinityView',
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
.divinity-book-container {
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
.divinity-synopsis {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--quinary);
    background-image: url('https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/divinity-bkgrd-v4.webp');
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
    .orders-synopsis {
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
    .divinity-synopsis .info-container .text-container {
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

    .divinity-synopsis {
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