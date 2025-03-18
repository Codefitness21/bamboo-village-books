/* eslint-disable quotes, semi, comma-dangle */

<template>
  <section class="dragonsthree-book-container">
    <!-- <div class="video-background">
    <video autoplay loop muted playsinline>
      <source :src="videoUrl" type="video/mp4" />
    </video>
  </div> -->
    <div class="dragonsthree-synopsis">
      <div class="white-arrow">
        <arrow-books />
      </div>
      <h2>Eclipse Dragons The Warlord's Awakening - Book 3</h2>
      <div class="info-container">
        <div class="left-aligned-image-container">
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Eclipse_Dragons-3.jpg"
            alt="Eclipse Dragons The Warlord's Awakening Image">
        </div>
        <div class="text-container">
          <p>In the ancient realm of Eldoria, where magic and steel intermingle, a fierce and looming threat
            emerges—Voxeran, the Dark Conqueror, whose ambition is to reshape the very fabric of reality. The realm
            teeters on the edge of destruction, and only a band of unlikely heroes stands in the way of its
            annihilation. </p><br>
          <p>At the heart of this tale is Lysandra Nightshade, a warrior burdened with a dual legacy. Known as the Dark
            Phoenix, she embodies both the fierce might of a warlord and the compassionate soul of a healer. Haunted by
            her own physical limitations and a past shrouded in mystery, Lysandra must navigate her inner turmoil to
            harness the full extent of her power. With her amethyst eyes reflecting a spirit of indomitable will, she
            leads a small but formidable group of allies against Voxeran's encroaching darkness.</p>
          <br>
          <p>Flanking Lysandra are her trusted companions: Seraphina, the fiery archer whose precision and resolve never
            waver; Adrien, the stormy-eyed swordsman whose strength and loyalty are unmatched; Solanis, whose control
            over fire burns with a passion for justice; and Luneth, the ice-wielder whose cool demeanor masks a fierce
            protective instinct. Together, they form a tight-knit circle, bound by purpose and unyielding in their
            mission to protect their realm.</p>
        </div>
      </div>
      <div class="read-btn"><a
          href="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/pdfs/Eclipse_Dragons_The_Warlord's_Awakening_Battles_of_the_Multiverse_3.pdf"><button
            class="read-sample-btn white-btn">READ SAMPLE</button></a></div>
    </div>
  </section>
</template>

<script>
import ArrowBooks from '@/components/ArrowBooks.vue'

export default {
  components: { ArrowBooks },
  name: 'DragonsthreeView',
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
/* Dragons Three Container  */
.dragonsthree-book-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .arrow-container a {
  color: var(--secondary);
}
}

.video-background {
  position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
     z-index:-1;
}

/* .video-background video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
} */

/* Section 1 - Dragons Three Synopsis */
.dragonsthree-synopsis {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* justify-content: center; */
  background-image: url('https://bamboovillagebooks.s3.us-east-2.amazonaws.com/video/thunderstorm.gif');
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

  .left-aligned-image-container {
    align-items: center;
  }

  img {
    border: 1px solid var(--quinary);
    width: 60%;
  }
}

@media (min-width:768px) and (max-width:1024px) {
  .dragonsthree-synopsis {
    img {
      width: 80%;
    }
    p {
      font-size: 12px;
    }
  }
}

@media (max-width: 767px) {
  .dragonsthree .info-container .text-container {
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

  .dragonsthree-synopsis {
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
