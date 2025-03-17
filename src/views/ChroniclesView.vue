/* eslint-disable quotes, semi, comma-dangle */

<template>
  <section class="chronicles-book-container">
    <div class="chronicles-synopsis">
      <div class="white-arrow">
      <arrow-books />
    </div>
      <h2>The Chronicles of the Gated Community</h2>
      <div class="info-container">
        <div class="left-aligned-image-container">
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/chronicles.jpg" alt="The Chronicles of the Gated Community Image">
        </div>
        <div class="text-container">
          <p>"The Chronicles of the Gated Community" unfolds in a seemingly ordinary suburban enclave, transformed by
            the emergence of supernatural forces. The story revolves around Father Lodrick and his team of guardians -
            Vanessa, a young woman grappling with mystical powers; Lukas and Andie, vigilant protectors; Dr. Tigs, a
            scientist bridging the gap between logic and the unknown; and Teresa, a mysterious figure with ambiguous
            motives. Together, they confront and adapt to extraordinary events, from unsettling disturbances to ethereal
            encounters, reshaping their community's understanding of reality. As they navigate challenges, the guardians
            foster a newfound harmony between the residents and the supernatural, revealing a world where magic and the
            mundane intertwine. This narrative weaves a tale of unity, resilience, and the balance between light and
            shadow, echoing the community's journey from fear to acceptance and strength.</p>
        </div>
      </div>
      <div class="read-btn"><a href="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/pdfs/The_Chronicles_of_the_Gated_Community.pdf"><button class="read-sample-btn white-btn">READ
            SAMPLE</button></a></div>
    </div>
  </section>
</template>

<script>
import ArrowBooks from '../components/ArrowBooks.vue'

export default {
  components: { ArrowBooks },
  name: 'ChroniclesView',
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
.chronicles-book-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Section 1 - Chronicles Synopsis */
.chronicles-synopsis {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url('https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/sorcery.jpg');
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
    background-color: rgba(255, 255, 255, 0.8);
    padding: 15px;
    color: var(--quinary);
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
  .chronicles-synopsis {
    img {
      width: 80%;
    }
    p {
      font-size: 12px;
    }
  }
}

@media (max-width: 767px) {
  .chronicles-synopsis .info-container .text-container {
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

  .chronicles-synopsis {
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
