<template>
  <div class="books-page-container">
    <section class="hero-book-image">
      <h1>BAMBOO VILLAGE BOOKS</h1>
      <div class="hero-open-book">
        <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/open-book.png" alt="Open Book" />
      </div>
    </section>
    <section class="ashes-container">
      <h2>NEW RELEASE!<br>Quinton Taylor-Garcia presents ASHES OF THE CITY </h2>
      <div class="ashes-info-container">
        <div class="ashes-left-aligned-image-container">
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/ashes-book-cover.png"
            alt="Author Image">
        </div>
        <div class="ashes-text-container">
          <p><b>Ashes of the City</b> explores themes of leadership, morality, and the loss of innocence in a brutal,
            post-disaster world. Perfect for fans of The Hunger Games and Lord of the Flies, this powerful story will
            keep readers on the edge of their seats, questioning what it means to survive when everything you once knew
            is gone.
          </p>
          <div class="cta-row">
            <div class="read-btn"><a
                href="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/pdfs/Ashes_of_the_City.pdf"><button
                  class="read-sample-btn">READ
                  SAMPLE</button></a></div>
            <div class="read-btn"><button @click="openModal">VIEW TRAILER</button>
              <div class="modal-overlay" v-if="showModal">
                <div class="modal-content">
                  <button class="close-button" @click="closeModal">&times;</button>
                  <iframe src='https://www.youtube.com/embed/xpuh84NO9e4?si=jwlCOXPULDF-Lx9n'
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="reviews-container">
      <div class="reviews-title">
        <h2>Praises For Ashes</h2>
        <div class="reviews" v-for="(review, index) in reviews" :key="index" v-show="currentIndex === index">
          <div class="text"><i>"{{ review.text }}"</i></div>
          <img class=image v-if="reviews[currentIndex].image" :src="reviews[currentIndex].image" />
          <a class="name0" v-if="review.link" :href="review.link" target="_blank"><u>{{ review.name0 }}</u></a>
          <a class="name1" v-if="review.link" :href="review.link" target="_blank"><u>{{ review.name1 }}</u></a>
          <a class="name" v-if="review.link" :href="review.link" target="_blank"><u>{{ review.name }}</u></a>
          <!-- <div class="name">{{ review.name }}</div> -->
          <div class="review-indicator-btn">
            <div class="btn" v-for="(review, index) in reviews" :key="index" :class="{ active: currentIndex === index }"
              @click="changeReview(index)"></div>
          </div>
          <div class="navigate">
            <div class="arrow left ">
              <i @click="prevReview" class="fa-solid fa-chevron-left"></i>
            </div>
            <div class="arrow right">
              <i @click="nextReview" class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="all-books-container">
      <!-- <div class="left-stalk">
      <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/left-bamboo-frame.png" alt="">
    </div>  -->
      <div class="books-grid-title">
        <h2>EXPLORE ALL BOOKS</h2>
      </div>
      <div class="all-books-grid">
        <!-- <h2>EXPLORE ALL BOOKS</h2> -->
        <div>
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/ashes.jpg" alt="Ashes of the City">
          <h3>Ashes of the City</h3>
          <div class="cta-row">
            <a @click="open('ashes')"><button class="cta-1">LEARN MORE</button></a>
            <div class="dropdown">
              <button class="dropdown cta-2 ashes-cta">BUY BOOK</button>
              <div class="dropdown-content">
                <a href="https://www.amazon.com/Ashes-City-Quinton-Taylor-Garcia/dp/B0DJZF3DM3">AMAZON</a>
                <a href="https://www.barnesandnoble.com/w/ashes-of-the-city-quinton-taylor-garcia/1146717150">BARNES &
                  NOBLE</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/silent_call.jpg"
            alt="The Silent Call of the Lake">
          <h3>The Silent Call of the Lake</h3>
          <div class="cta-row">
            <a @click="open('silent')"><button class="cta-1">LEARN MORE</button></a>
            <a href="https://www.amazon.com/silent-Call-Lake-JMs-Story/dp/B0CR7KQZTW/"><button class="cta-2">BUY
                BOOK</button></a>
          </div>
        </div>
        <div>
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/devils_dance.jpg"
            alt="The Devil's Dance - A J'ouvert Tale">
          <h3>The Devil's Dance - A J'ouvert Tale</h3>
          <div class="cta-row">
            <a @click="open('dance')"><button class="cta-1">LEARN MORE</button></a>
            <a href="https://www.amazon.com/Devils-Dance-Jouvert-Tale/dp/B0DG8KH3B6/"><button class="cta-2">BUY
                BOOK</button></a>
          </div>
        </div>
        <div>
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Eclipse_Dragons-3.jpg"
            alt="Eclipse Dragons The Warlords's Awakening - Book 3">
          <h3>Eclipse Dragons - Book 3</h3>
          <div class="cta-row">
            <a @click="open('dragonsthree')"><button class="cta-1">LEARN MORE</button></a>
            <a href="https://www.amazon.com/Warlords-Awakening-Battles-Multiverse-Eclipse/dp/B0D91LXSWL/"><button
                class="cta-2">BUY BOOK</button></a>
          </div>
        </div>
        <div>
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Eclipse_Dragons-2.jpg"
            alt="Eclipse Dragons The Rogue Mages Uprising - Book 2">
          <h3>Eclipse Dragons - Book 2</h3>
          <div class="cta-row">
            <a @click="open('dragonstwo')"><button class="cta-1">LEARN MORE</button></a>
            <a href="https://www.amazon.com/Eclipse-Dragons-Rogue-Mages-Uprising/dp/B0CZQ1HTT4/"><button
                class="cta-2">BUY BOOK</button></a>
          </div>
        </div>
        <div>
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/warriors_heart.jpg"
            alt="Warrior's Heart">
          <h3>Warrior's Heart</h3>
          <div class="cta-row">
            <a @click="open('warriors')"><button class="cta-1">LEARN MORE</button></a>
            <a href="https://www.amazon.com/Warriors-Heart-Poems-Emotion-Valor/dp/B0CQP41713/"><button class="cta-2">BUY
                BOOK</button></a>
          </div>
        </div>
        <div>
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/chronicles.jpg"
            alt="The Chronicles of the Gated Community">
          <h3>The Chronicles of the Gated Community</h3>
          <div class="cta-row">
            <a @click="open('chronicles')"><button class="cta-1">LEARN MORE</button></a>
            <a href="https://www.amazon.com/Chronicles-Gated-Community-Shadows-Whispers/dp/B0CQ2WFQ99/"><button
                class="cta-2">BUY BOOK</button></a>
          </div>
        </div>
        <div>
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Eclipse_Dragons-1.jpg"
            alt="Eclipse Dragons - Book 1">
          <h3>Eclipse Dragons - Book 1</h3>
          <div class="cta-row">
            <a @click="open('dragonsone')"><button class="cta-1">LEARN MORE</button></a>
            <a href="https://www.amazon.com/Eclipse-Dragons-Shadows-Faction-Origins/dp/B0CP4TG6T9/"><button
                class="cta-2">BUY BOOK</button></a>
          </div>
        </div>
        <div>
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/MG.jpg"
            alt="The Last Sunset: Journey with Myasthenia Gravis">
          <h3>The Last Sunset: Journey with Myasthenia Gravis</h3>
          <div class="cta-row">
            <a @click="open('gravis')"><button class="cta-1">LEARN MORE</button></a>
            <a href="https://www.amazon.com/Last-Sunset-Myasthenia-Embracing-Connection/dp/B0CN65MYL3/"><button
                class="cta-2">BUY BOOK</button></a>
          </div>
        </div>
      </div>
    </section>
    <section class="upcoming-releases-container">
      <h2>UPCOMING 2025 RELEASES...</h2>
      <div class="upcoming-books">
        <div class="book book-1">
        </div>
        <div class="book">
          <h2>The Silent Crown</h2>
        </div>
        <div class="book">
          <h2>Eclipse Dragons Dark Saga Trilogy</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BooksView',
  data() {
    return {
      showModal: false,
      currentLocation: null,
      currentIndex: 0,
      reviews: [
        {
          text: 'A gripping dystopian narrative filled with evocative prose and vivid descriptions. The novel explores themes of leadership, morality, and sacrifice through compelling characters and high-stakes survival.',
          image: 'https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/review_stars.png',
          name0: '- Literary Titan',
          link: 'https://literarytitan.com/2025/01/07/ashes-of-the-city/'
        },
        {
          text: 'An intense and immersive dystopian novel that captivates readers with its powerful storytelling, deep character development, and thought-provoking themes of survival and morality.',
          name1: ' - The US Review of Books',
          link: 'https://www.theusreview.com/reviews-1/Ashes-of-the-City-by-Quinton-Taylor-Garcia.html'
        },
        {
          text: 'A starkly focused yet overlong tale of a clash between moderation versus despotism during an emergency. Readers may find echoes of William Goldings Lord of the Flies or William Butlers The Butterfly Revolution. A thought-provoking YA survival novel that delves into leadership, morality, and human nature in crisis.',
          name: '- Kirkus Reviews',
          link: 'https://www.kirkusreviews.com/book-reviews/quinton-taylor-garcia/ashes-of-the-city/'
        }
      ]
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
    },
    openModal() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
    nextReview() {
      this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
    },
    prevReview() {
      this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
    },
    changeReview(index) {
      this.currentIndex = index
    },
  }
}
</script>

<style>
/* Books Container */
.books-page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Section 1 - Hero Image */
.hero-book-image {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url("https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/bamboo-fence-texture.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 75vh;

  h1 {
    font-size: 88px;
    font-weight: bold;
    text-align: center;
    color: var(--secondary);
  }
}

.hero-open-book {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 48%;
    margin-top: 72px;
  }
}

/* Section 2 - Ashes Container */
.ashes-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/ashes-transparent-bkgrd.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 64px 64px 64px;
  border-top: 1px solid var(--quinary);
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

  .ashes-info-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    img {
      width: 50%;
    }
  }

  .ashes-left-aligned-image-container {
    width: 50%;
    align-items: center;
  }

  .ashes-text-container {
    width: 50%;
  }
}

.modal-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 48px;

  iframe {
    width: 932px;
    height: 600px;
  }
}

.modal-overlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-button {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 30px;
}

/* Section 3 - Reviews section */
.reviews-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--quarternary);
  color: var(--secondary);
}

.reviews {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 64px 64px 64px;
  font-size: 25px;
  font-family: sans-serif;

  .image {
    margin-top: 48px;
    width: 12%;
  }

  .text {
    text-align: center;
    margin-bottom: 16px;
  }

  .name {
    margin: 10px 0 24px 0;
    color: var(--secondary);
  }

  a {
    margin-top: 16px;
    color: var(--secondary);
  }
}

.navigate {
  position: absolute;
  z-index: 1;
  margin-top: 85px;
  padding: 0 16px;
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

.review-indicator-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  z-index: 2;

  .btn {
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
}

/* Sections 4 - All Books Container  */
.all-books-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--secondary);
  /* background-image: url("https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/left-bamboo-frame.png");
  background-size: contain;
  background-repeat: no-repeat; */
  padding: 0px 0px 64px 0px;

  h3 {
    margin: 8px 0 24px 0;
  }
}

.left-stalk {
  position: absolute;
}

.all-books-grid {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 88px;
  flex-grow: 1;

  h3 {
    font-size: 15px;
  }

  img {
    border: 1px solid var(--quinary);
  }
}

a {
  text-decoration: none;
}

.dropdown {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  display: inline-block
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--secondary);
  border: 1px solid var(--quarternary);
  font-weight: bold;
  width: 150px;

  a {
    color: var(--quarternary);
    padding: 12px 16px;
    text-decoration: none;
    font-size: 13px;
  }

  :hover {
    background-color: var(--quarternary);
    color: var(--secondary);
  }
}

.dropdown:hover .dropdown-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.dropdown:hover .dropbtn {
  background-color: var(--secondary);
  color: var(--quarternary);
  border: 1px solid var(--quinary);
}

.ashes-cta {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

/* Section 5 - Upcoming Releases */
.upcoming-releases-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/upcoming_releases.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    padding: 96px 0 96px 0;
    color: var(--secondary);
  }
}

.upcoming-books {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.book {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--quinary);
  background-image: url("https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/bamboo-transparent-logo.png");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  height: 530px;
  width: 400px;
  color: var(--secondary);
  font-weight: bold;
  padding: 56px;
  margin-bottom: 96px;

  h2 {
    font-size: 32px;
  }
}

.book-1 {
  background-size: 100%;
  background-image: url("https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Orders.jpg");
}

@media (min-width:768px) and (max-width:1024px) {
  .hero-book-image {
    height: 38vh;

    h1 {
      font-size: 56px;
    }
  }

  .ashes-container {
    h2 {
      font-size: 29px;
    }

    p {
      font-size: 18px;
      padding: 24px;
    }

    .ashes-info-container {
      img {
        width: 74%;
      }
    }
  }

  .reviews {
    .text {
      font-size: 24px;
    }

    .image {
      height: 10%;
      width: 10%;
    }
  }

  .upcoming-books {
    .book {
      width: 230px;
      height: 310px;
      margin: 24px;

      h2 {
        font-size: 16px;
      }
    }
  }

  iframe {
    height: 630px;
    width: 800px;
  }
}

@media (max-width: 767px) {
  .hero-book-image {
    height: 42vh;

    h1 {
      font-size: 35px;
    }

    img {
      margin-top: 20px;
    }
  }

  .books-page-container {
    .ashes-container {
      padding: 0 32px 64px 32px;

      .ashes-text-container {
        width: 100%;
      }

      p {
        padding: 18px;
      }

      .ashes-info-container {
        flex-direction: column;

        img {
          width: 100%;
          margin: 0;
        }

        .read-btn {
          margin-top: 0;
        }
      }
    }
  }

  .modal-content {
    iframe {
      width: 365px;
      height: 400px;
    }
  }

  .hero-open-book {
    img {
      width: 48%;
    }
  }

  .left-aligned-image-container {
    img {
      margin: 10px;
    }
  }

  .reviews {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 32px 40px 32px;
    font-size: 16px;

    .image {
      margin-top: 0;
      width: 24%;
    }

    a {
      margin-top: 10px;
    }

    .text {
      font-size: 16px;
    }
  }

  .reviews-title {
    h2 {
      margin: 40px 0px 32px 0px;
    }
  }

  .books-grid-title {
    h2 {
      margin-bottom: 32px;
    }
  }

  .all-books-grid {
    gap: 80px;

    img {
      height: 450px;
      width: 300px;
      margin-bottom: 16px;
      /* width: 100%; */
    }

    h3 {
      font-size: 24px;
      margin: 0px 0 16px 0;
    }
  }

  .upcoming-releases-container {
    h2 {
      font-size: 24px;
      margin-bottom: 48px;
    }
  }

  .upcoming-books {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .book {
    height: 400px;
    width: 300px;
    margin-bottom: 56px;
  }
}
</style>
