<!-- <template>
  <section class="dance-book-container">
    <div class="dance-synopsis">
      <div class="white-arrow">
        <arrow-books />
      </div>
      <h2>THE DEVIL'S DANCE - A J'ouvert Tale </h2>
      <div class="info-container">
        <div class="left-aligned-image-container">
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/devils_dance.jpg" alt="THE DEVIL'S DANCE - A J'ouvert Tale Image">
        </div>
        <div class="text-container">
          <p>Dive into the vibrant and mystical world of Trinidad in "The Devil's Dance: A J'ouvert Tale." Follow Ethan
            Matthews, a Trinidadian-American graphic designer from New York City, as he embarks on a journey to
            reconnect with his heritage during the exhilarating and chaotic J'ouvert celebration. Amidst the pulsating
            rhythms of steelpan music and the kaleidoscope of colors, Ethan finds himself entangled in a web of
            supernatural events that blur the lines between myth and reality. </p><br>
          <p>As he delves deeper into the folklore of the island, Ethan encounters La Diablesse, a seductive and
            dangerous spirit from Caribbean legend. Drawn into a realm where spirits roam and the jungle hides ancient
            secrets, Ethan must confront his deepest fears and unlock the mysteries of his family's past. Guided by the
            wise and enigmatic Gabriel Hernandez, Ethan discovers his own connection to the spiritual world and the
            responsibilities it entails.</p>
          <br>
          <p>"The Devil's Dance: A J'ouvert Tale" is a thrilling blend of Caribbean folklore, suspense, and cultural
            exploration. It's a story of self-discovery, courage, and the powerful bond between the living and the
            spirits. Perfect for fans of supernatural adventure and rich cultural tales, this book will take you on an
            unforgettable journey through the heart of Trinidad's most celebrated festival. Will Ethan uncover the truth
            and survive the dance with the devil, or will the island's dark forces claim him as their own? Find out in
            this mesmerizing tale of heritage, mystery, and magic.</p>
        </div>
      </div>
      <div class="read-btn"><a href="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/pdfs/The_Devil's_Dance_A_J'ouvert_Tale.pdf"><button class="read-sample-btn white-btn">READ
            SAMPLE</button></a></div>
    </div>
  </section>
</template>


<script>
import ArrowBooks from '../components/ArrowBooks.vue'

export default {
  components: { ArrowBooks },
  name: 'DanceView',
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
/* Dance Container  */
.dance-book-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Section 1 - Dance Synopsis */
.dance-synopsis {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url('https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/celebration.jpg');
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
  .dance-synopsis {
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
  .dance-synopsis .info-container .text-container {
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

  .dance-synopsis {
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
  <section class="dance-book-container">
    <div class="dance-synopsis">
      <div class="white-arrow">
        <arrow-books />
      </div>
      <h2>THE DEVIL'S DANCE - A J'ouvert Tale </h2>
      <div class="info-container">
        <div class="left-aligned-image-container">
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/devils_dance.jpg"
            alt="THE DEVIL'S DANCE - A J'ouvert Tale">
        </div>
        <div class="text-container">
          <p>Dive into the vibrant and mystical world of Trinidad in "The Devil's Dance: A J'ouvert Tale." Follow Ethan
            Matthews, a Trinidadian-American graphic designer from New York City, as he embarks on a journey to
            reconnect with his heritage during the exhilarating and chaotic J'ouvert celebration. Amidst the pulsating
            rhythms of steelpan music and the kaleidoscope of colors, Ethan finds himself entangled in a web of
            supernatural events that blur the lines between myth and reality. </p><br>
          <p>As he delves deeper into the folklore of the island, Ethan encounters La Diablesse, a seductive and
            dangerous spirit from Caribbean legend. Drawn into a realm where spirits roam and the jungle hides ancient
            secrets, Ethan must confront his deepest fears and unlock the mysteries of his family's past. Guided by the
            wise and enigmatic Gabriel Hernandez, Ethan discovers his own connection to the spiritual world and the
            responsibilities it entails.</p>
          <br>
          <p>"The Devil's Dance: A J'ouvert Tale" is a thrilling blend of Caribbean folklore, suspense, and cultural
            exploration. It's a story of self-discovery, courage, and the powerful bond between the living and the
            spirits. Perfect for fans of supernatural adventure and rich cultural tales, this book will take you on an
            unforgettable journey through the heart of Trinidad's most celebrated festival. Will Ethan uncover the truth
            and survive the dance with the devil, or will the island's dark forces claim him as their own? Find out in
            this mesmerizing tale of heritage, mystery, and magic.</p>
        </div>
      </div>
      <div class="read-btn"><a
          href="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/pdfs/The_Devil's_Dance_A_J'ouvert_Tale.pdf"><button
            class="read-sample-btn white-btn">READ
            SAMPLE</button></a></div>
    </div>
  </section>
</template>

<script>
import ArrowBooks from '../components/ArrowBooks.vue'

export default {
  components: { ArrowBooks },
  name: 'DanceView',
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
/* Dance container  */
.dance-book-container {
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

/* Section 1 - Dance Synopsis */
.dance-synopsis {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url('https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/celebration.jpg');
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
    background-color: rgba(0, 0, 0, 0.4);
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
  .dance-synopsis {
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
  .dance-synopsis .info-container .text-container {
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

  .dance-synopsis {
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
