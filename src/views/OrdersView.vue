<template>
    <section class="orders-book-container">
        <div class="orders-synopsis">
            <div class="white-arrow">
                <arrow-books />
            </div>
            <h2>Under Orders of Silence</h2>
            <div class="info-container">
                <div class="left-aligned-image-container">
                    <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Under_Orders.jpg"
                        alt="Under Orders of Silence book cover image">
                </div>
                <div class="text-container">
                    <p>What happens when the world stops listening, and Heaven stays silent?
                        Malik Rosario is a man of Faith, a beloved school principal, and a father whose life unravels
                        overnight. In the wake of a tragic event, Malik is thrust into the spotlight—not as a hero, but
                        as a villain. With his name erased, his family fractured, and his prayers unanswered, he finds
                        himself in a wilderness not of his own making.
                        Set in a near-future America where truth is twisted and silence is weaponized, this haunting
                        modern-day parable explores what it means to endure suffering without reason—and to remain
                        faithful when the heavens refuse to speak.
                        Inspired by the timeless story of Job, Under Orders of Silence is a gripping journey through
                        grief, injustice, and the sacred stillness that lives beyond despair.
                        When words are no longer yours, how do you hold on to your soul?</p>
                </div>
            </div>
            <div class="read-btn"><a
                    href="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/pdfs/Under+Orders+of+Silence+Inspired+by+the+Book+of+Job.pdf"><button
                        class="read-sample-btn white-btn">READ
                        SAMPLE</button></a></div>
        </div>
    </section>
</template>

<script>
import ArrowBooks from '../components/ArrowBooks.vue'

export default {
    components: { ArrowBooks },
    name: 'OrdersView',
    data() {
        return {
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
        }
    }
}
</script>

<style>
/* Gravis Container  */
.orders-book-container {
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
.orders-synopsis {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--quinary);
    background-image: url('https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/courtroom.jpg');
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
    .orders-synopsis .info-container .text-container {
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

    .orders-synopsis {
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