<!-- <template>
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
  .dragonsone-synopsis {
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
</style> -->

<template>
  <section class="silent-book-container">
    <div class="silent-synopsis">
      <div class="black-arrow">
        <arrow-books />
      </div>
      <h2>THE SILENT CALL OF THE LAKE</h2>
      <div class="info-container">
        <div class="left-aligned-image-container">
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/silent_call.jpg"
            alt="The Silent Call of the Lake Image">
        </div>
        <div class="text-container">
          <p>"Reflections on the Ice: The Life and Legacy of JM" is an evocative and heartfelt journey through the life
            of an elderly man named JM, whose profound connection to ice fishing and the natural world of Cuyahoga Falls
            shapes his entire existence. From the crisp, frost-laden mornings on the frozen lake to the serene twilight
            of his later years, this book weaves together the threads of passion, wisdom, and an unbreakable bond with
            nature. Readers are invited to explore the depths of JM's love for ice fishing, his insights into life, and
            the reflections of a man who has witnessed the beauty and challenges of a life spent in nature's embrace. As
            JM's story unfolds from the eager steps of youth to the slower, more measured pace of later years, his
            experiences resonate with profound lessons about patience, resilience, and the importance of living a life
            connected to the world around us. Through intimate anecdotes and reflective passages, "Reflections on the
            Ice" not only chronicles JM's journey but also serves as a timeless reminder of the enduring beauty of
            following one's passion and living in harmony with the natural world. </p>
        </div>
      </div>
      <div class="read-btn"><a
          href="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/pdfs/The_Silent_Call_of_the_Lake.pdf"><button
            class="read-sample-btn white-btn">READ
            SAMPLE</button></a></div>
    </div>
  </section>
</template>

<script>
import ArrowBooks from '../components/ArrowBooks.vue'

export default {
  components: { ArrowBooks },
  name: 'SilentView',
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
/* Silent container  */
.silent-book-container {
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
      color: var(--quinary);
    }
  }
}

/* Section 1 - Silent Call Synopsis */
.silent-synopsis {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url('https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/silent-lake-bkgrd.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 32px 64px 96px 64px;

  h2 {
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
  .silent-synopsis {
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
  .silent-synopsis .info-container .text-container {
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

  .silent-synopsis {
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
