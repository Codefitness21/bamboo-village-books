<!-- eslint-disable quotes, semi, comma-dangle -->
<template>
  <div class="home-page-container">
    <div class="hero-image-carousel-container">
      <div class="hero-carousel">

        <!-- <div class="left-carousel-arrow arrow">
          <i class="fa-solid fa-chevron-left fa-2x scroll-arrow" @click="(scrollLeft)"></i>
        </div> -->
        <!-- <div class="slide-hero-home-image hero-slide-1">
          <h1>BAMBOO VILLAGE BOOKS</h1>
          <div class="hero-staggard-books">
            <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/staggard-books.png" alt="Staggard Books" />
          </div> -->
        <!-- </div>
        <div class="slide-hero-home-image ashes-container hero-slide-2">
          <h2>NEW RELEASE! <br> Quinton Taylor-Garcia presents ASHES OF THE CITY </h2>
          <div class="info-container">
            <div class="left-aligned-image-container">
              <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/ashes-book-cover.png"
                alt="Ashes Hero Image">
            </div>
            <div class="text-container">
              <p><b>Ashes of the City</b> explores themes of leadership, morality, and the loss of innocence in a
                brutal, post-disaster world. Perfect for fans of The Hunger Games and Lord of the Flies, this powerful
                story
                will keep readers on the edge of their seats, questioning what it means to survive when everything you
                once
                knew is gone.
              </p>
              <div class="cta-row">
                <a @click="open('ashestwo')"><button>LEARN MORE</button></a>
              </div>
            </div>
          </div>
        </div>
        <div class="slide-hero-home-image myasthenia-container hero-slide-3">
          <h2>A Personal Advocacy Story! <br> The Last Sunset: Journey with Myasthenia Gravis (MG) </h2>
          <div class="info-container">
            <div class="left-aligned-image-container">
              <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Gravis.png" alt=" Hero Image">
            </div>
            <div class="text-container">
              <p>Since being diagnosed with MG in 2012, I've worked to raise awareness about this rare condition.
                Writing this book allowed me to share my journey and offer support to others living with a chronic
                illness. The narrative crafted within these pages serves as a fictional yet insightful exploration into
                the complexities of living with a chronic illness.
              </p>
              <div class="cta-row">
                <a @click="open('gravistwo')"><button>LEARN MORE</button></a>
              </div>
            </div>
          </div>
        </div>
        <div class="slide-hero-home-image dragons-container hero-slide-4">
          <h2>Born of Imagination and Celestial Inspiration! <br> The Eclipse Dragons Trilogy</h2>
          <div class="info-container">
            <div class="left-aligned-image-container">
              <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/trilogy.png" alt=" Dragons Image">
            </div>
            <div class="text-container">
              <p>In 2024, the Year of the Dragon, a series of breathtaking eclipses sparked the creation of this fantasy
                saga. The Eclipse Dragon Series channels the wonder of these celestial events into a rich, imaginative
                world of dragons, heroes, and epic battles. These stories represent the power of creativity to transform
                fleeting moments into enduring tales.
              </p>
              <div class="cta-row">
                <a @click="open('eclipse')"><button>LEARN MORE</button></a>
              </div>
            </div>
          </div>
        </div> -->
        <!-- <div class="right-carousel-arrow arrow">
          <i class="fa-solid fa-chevron-right fa-2x scroll-arrow" @click="(scrollRight)"></i>
        </div> -->
        <div class="slide-hero-home-image" v-for="(slide, index) in slides" :key="index" v-show="currentIndex === index"
          :style="{ backgroundImage: `url(${slide.background})` }">
          <h1 v-if="slide.title">{{ slide.title }}</h1>
          <div class="hero-staggard-books" v-if="slide.image0">
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
      <form class="mail-form" action="https://formspree.io/f/xwpvgjop" method="POST">
        <div class="input-container">
          <label class="title-input" for="email"></label>
          <input class="email-input" type="text" placeholder="Email" id="email" name="email" />
        </div>
        <button class="sign-up-btn">SIGN UP</button>
      </form>
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
    <section class="meet-author people">
      <h2>Meet The Author</h2>
      <!-- <div class="bamboo-image"><img src="../assets/bvb-circle-logo.png"></div> -->
      <div class="info-container">
        <div class="text-container">
          <p>Quinton Taylor-Garcia is an emerging voice in dystopian fiction, blending intense survival scenarios with
            deep character development and moral exploration. With a passion for storytelling that challenges societal
            norms, Quinton brings readers into complex worlds where humanity's true nature is tested. When not writing,
            he
            enjoys mentoring others in Information Technology and Cyber Security. Ashes of the City marks another step
            in
            his journey to captivate readers with stories of resilience and leadership.
          </p>
        </div>
        <div class="right-aligned-image-container">
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/author.jpg" alt="Author Image">
        </div>
      </div>
      <a @click="open('about')"><button class="read-bio-btn">READ FULL BIO</button></a>
   
    <!-- <section class="vision people"> -->
      <h2>Our Vision</h2>
      <div class="info-container">
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
      <div class="info-container">
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
          <div class="scroll"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/US-Review.png"
              alt="US Review"></div>
          <div class="scroll"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/Literary-Titan.png"
              alt="Literary Titan"></div>
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
      currentLocation: null,
      currentIndex: 0,
      slides: [
        {
          background: "https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/bamboo-fence-texture.jpg",
          title: "BAMBOO VILLAGE BOOKS",
          image0: 'https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/staggard-books.png',
          image1: 'https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/hero-book-grid.png',
        },
        {
          background: "https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/ashes-transparent-bkgrd.jpg",
          subtitle: "NEW RELEASE! Quinton Taylor-Garcia presents ASHES OF THE CITY",
          image2: 'https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/ashes-book-cover.png',
          text: "Ashes of the City explores themes of leadership, morality, and the loss of innocence in a brutal, post-disaster world. Perfect for fans of The Hunger Games and Lord of the Flies, this powerful story will keep readers on the edge of their seats, questioning what it means to survive when everything you once knew is gone.",
          cta: "LEARN MORE",
          link: 'ashestwo'
        },
        {
          background: "https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/MG-transparent-bkgrd.jpg",
          subtitle: "A Personal Advocacy Story! The Last Sunset: Journey with Myasthenia Gravis (MG)",
          image2: 'https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Gravis.png',
          text: "Since being diagnosed with MG in 2012, I've worked to raise awareness about this rare condition. Writing this book allowed me to share my journey and offer support to others living with a chronic illness. The narrative crafted within these pages serves as a fictional yet insightful exploration into the complexities of living with a chronic illness.",
          cta: "LEARN MORE",
          link: "gravistwo"
        },
        {
          background: "https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/dragon-transparency-bkgrd.png",
          subtitle: "Born of Imagination and Celestial Inspiration: The Eclipse Dragons Trilogy",
          image3: 'https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/trilogy.png',
          text: "In 2024, the Year of the Dragon, a series of breathtaking eclipses sparked the creation of this fantasy saga. The Eclipse Dragon Series channels the wonder of these celestial events into a rich, imaginative world of dragons, heroes, and epic battles. These stories represent the power of creativity to transform fleeting moments into enduring tales",
          cta: "LEARN MORE",
          link: "eclipse"
        },
      ],
    }
  },
  async mounted() {
    this.currentLocation = this.$route.name
    window.scrollTo(0, 0)
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    changeSlide(index) {
      this.currentIndex = index
    },
  },
}
</script>

<style>
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
      background-color: rgb(252, 199, 101, 0.5);
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

/* .hero-carousel {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  scroll-behavior: smooth;
  overflow-x: scroll;
  scroll-snap-type: mandatory;
  width: 100%;
} */

.slide-hero-home-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-width: 100%;

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

.hero-staggard-books img {
  margin-top: 72px;
  width: 90%;
}

.hero-slide-1 {
  background-image: url("https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/bamboo-fence-texture.jpg");
}

.hero-slide-2 {
  background-image: url("https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/ashes-transparent-bkgrd.jpg");
}

.hero-slide-3 {
  background-image: url("https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Gravis.png");
}

.hero-slide-4 {
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

.myasthenia-container {
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
  }

  p {
    margin-top: 30px;
    background-color: rgba(249, 250, 234, 0.6);
    border-radius: 8px;
    padding: 42px;
  }

  .info-container {
    align-items: center;
    justify-content: center;

    img {
      width: 50%;
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
.info-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
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
}

.scrolling-carousel-items {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  white-space: nowrap;
  animation: scroll-hortizontal 20s linear infinite;
}

.carousel-items {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  img {
    width: 80%;
  }
}

/* @keyframes scroll-hortizontal {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
} */

/* .achievements-carousel:hover .scrolling-carousel-items {
  animation-play-state: paused;
}*/

@media (min-width: 1610px) and (max-width: 1740px) {
  p {
    font-size: 32px;
  }

  /* .hero-carousel {
    .arrow {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: space-bewtween;
      background-color: rgba(249, 250, 234, 0.2);
      height: 7%;
      width: 3%;
      border-radius: 50%;
      color: var(--secondary);
    }
  } */
}

/* @media (min-width: 1025px) and (max-width: 1472){

} */


@media (min-width:768px) and (max-width:1024px) {

  /* Home Page Container */
  .home-page-container {
    p {
      font-size: 18px;
    }
  }

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
    }

    .text-container {
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
        margin-top: 30px;
        border-radius: 8px;
        background-color: rgba(249, 250, 234, 0.6);
        padding: 16px;
      }
    }

    .dragons-book-image-container {
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
    }
  }
}

@media (max-width:767px) {

  /* carousel */
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
    /* padding: 0;

        .info-container {
          .left-aligned-image-container img {
            margin: 0;
          }

        } */

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

  .hero-staggard-books {
    display: none;
  }

  /* .ashes-container {
        .text-container {
          padding: 0px 16px 16px 16px;
          width: 100%;
        }

        p {
          padding: 18px;
        }

        .left-aligned-image-container {
          img {
            width: 100%;
          }
        }
      } */

  /* .myasthenia-container {
        .text-container {
          padding: 0px 8px 16px 8px;
          width: 100%;
        }

        p {
          padding: 18px;
        }

        .left-aligned-image-container {
          img {
            width: 50%;
          }
        }
      } */

  /* .dragons-container {
        align-self: space-between;

        .text-container {
          padding: 127px 10px 16px 10px;
          width: 100%;
        }

        h2 {
          padding-top: 90px;
        }

        p {
          margin-top: 0;
          padding: 18px;
        }

        .left-aligned-image-container {
          display: flex;
          flex-direction: column;
          align-items: center;

          img {
            width: 80%;
          }
        }
      } */

  /* .info-container {
        display: flex;
        flex-direction: column;
      }

      .left-aligned-image-container {
        width: 100%
      }

      .text-container {
        width: 100%;
      } */


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

  .info-container {
    flex-direction: column-reverse;
  }

  .text-container {
    width: 100%;
  }

  .right-aligned-image-container {
    align-items: center;
    margin-bottom: 32px;
    width: 100%;
  }

  .vision {
    .left-aligned-image-container {
      img {
        width: 80%;
        margin: 0;
      }
    }

    .info-container {
      flex-direction: column;
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
  }
}
</style>
