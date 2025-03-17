<!-- eslint-disable quotes, semi, comma-dangle -->

<template>
  <section class="gravis-book-container">
    <div class="gravis-synopsis">
      <div class="arrow-container">
        <div>
          <a @click="open('home')"><i class="fa-solid fa-angle-left"></i> </a>
        </div>
        <div class="custom-text">
          <a @click="open('home')">Back to Home</a>
        </div>
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
          <div class="cta-row">
            <div class="read-btn"><a href="The_Last_Sunset-Journey_with_Myasthenia_Gravis.pdf"><button
                  class="read-sample-btn">READ SAMPLE</button></a></div>
            <div class="read-btn">
              <a href="https://www.amazon.com/Last-Sunset-Myasthenia-Embracing-Connection/dp/B0CN65MYL3/"><button
                  class="cta-2">BUY BOOK</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
.gravis-synopsis
.arrow-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background: none;
  padding-top: 64px;
  font-weight: bold;
  cursor: pointer;
  gap: 8px;
  a {
    color: var(--secondary);
  }
}
</style>
