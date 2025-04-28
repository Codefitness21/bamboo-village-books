/* eslint-disable quotes, semi, comma-dangle */

<template>
  <section class="warriors-book-container">
    <div class="warriors-synopsis">
      <div class="white-arrow ">
      <arrow-books />
    </div>
      <h2>WARRIOR'S HEART</h2>
      <div class="info-container">
        <div class="left-aligned-image-container">
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/warriors_heart.jpg" alt="Warrior's Heart Image">
        </div>
        <div class="text-container">
          <p>Step into the world of brave soldiers, dedicated veterans, and resilient military families through the
            power of poetry. "Warriors of Words" is a collection that weaves together the profound emotions,
            experiences, and indomitable spirit of those who have served in the armed forces. These military poems offer
            more than just verses; they provide hope and resilience in the face of adversity. </p><br>
          <p>In this evocative anthology, you will encounter poignant verses that capture the unyielding determination
            of warriors, their unwavering commitment to a cause, and the sacrifices they make for their countries. Each
            poem serves as a testament to the strength of the human spirit when faced with the challenges of conflict
            and duty. These military poems not only shed light on the trials and tribulations of military life but also
            illuminate the moments of camaraderie, unity, and unwavering resolve that define the military community.
            Through the art of poetry, you will discover how individuals find hope in the darkest of hours and emerge
            from adversity with newfound resilience.</p>
          <br>
          <p>Whether you have a personal connection to the military or simply appreciate the power of poetry to inspire
            and uplift, "Warriors of Words" will leave a lasting impact. It reminds us that even during chaos and
            turmoil, there is room for hope, and the human spirit is capable of incredible resilience. As you delve into
            these verses, prepare to be moved, inspired, and uplifted by the enduring spirit of those who serve and the
            transformative power of poetry. "Warriors of Words" is a heartfelt tribute to our military heroes and a
            celebration of the hope and resilience that unite us all.</p>
        </div>
      </div>
      <div class="read-btn"><a href="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/pdfs/Warrior's_Heart.pdf"><button class="read-sample-btn white-btn">READ SAMPLE</button></a></div>
    </div>
  </section>
</template>

<script>
import ArrowBooks from '../components/ArrowBooks.vue'

export default {
  components: { ArrowBooks },
  name: 'WarriorsView',
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
/* Warriors Container  */
.warriors-book-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Section 1 - Warriors Synopsis */
.warriors-synopsis {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url('https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/battleground.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 32px 64px 96px 64px;
  
  h2 {
    margin: 48px 0 48px 0;
    color: var(--secondary);
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
  .warriors-synopsis {
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
  .warriors-synopsis .info-container .text-container {
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

  .warriors-synopsis {
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
