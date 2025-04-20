/* eslint-disable quotes, semi, comma-dangle */

<template>
  <section class="gravis-book-container">
    <div class="gravis-synopsis">
      <div class="white-arrow">
      <arrow-books />
    </div>
      <h2>The Last Sunset:
        Journey with Myasthenia Gravis</h2>
      <div class="info-container">
        <div class="left-aligned-image-container">
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/MG.jpg" alt="The Last Sunset: Journey with Myasthenia Gravis">
        </div>
        <div class="text-container">
          <p>"The Last Sunset: Journey with Myasthenia Gravis" is a poignant narrative divided into five parts,
            chronicling the protagonist's encounter with the rare disease Myasthenia Gravis (MG). Part I introduces MG
            and delves into the protagonist's personal history and the onset of symptoms leading to a life-changing
            diagnosis. In Part II, the story unfolds the emotional turmoil following the revelation of a limited
            timeline, capturing the stages from denial to acceptance and adjustment to living with a terminal condition.
            Part III depicts the protagonist's effort to make the most of the remaining time, emphasizing the deepening
            of family ties, fulfillment of last wishes, and the importance of faith. It also highlights their role in
            advocacy for MG awareness. Preparations for the end are detailed in Part IV, discussing the practicalities,
            emotional fortitude, farewells, and considerations of legacy. The narrative concludes in Part V with
            heartfelt reflections, the tranquility in acceptance, the metaphorical 'last sunset,' and the family's
            continued journey post-loss. Each section underscores the emotional landscape</p>
        </div>
      </div>
      <div class="read-btn"><a href="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/pdfs/The_Last_Sunset-Journey_with_Myasthenia_Gravis.pdf"><button
            class="read-sample-btn white-btn">READ SAMPLE</button></a></div>
    </div>
  </section>
</template>

<script>
import ArrowBooks from '../components/ArrowBooks.vue'

export default {
  components: { ArrowBooks },
  name: 'GravisView',
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
.gravis-book-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Section 1 - Gravis Synopsis */
.gravis-synopsis {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url('https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/sunset.jpg');
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

  .left-aligned-image-container {
    align-items: center;
  }

  img {
    border: 1px solid var(--quinary);
    width: 60%;
  }
}

@media (min-width:768px) and (max-width:1024px) {
  .gravis-synopsis {
    img {
      width: 80%;
      margin-bottom: 36px;
    }
    p {
      font-size: 20px;
    }
  }

  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 767px) {
  .gravis-synopsis .info-container .text-container {
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

  .gravis-synopsis {
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
