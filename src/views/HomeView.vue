<!-- eslint-disable quotes, semi, comma-dangle -->
<template>
  <div v-if="isShown" class="popup-overlay">
    <div class="popup-content">
      <button class="close-button" @click="closePopup">&times;</button>
      <h2>New Release!</h2>
      <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/ashes.jpg">
    </div>
  </div>

  <div class="home-page-container">
    <div class="hero-image-carousel-container">
      <div class="hero-carousel" ref="carousel">

        <div class="slide-hero-home-image" v-for="(slide, index) in slides" :key="index" v-show="currentIndex === index"
          :style="{ backgroundImage: `url(${slide.background})` }">
          <h1 v-if="slide.title">{{ slide.title }}</h1>
          <div class="hero-staggered-books" v-if="slide.image0">
            <img :src="slide.image0" />
          </div>
          <div class="hero-books-grid" v-if="slide.image1">
            <img :src="slide.image1" />
          </div>
          <h2 v-if="slide.subtitle">{{ slide.subtitle }}</h2>
          <div class="book-info-container">
            <div class="book-image-container" v-if="slide.image2">
              <img :src="slide.image2" />
            </div>
            <div class="dragons-book-image-container" v-if="slide.image3">
              <img :src="slide.image3" />
            </div>
            <div class="book-text-container" v-if="slide.text">
              <p v-if="slide.text">{{ slide.text }}</p>
              <div class="cta-row" v-if="slide.link">
                <router-link :to="{ name: slide.link }"><button>LEARN MORE</button></router-link>
              </div>
            </div>
          </div>
          <div class="carousel-indicator-btn">
            <div class="carousel-btn" v-for="(slide, index) in slides" :key="index"
              :class="{ active: currentIndex === index }" @click="changeSlide(index)"></div>
          </div>
          <div class="navigate">
            <div class="arrow left ">
              <i @click="prevSlide" class="fa-solid fa-chevron-left"></i>
            </div>
            <div class="arrow right">
              <i @click="nextSlide" class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mailing-container">
      <h5>Join Our Mailing List</h5>
      <form class="mail-form" action="https://formspree.io/f/xwpvgjop" method="POST" @submit="showThankYou">
        <div class="input-container">
          <label class="title-input" for="email"></label>
          <input class="email-input" type="text" placeholder="Email" id="email" name="email" />
        </div>
        <button class="sign-up-btn">SIGN UP</button>
      </form>
      <div class="mail-form-thanks" v-if="!thankyou">
        <h3>Thank You!</h3>
      </div>
    </div>

    <section class="about-books">
      <h2>About Bamboo Village Books</h2>
      <p>Bamboo Village Books was founded in December 2023 in San Antonio, Texas, as a heartfelt reflection of the love
        and care I experienced growing up in Trinidad and Tobago. The name holds deep personal meaning for me, inspired
        by
        fond memories of walking with my mother, Lystra, to my father Randolph's village. To reach his house, we would
        cut
        through bamboo bushes, and in the front yard, I would watch the local cricket games on the field across the
        street. Those moments were filled with connection—listening to the adults share stories, laugh, cry, and break
        bread together.</p>
      <p>Those cherished memories motivated me to create a company that embodies that same sense of community and
        belonging. At Bamboo Village Books, we welcome people from all walks of life to share their stories in a space
        where they can be themselves. Whether it's through writing, reading, or connecting with others, we aim to foster
        a
        supportive and inclusive environment that celebrates the power of storytelling.</p>
      <p>As a proud veteran-owned publishing company, we are committed to empowering authors, especially veterans and
        underrepresented voices, to share their experiences and creative works. Our services include personalized
        publishing packages, professional editing and formatting, and ongoing mentorship for authors at every stage of
        their journey.</p>
      <p>Rooted in the values of resilience, community, and growth—symbolized by the bamboo—we strive to create books
        and
        connections that make a lasting impact. Bamboo Village Books is my way of sharing these values along with the
        warmth, love, and connection I experienced growing up in Trinidad and Tobago. I invite you to join our community
        of storytellers and readers as we create a world where stories bring people together, just as they did in my
        childhood.</p>
      <p><b>-Quinton Taylor-Garcia,</b> Founder & CEO</p>
    </section>
    <section class="meet-author people view">
      <h2>Meet The Author</h2>
      <!-- <div class="bamboo-image"><img src="../assets/bvb-circle-logo.png"></div> -->
      <div class="information-container">
        <div class="text-container slidetext">
          <p>Quinton Taylor-Garcia is an emerging voice in dystopian fiction, blending intense survival scenarios with
            deep character development and moral exploration. With a passion for storytelling that challenges societal
            norms, Quinton brings readers into complex worlds where humanity's true nature is tested. When not writing,
            he
            enjoys mentoring others in Information Technology and Cybersecurity. Ashes of the City marks another step
            in
            his journey to captivate readers with stories of resilience and leadership.
          </p>
          <a @click="open('about')"><button class="read-bio-btn">READ FULL BIO</button></a>
        </div>
        <div class="right-aligned-image-container quinton-image">
          <img class="slideimage" src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/author.jpg" alt="Author Image">
        </div>
      </div>
      <!-- <section class="vision people"> -->
      <h2>Our Vision</h2>
      <div class="information-container vision-info-container">
        <div class="left-aligned-image-container">
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/community.jpg" alt="Community Image">
        </div>
        <div class="text-container">
          <p>At Bamboo Village Books, we envision a world where every individual has access to a diverse and enriching
            library of literature that enlightens, inspires, and connects. Our goal is to cultivate a global community
            of
            readers and thinkers, united by the power of stories. We strive to be at the forefront of literary
            innovation,
            embracing both traditional and emerging forms of storytelling. Our commitment extends beyond publishing; we
            aim to foster a sustainable, inclusive, and literate world, where the bamboo-like resilience of knowledge
            and
            creativity grows and thrives in every corner of society.
          </p>
        </div>
      </div>

      <!-- <section class="team people"> -->
      <h2>Our Team</h2>
      <div class="information-container">
        <div class="text-container">
          <p>Our team, a collective of avid book enthusiasts,
            is devoted to delivering outstanding customer service and guiding you to your ideal read. We pledge to
            maintain
            a
            cozy and inviting atmosphere for all our customers, ensuring a pleasant and enriching experience in the
            world
            of
            books. Our collection features a thoughtfully chosen array of books spanning diverse genres and interests.
            From
            popular bestsellers to undiscovered treasures, our selection caters to a variety of tastes. If you're
            seeking
            a
            specific title not currently in our inventory, we're more than willing to place a special order just for
            you.
          </p>
        </div>
        <div class="right-aligned-image-container">
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/team.jpg" alt="Team Image">
        </div>
      </div>
    </section>
    <!-- </section>
</section> -->
    <section class="achievements-carousel-container">
      <h2>Achievements and Acknowledgments</h2>
      <div class="scrolling-carousel-items">
        <div class=carousel-items>
          <div class="scroll"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/Navoba.png"
              alt="Navoba"></div>
          <div class="scroll"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/AG.png"
              alt="Author's Guild"></div>
          <div class="scroll"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/ibpa.png"
              alt="Independent Book Publishers Association"></div>
          <div class="scroll"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/award-sticker.png"
              alt="Award Digital Sticker"></div>
          <div class="scroll"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/Literary-Titan.png"
              alt="Literary Titan"></div>
          <div class="scroll"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/US-Review.png"
              alt="US Review"></div>
          <div class="scroll"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/kirkus-logo-v3.png"
              alt="Kirkus Review"></div>
          <div class="scroll"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/Briscoe.png"
              alt="Briscoe"></div>
          <div class="scroll"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/TPR.png"
              alt="Texas Public Radio"></div>
        </div>
        <div class=carousel-items>
          <div class="scroll"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/Navoba.png"
              alt="Navoba"></div>
          <div class="scroll"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/AG.png"
              alt="Author's Guild"></div>
          <div class="scroll"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/ibpa.png"
              alt="Independent Book Publishers Association"></div>
          <div class="scroll"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/award-sticker.png"
              alt="Award Digital Sticker"></div>
          <div class="scroll"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/Literary-Titan.png"
              alt="Literary Titan"></div>
          <div class="scroll"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/US-Review.png"
              alt="US Review"></div>
          <div class="scroll"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/kirkus-logo-v3.png"
              alt="Kirkus Review"></div>
          <div class="scroll"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/Briscoe.png"
              alt="Briscoe"></div>
          <div class="scroll"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/TPR.png"
              alt="Texas Public Radio"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',

  data() {
    return {
      thankyou: true,
      currentLocation: null,
      currentIndex: 0,
      isShown: false,
      slides: [
        {
          background: "https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/bamboo-fence-texture.jpg",
          title: "BAMBOO VILLAGE BOOKS",
          image0: 'https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/staggard-books-v2.png',
          image1: 'https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/hero-book-grid-v2.png',
        },
        {
          background: "https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/ashes-transparent-bkgrd-v3.jpg",
          subtitle: "NEW RELEASE! Quinton Taylor-Garcia presents ASHES OF THE CITY",
          image2: 'https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/ashes-book-cover-v5.png',
          text: "Ashes of the City explores themes of leadership, morality, and the loss of innocence in a brutal, post-disaster world. Perfect for fans of The Hunger Games and Lord of the Flies, this powerful story will keep readers on the edge of their seats, questioning what it means to survive when everything you once knew is gone.",
          cta: "LEARN MORE",
          link: 'ashestwo'
        },
        {
          background: "https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/MG-transparent-bkgrd-v2.jpg",
          subtitle: "A Personal Advocacy Story! The Last Sunset: Journey with Myasthenia Gravis (MG)",
          image2: 'https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Gravis-v2.png',
          text: "Since being diagnosed with MG in 2012, I've worked to raise awareness about this rare condition. Writing this book allowed me to share my journey and offer support to others living with a chronic illness. The narrative crafted within these pages serves as a fictional yet insightful exploration into the complexities of living with a chronic illness.",
          cta: "LEARN MORE",
          link: "gravistwo"
        },
        {
          background: "https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/dragon-transparency-bkgrd-v2.jpg",
          subtitle: "Born of Imagination and Celestial Inspiration: The Eclipse Dragons Trilogy",
          image3: 'https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/trilogy-v2.png',
          text: "In 2024, the Year of the Dragon, a series of breathtaking eclipses sparked the creation of this fantasy saga. The Eclipse Dragon Series channels the wonder of these celestial events into a rich, imaginative world of dragons, heroes, and epic battles. These stories represent the power of creativity to transform fleeting moments into enduring tales.",
          cta: "LEARN MORE",
          link: "eclipse"
        },
      ],
    }
  },
  mounted() {
    this.currentLocation = this.$route.name
    window.scrollTo(0, 0)

    const welcomePop = localStorage.getItem('welcomePop');
    console.log('welcomePop:', welcomePop);

    if (!welcomePop) {
      setTimeout(() => {
        this.isShown = true;
        console.log('Popup is now visible')
        localStorage.removeItem('welcomePop');
      }, 4000);
    }
     {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  const slideimageElements = document.querySelectorAll('.slideimage');
  slideimageElements.forEach((el) => observer.observe(el));
}
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
const slidetextElements = document.querySelectorAll('.slidetext');
  slidetextElements.forEach((el) => observer.observe(el));
},
  methods: {
    showThankYou() {
      this.thankyou = false;
    },
    open(target) {
      this.currentLocation = target
      this.$router.push({ name: target })
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    changeSlide(index) {
      this.currentIndex = index
    },
    openPopup() {
      this.isShown = true;
    },
    closePopup() {
      this.isShown = false;
      localStorage.setItem('welcomePop', 'true');
    },
  },
}
</script>

<style>
.popup-overlay {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.popup-content {
  display: flex;
  flex-direction: column;
  color: var(--secondary);
  border-radius: 3px;

  h2 {
    margin: 0 0 32px 0;
    font-size: 60px;
  }

  button {
    background: rgba(0, 0, 0, 0.0);
  }
}

/* Home page container and info pertaining to all sections. Padding - set to 64px r,b,l. for sections. */


.home-page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Section 1 - Hero image. Margin top and font-size  */
.hero-image-carousel-container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-weight: bold;
    margin-top: 110px;
    color: var(--secondary);
  }

  .navigate {
    position: absolute;
    z-index: 1;
    padding: 0 16px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: center;

    .arrow {
      display: flex;
      flex: 1;
    }

    .right {
      justify-content: flex-end;
    }

    i {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      background-color: var(--primary);
      color: var(--secondary);
    }

    i:hover {
      color: var(--quarternary);
    }
  }
}

.carousel-indicator-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 32px;
  position: relative;
  z-index: 2;
}

.carousel-btn {
  width: 12px;
  height: 12px;
  margin: 8px;
  border-radius: 15px;
  border: 1px solid var(--secondary);
  background-color: var(--quarternary);
  cursor: pointer;
}

.active {
  background-color: var(--secondary);
}

.slide-hero-home-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-width: 100%;
  transition: opacity 0.5s ease-in-out;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  h2 {
    padding-top: 72px;
    margin-bottom: 0;
    font-size: 40px;
  }
}

.hero-books-grid {
  display: none;
}

.cta-row {
  position: relative;
  z-index: 2;
  margin-top: 24px;
  cursor: pointer;
}

@keyframes turn-icon-animation {
  0% {
    transform: scale(1);
  }

  25% {
    transform: scale(1.4);
  }

  100% {
    transform: scale(1);
  }
}

.hero-staggered-books img {
  margin-top: 72px;
  width: 90%;
  animation: 0.6s ease-in-out turn-icon-animation;
  animation-delay: 1.5s;
}

.hero-slide-1 {
  background-color: var(--quarternary);
  background-image: url("https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/bamboo-fence-texture.jpg");
}

.hero-slide-2 {
  background-image: url("https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/ashes-transparent-bkgrd.jpg");
}

.hero-slide-3 {
  background-color: #BDE3FF;
  background-image: url("https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Gravis.png");
}

.hero-slide-4 {
  background-color: #E4A1A1;
  background-image: url("https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/dragon-transparency-bkgrd.png");
}

.book-info-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  padding: 32px 64px 32px 64px;
}

.book-image-container {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 48%;
  }
}

.book-text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 0 96px 64px 96px;

  p {
    font-size: 22px;
    margin-top: 40px;
    border-radius: 8px;
    background-color: rgba(249, 250, 234, 0.6);
    padding: 16px;
  }
}

.dragons-book-image-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: center;
  width: 50%;

  img {
    width: 96%;
  }
}

.dragons-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 64px 64px 64px;
  border-bottom: 1px solid var(--quinary);
  gap: 8px;

  h2 {
    color: var(--quinary);
    line-height: 1.4;
    padding-top: 100px;
    margin-top: 0;
  }

  p {
    margin-top: 30px;
    background-color: rgba(249, 250, 234, 0.6);
    border-radius: 8px;
    padding: 42px;
  }

  .info-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    img {
      width: 90%;
      margin: 69px 90px 100px 90px;
    }
  }

  .left-aligned-image-container {
    width: 50%;
    align-items: center;
  }

  .text-container {
    width: 50%;
  }
}

/* Mailing list css present on the footer page. */


/* Section 3 - About BVB */
.about-books {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--secondary);
  padding: 0 64px 96px 64px;
  gap: 32px;

  h2 {
    margin-bottom: 32px;
  }
}

/* Section 4 - Meet the Author */
.meet-author {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--quarternary);
  padding: 0 64px 96px 64px;
  gap: 8px;

  h2 {
    color: var(--secondary);
  }

  p {
    color: var(--secondary);
  }

  img {
    border-radius: 3px;
  }
}

.bamboo-image img {
  width: 45%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  opacity: 5%;
  z-index: 100;
  top: 6%;
}

.slideimage {
  opacity: 0;
  transition: all 0.8s;
  transform: translateX(100%);
  }

  .slidetext {
  opacity: 0;
  transition: all 0.8s;
  transform: translateX(-100%);
  }

.show {
    opacity: 1;
    transform: translateX(0);
  }

/* Section 5 - Our Vision */
.vision {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--secondary);
  padding: 0 64px 96px 64px;
  gap: 8px;

  img {
    border-radius: 3px;
  }
}

.left-aligned-image-container {
  display: flex;
  flex-direction: column;
  width: 50%;

  img {
    /* padding: 0 48px 0 0; */
    width: 80%;
  }
}

/* Section 6 - Our Team */
.team {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--quarternary);
  padding: 0 64px 96px 64px;
  gap: 8px;

  h2 {
    color: var(--secondary);
  }

  p {
    color: var(--secondary);
  }

  img {
    border-radius: 3px;
  }
}

/* Information pertaining to Meet the Author, Our Vision, and Our Team sections. */
.information-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 100px;

  .quinton-image {
    img {
      width: 65%;
    }
  }
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  width: 50%;
}

.right-aligned-image-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;

  img {
    width: 80%;
  }
}

.people {
  background-color: var(--quinary);
  background-image: url("https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/bamboo-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}


/* Section 7 - Achievements and Acknowledgements */
.achievements-carousel-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--secondary);
  padding-bottom: 64px;
  overflow: hidden;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

.scroll {
  display: inline-block;
}

.scrolling-carousel-items {
  padding: 50px 0;
  white-space: nowrap;
  display: inline-block;
}

.scrolling-carousel-items:hover .carousel-items {
  animation-play-state: paused;
}

.carousel-items {
  display: inline-block;
  animation: 25s slide infinite linear;
}

.carousel-items img {
  height: 100px;
  margin: 0 20px;
}

@media (min-width: 1610px) and (max-width: 1740px) {
  p {
    font-size: 32px;
  }
}


@media (min-width:768px) and (max-width:1024px) {

  /* Carousel */
  .home-title {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .hero-image-carousel-container {
    .navigate {
      height: 60%;

      .toggle-page {
        display: flex;
        flex: 1;
      }

      .right {
        justify-content: flex-end;
      }

      i {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background-color: rgb(252, 199, 101, 0.3);
        color: var(--secondary);
      }

      i:hover {
        color: var(--quarternary);
      }
    }

    h1 {
      margin-top: 157px;
      font-size: 78px;
    }

    .slide-hero-home-image {
      h2 {
        font-size: 42px;
        margin-bottom: 24px;
        padding-top: 60px;
      }
    }

    .left-aligned-image-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-self: center;
      width: 100%;
    }

    .text-container {
      width: 100%;

      p {
        padding: 16px;
      }
    }

    .hero-staggard-books {
      img {
        width: 88%;
      }
    }

    .book-info-container {
      padding: 32px 64px 32px 64px;
    }

    .book-image-container {
      img {
        width: 58%;
      }
    }

    .book-text-container {
      padding: 0 32px 16px 32px;

      p {
        font-size: 16px;
        margin-top: 30px;
        border-radius: 8px;
        background-color: rgba(249, 250, 234, 0.6);
        padding: 16px;
      }
    }

    .tablet-read-bio-btn {
      display: flex;
    }

    .desktop-read-bio-btn {
      display: none;
    }

    /* .dragons-book-image-container {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-self: flex-start;
      margin-top: 24px;
    }

    .vision {
      img {
        width: 90%;
      }
    }

    .team {
      img {
        width: 90%;
      }
    } */
  }

  .meet-author {
    h2 {
      margin-bottom: 32px;
    }
  }

  .information-container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    .right-aligned-image-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 32px;
      width: 100%;
    }

    .text-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }

  .vision-info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .left-aligned-image-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 32px;
      width: 100%;
    }
  }
}

@media (max-width:767px) {

  /* carousel */
  .popup-content img {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 80%;
  }

  .hero-image-carousel-container {
    h1 {
      margin-top: 120px;
    }
  }

  .book-info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px 64px 32px 64px;
    align-items: center;

    .book-image-container {
      width: 100%;

      img {
        width: 72%;
      }
    }

    .book-text-container {
      width: 100%;
      padding: 0;
    }
  }

  .dragons-book-image-container {
    width: 100%;

    img {
      width: 100%;
    }
  }

  h1 {
    font-size: 40px;
  }

  .slide-hero-home-image {

    h2 {
      font-size: 26px;
      padding-top: 48px;
    }
  }

  .hero-books-grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px;

    img {
      width: 100%;
    }
  }

  .hero-staggered-books {
    display: none;
  }

  /* home page container */
  .home-page-container {
    p {
      font-size: 14px;
    }
  }

  h2 {
    font-size: 26px;
    margin: 48px 0 48px 0;
  }

  .about-books {
    padding: 0px 32px 40px 32px;

    h2 {
      margin: 40px 0px 0px 0px;
    }

    p {
      margin-bottom: 0px;
    }
  }

  .people {
    display: flex;
    flex-direction: column;
    padding: 0px 32px 56px 32px;

    h2 {
      margin: 40px 0px 32px 0px;
    }
  }

  .information-container {
    flex-direction: column-reverse;
    margin-bottom: 32px;
  }

  .text-container {
    width: 100%;
  }

  .right-aligned-image-container {
    align-items: center;
    margin-bottom: 32px;
    width: 100%;
  }

  .vision-info-container {
    display: flex;
    flex-direction: column;

    .left-aligned-image-container {
      img {
        width: 80%;
        margin: 0;
      }
    }

    .information-container {
      flex-direction: column-reverse;
      align-self: center;
    }

    .left-aligned-image-container {
      align-items: center;
      margin-bottom: 32px;
      width: 100%;
    }
  }

  .achievements-carousel-container {
    padding: 0px 16px 32px 16px;

    h2 {
      margin: 40px 0px 24px 0px;
    }

    .carousel-items img {
      height: 50px;
      margin: 0 20px;
    }
  }

  .carousel-items {
    animation: 15s slide infinite linear;
  }
}
</style>
