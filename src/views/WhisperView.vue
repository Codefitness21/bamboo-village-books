<template>
  <section class="whisper-book-container">
    <div class="whisper-synopsis">
      <div class="white-arrow">
        <arrow-books />
      </div>
      <h2>The Whisper Before The Breath</h2>
      <div class="info-container">
        <div class="left-aligned-image-container">
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Whisper.webp" alt="The Whisper Before The Breath Image">
        </div>
        <div class="text-container">
          <p>In a world on the edge of collapse, the skies shift, ancient prophecies awaken, and a celestial event known as the Breathfall Eclipse births a child unlike any other. His name is Malakai, and though the world does not yet know it, his arrival is the beginning of something extraordinary. <br><br>
            
            Born with heterochromatic eyes and a calm that unsettles even the wisest elders, Malakai holds a power that defies explanation—one that echoes through dreams, alters nature, and calls to the deepest parts of the soul. As unrest rises across continents, and secret orders move in the shadows, whispers of divinity swirl around the boy with the light in his chest. But not everyone welcomes the return of divine breath.<br><br>

          In this first volume of The Remembered Light: Chronicles of the Return, Quinton Taylor-Garcia weaves a luminous tale of prophecy, resistance, and rediscovery. This is not just a story of miracles—it's a reflection of humanity's search for meaning in the chaos, and the cost of ignoring the light when it finally returns. Step into a world where belief is dangerous, hope is fragile, and a child may carry the memory of God.</p>
        </div>
      </div>
      <div class="read-btn"><a href="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/pdfs/The-Whisper-Before-The-Breath.pdf"><button class="read-sample-btn white-btn">READ
        SAMPLE</button></a></div>
    </div>
  </section>
</template>

<script>
import ArrowBooks from '../components/ArrowBooks.vue'

export default {
  components: { ArrowBooks },
  name: 'WhisperView',
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
/* Chronicles Container  */
.whisper-book-container {
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

/* Section 1 - Chronicles Synopsis */
.whisper-synopsis {
  display: flex;
  flex-direction: column;
  justify-content: center;
   background-color: #BDE3FF;
   background-image: url('https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/whisper.webp');
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
    background-color: rgb(255, 255, 255, 0.8);
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
  .whisper-synopsis {
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
  .whisper-synopsis .info-container .text-container {
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

  .whisper-synopsis {
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
