/* eslint-disable quotes, semi, comma-dangle */

<template>
  <section class="dragonstwo-book-container">
    <div class="dragonstwo-synopsis">
      <div class="white-arrow">
      <arrow-books />
      </div>
      <h2>Eclipse Dragons The Rogue Mages Uprising - Book 2</h2>
      <div class="info-container">
        <div class="left-aligned-image-container">
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Eclipse_Dragons-2.jpg" alt="Eclipse Dragons The Rogue Mages UprisingBook 2 Image">
        </div>
        <div class="text-container">
          <p>Step into a world where magic and dragons collide in "Eclipse Dragons: The Rogue Mages Uprise." Chapter 1
            sets the stage for an epic tale of valor, betrayal, and the unwavering strength of unity. Lysandra, a
            formidable mage, stands atop the highest tower, gazing upon a city where magic and humanity coexist in
            harmony. But peace shatters as Half-Dragons, led by a monstrous figure with red eyes and scales of blackened
            steel, besiege the city. Lysandra's heart pounds with fear and determination as she commands the city's
            defenses and mages in a fierce battle. </p><br>
          <p>Just when all seems lost, Lysandra is captured, plunging the city into despair. However, hope flickers in
            the darkness as Solanis and Luneth, majestic dragons, join the fray, turning the tides of battle. In a twist
            of fate, a fraction of Half-Dragons defects, aligning with the defenders for a common cause. But unbeknownst
            to them, Voxeran the Deceiver plots in the shadows, seeking to exploit the chaos for his own gain. As the
            city burns and defenders rally under the guidance of Lysandra, Boltzdameek, and ThunderCloud, the true test
            of their courage and unity begins.</p>
          <br>
          <p>Eclipse Dragons unravels a narrative of mystical creatures, fierce battles, and the timeless pursuit of
            peace. Will Lysandra and her allies withstand the darkness that encroaches their realm, or will the prophecy
            of the Eclipse of Worlds spell doom for all? Dive into "Eclipse Dragons: The Rogue Mages Uprise" and embark
            on a journey where the line between friend and foe blurs, and the heart of a warrior is the only light in
            the encroaching darkness.</p>
        </div>
      </div>
      <div class="read-btn"><a href="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/pdfs/Eclipse_Dragons_The_Rogue_Mages+_Uprising_Book_2.pdf"><button
            class="read-sample-btn white-btn">READ SAMPLE</button></a></div>
    </div>
  </section>
</template>

<script>
import ArrowBooks from '@/components/ArrowBooks.vue'

export default {
  components: { ArrowBooks },
  name: 'DragonstwoView',
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
/* Dragons Two Container  */
.dragonstwo-book-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Section 1 - Dragons Two Synopsis */
.dragonstwo-synopsis {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url('https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/fantasy.jpg');
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
  .dragonstwo-synopsis {
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
  .dragonstwo .info-container .text-container {
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

  .dragonstwo-synopsis {
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
