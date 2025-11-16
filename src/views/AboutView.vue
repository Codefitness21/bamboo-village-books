<template>
  <div class="about-page-container">
    <section class="hero-about-image">
      <div class="author-name">
        <h1>Quinton <br> Taylor-Garcia</h1>
        <h2>Your Story, Our Passion</h2>
      </div>
      <div class="author-image">
        <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/author-v7.webp" alt="Author Image" />
      </div>
    </section>
    <section class="about-author">
      <h2>About the Author</h2>
      <p>Quinton Taylor-Garcia is an award-winning author, publisher, and community leader dedicated to amplifying diverse voices and creating works that inspire, educate, and entertain. He is the Founder and CEO of Bamboo Village Books, a San Antonio-based publishing company established in 2023 to support independent and underrepresented authors.</p>

      <p>His catalog includes the acclaimed novel Ashes of the City winner of the 2025 International Impact Book Award (Young Adult) and recipient of a 5 star review from Literary Titan as well as Under Orders of Silence, praised by Kirkus Reviews for its bold reimagining of faith and perseverance. Beyond fiction, Taylor-Garcia develops multiple puzzle and activity series, including the Mindful Puzzles Press Collection, a line of uplifting brain-boosting activity books designed to promote positivity, mindfulness, and stress relief, and the Women of Valor Word Search Puzzle Collection, which honors the strength and service of women veterans through culturally inspired word searches.</p>

      <p>Through Bamboo Village Books, Taylor-Garcia also donates puzzle and activity books to organizations that support military veterans and mental health programs, extending the impact of his work beyond publishing and into the community. He also founded the Founders of the Bamboo Flame Guild, a youth-focused literacy initiative that encourages creativity and storytelling through interactive activity booklets.</p>
    </section>
    <section class="photo-gallery-container">
      <!-- <h2>Bamboo Village Books Gallery</h2> -->
      <div class="photo-gallery-carousel">
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/bvb-ribbon-cutting-ceremony.jpg" alt="Ribbon Cutting Ceremony."></div>
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/bvb-award.jpg" alt="Bamboo Village Books Award Ceremony."></div>
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/book-signing.v1.jpg" alt="Book signing at Texas Public Radio Merienda."></div>
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/book-signing-fan-1.jpg" alt="Quinton taking a picture with gentlemen holding Ashes of the City Book."></div>
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/ST.jpg" alt="Samone taking a picture at book signing table."></div>
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/QT-book-signing-table-fan.jpg" alt="Quinton taking a picture with a fan at book signing table."></div>
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/book-signing-HU.jpg" alt="Quinton taking a photo with a fan holding an Ashes of the City book at Howard University."></div>
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/book-signing-SA-1.jpg" alt="Quinton taking photo with a fan at book signing event."></div>
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/QTG-books.jpg" alt="Quinton taking a picture in front of his house holding his published books."></div>
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/QT-fan-plane.jpg" alt="Quinton taking a photo with a fan holding an Ashes of the City book on the plane."></div>
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/tiffanys-fan-1.jpg" alt="Quinton taking a photo with a fan holding a signed copy of Ashes of the City at Tiffanys."></div>
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/gala-v2.jpg" alt="Quinton taking a photo with a fan at a Gala event."></div>
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/school-v2.jpg" alt="Quinton taking a photo with a classroom of students."></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
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
/* About author page container */
.about-page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Section 1 - About author hero image */
.hero-about-image {
  display: flex;
  flex-direction: row;
  background-image: url('https://bamboovillagebooks.s3.us-east-2.amazonaws.com/video/author_hero_bkgrd_image-v2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--quinary);
  height: 75vh;

  h1 {
    margin: 72px 0 0 0;
  }

  h2 {
    font-style: italic;
    margin: 24px;
  }
}

.author-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
}

.author-image {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;

  img {
    margin-top: 100px;
  }
}

/* Section 2- about author bio */
.about-author {
  display: inline-block;
  flex-direction: column;
  padding: 0 64px 96px 64px;
  color: var(--secondary);
  background-color: var(--quarternary);
  background-image: url("https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/about-background-image.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  img {
    width: 50%;
    float: right;
    padding: 24px;
  }

  p {
    text-align: justify;
    margin-bottom: 32px;
    font-size: 24px;
  }
}

/* The bullet points were customized to allow the two lines of text to be vertically aligned and to add some padding between the bullet points and text. Also, nesting while didn't work while using li::before becuase the grandparent couldn't target it. */

.bullet-points {
  display: flex;
  flex-direction: row;
}

ul {
  list-style: none;
  font-family: sans-serif;

  li {
    position: relative;
    font-size: 24px;
    text-align: justify;
    padding-left: 32px;
    margin-bottom: 32px;
  }
}

.bullet-points li::before {
  position: absolute;
  content: "•";
  top: 0;
  left: 0;
}

/* Section 3 - photo gallery carousel  */
.photo-gallery-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--quinary);

  h2 {
    color: var(--secondary);
  }
}

.photo-gallery-carousel {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  overflow: scroll;
  scroll-behavior: smooth;
  scroll-snap-align: mandatory;
  padding: 0 64px 96px 64px;
  gap: 16px;
}

@media (min-width: 1600px) {
ul 
li{
    font-size: 25px;
  }
}

@media (min-width:768px) and (max-width:1024px) {
  .hero-about-image {
    height: 38vh;
  }

  .author-name {
    h1 {
      font-size: 56px;
    }

    h2 {
      font-size: 34px;
    }
  }

  .author-image img {
    /* margin-top: 80px; */
    width: 80%;
  }

  .about-author {
    p {
      font-size: 24px;
    }

    ul {
      li {
        font-size: 24px;
      }
    }
  }
}

@media (max-width: 767px) {
  .hero-about-image {
    h1 {
      margin-top: 100px;
      font-size: 20px;
    }

    h2 {
      font-size: 16px;
      margin: 16px;
    }

    height: 42vh;
  }

  .author-name {
    width: 46%;
  }

  .author-image {
    img {
      margin-top: 100px;
      
    }
  }

  .about-author {
    padding: 0 32px 56px 32px;

    h2 {
      margin: 32px 0 32px 0;
    }

    p {
      font-size: 14px;
      margin-bottom: 18px;
      line-height: 1.4;
      text-align: left;
    }

    li {
      font-size: 14px;
      text-align: left;
      margin-bottom: 18px;
      line-height: 1.4;
    }

    img {
      width: 100%;
      margin-bottom: 18px;
      padding: 18px;
    }
  }
  .photo-gallery-carousel {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  overflow: scroll;
  scroll-behavior: smooth;
  scroll-snap-align: mandatory;
  padding:  0 0px 32px 24px;;
}
}
</style>
