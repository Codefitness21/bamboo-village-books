/* eslint-disable quotes, semi, comma-dangle */

<template>
  <section class="dragonsone-book-container">
    <div class="dragonsone-synopsis">
      <div class="white-arrow">
      <arrow-books />
    </div>
      <h2>Eclipse Dragons - Book 1</h2>
      <div class="info-container">
        <div class="left-aligned-image-container">
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Eclipse_Dragons-1.jpg" alt="Eclipse Dragons Image">
        </div>
        <div class="text-container">
          <p>"Shadows and Light: The Tale of the Eclipse Dragons" follows Lysandra, a resilient young woman whose
            discovery of a dragon egg after a solar eclipse propels her into an ancient prophecy of celestial
            importance. As she nurtures Solanis, the dragon of the sun, and Luneth, the dragon of the moon, she finds
            herself at the heart of a fantastical power struggle. </p><br>
          <p>The story unfolds through Lysandra's perspective, showcasing her growth from a solitary figure reliant on
            crutches to a unifying force capable of leading a motley crew against a formidable foe. Her allies are a
            microcosm of her world's diversity: Finn with his soothing lute, Zephyra with her unpredictable spells,
            Baird with his steadfast skepticism turned faithful artisanship, Nia whose silent love and healing touch
            mend more than physical wounds, and Corvin, whose complaints mask a fierce loyalty.</p>
          <br>
          <p>Together, they face Obsidior, the dragon born from Solanis and Luneth's union. Unlike his parents, Obsidior
            views his kind as supreme, seeking to eradicate humans and fairies to establish draconian dominance. As he
            rallies a legion, Lysandra and her friends must counter with unity, forming an alliance of guilds inclusive
            of warriors, mages, and paladins—a testament to the story's overarching theme of coalition-building.</p>
        </div>
      </div>
      <div class="read-btn"><a href="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/pdfs/Eclipse_Dragon_Book_1.pdf"><button class="read-sample-btn white-btn">READ SAMPLE</button></a>
      </div>
    </div>
  </section>
</template>

<script>
import ArrowBooks from '../components/ArrowBooks.vue'

export default {
  components: { ArrowBooks },
  name: 'DragonsoneView',
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
/* Dragons Container  */
.dragonsone-book-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Section 1 - Dragons Synopsis */
.dragonsone-synopsis {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url('https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/dragonone.jpg');
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
  .dragonsone-synopsis {
    img {
      width: 80%;
    }
    p {
      font-size: 12px;
    }
  }
}

@media (max-width: 767px) {
  .dragonsone .info-container .text-container {
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

  .dragonsone-synopsis {
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
