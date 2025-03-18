<template>
  <div class="about-page-container">
    <section class="hero-about-image">
      <div class="author-name">
        <h1>Quinton <br> Taylor-Garcia</h1>
        <h2>Your Story, Our Passion</h2>
      </div>
      <div class="author-image">
        <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/author.png" alt="Author Image" />
      </div>
    </section>
    <section class="about-author">
      <h2>About the Author</h2>
      <p>Quinton Taylor-Garcia, born in Trinidad and raised in Norfolk, Virginia, found his calling in writing after
        retiring from the Army. His journey began in 2019 during college, inspired by local tales and shared passions
        for
        Urban Fantasy movies and games with friends. This creative exchange sparked his interest in weaving his own
        stories. His work reflects a unique blend of his diverse background and his love for the fantastical, marking
        his
        exciting entry into the world of Urban Fantasy literature.</p>

      <p>Quinton is a disabled veteran, accomplished author, and the founder of Bamboo Village Books, an independent
        publishing house based in San Antonio, Texas. The name “Bamboo Village” draws inspiration from Quinton's
        cherished
        memories of visiting Bamboo Village in Trinidad, where bamboo marked his path to happiness and community. This
        resilient plant, known for its strength, flexibility, and rapid growth, reflects both the foundation of the
        company and the stories it seeks to bring to life. Like bamboo, Bamboo Village Books thrives on:</p>

      <div class="bullet-points">
        <ul>
          <li>Strength and flexibility: Bamboo's steel-like strength and adaptability mirror the resilience of the many
            authors supported by the company.</li>
          <li>Rapid growth: Bamboo can grow up to 36 inches in a single day, symbolizing the swift nurturing of ideas
            from
            seed to publication.</li>
          <li>Sustainability: Bamboo regenerates quickly, reflecting the company's commitment to fostering new talent
            and
            sustainable storytelling practices.</li>
        </ul>
      </div>

      <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/book-signing.jpg"
        alt="Quinton Taylor-Garcia at a book signing event at the Texas Public Radio Merienda at Real Ale Brewing Co. & Real Spirits Distillery in Blanco, TX, on January 20, 2024 ">

      <p>Quinton's works include The Silent Call of the Lake: JM's Story, the young adult dystopian novel Ashes of the
        City, and the fantasy Eclipse Dragons series. Ashes of the City has been praised by Haley Koth of The US Review
        of
        Books as "fast-paced and quick-witted," appealing to fans of The Maze Runner and Divergent. The Eclipse Dragons
        series delves into a rich fantasy world, captivating readers with its intricate storytelling and imaginative
        scope.</p>

      <p>Diagnosed with Myasthenia Gravis in 2012, Quinton also penned Myasthenia Gravis (MG): A Personal Advocacy
        Story,
        using his journey to raise awareness about this rare condition, inspire resilience, and celebrate the human
        spirit's ability to thrive.</p>

      <p>Through Bamboo Village Books, Quinton has created a haven for authors to grow their stories, much like bamboo
        grows wild yet with purpose. Beyond publishing, he enjoys fishing, exploring cyber security innovations, and
        serving as a public speaker and community ambassador.</p>

      <p>Bamboo Village Books embodies the spirit of bamboo: strong yet flexible, grounded yet ever-growing. It serves
        as
        a symbol of resilience, sustainability, and limitless potential, creating stories that leave a lasting impact.
      </p>
    </section>
    <section class="photo-gallery-container">
      <!-- <h2>Bamboo Village Books Gallery</h2> -->
      <div class="photo-gallery-carousel">
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/bvb-ribbon-cutting-ceremony.jpg" alt=""></div>
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/bvb-award.jpg" alt=""></div>
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/book-signing-fan-2.jpg" alt=""></div>
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/book-signing-fan-1.jpg" alt=""></div>
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/ST.jpg" alt=""></div>
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/QT-book-signing-table-fan.jpg" alt=""></div>
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/book-signing-HU.jpg" alt=""></div>
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/book-signing-SA-1.jpg" alt=""></div>
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/QTG-books.jpg" alt=""></div>
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/QT-fan-plane.jpg" alt=""></div>
        <div><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/tiffanys-fan-1.jpg" alt=""></div>
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
  background-image: url('https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/author_hero_bkgrd_image.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--quinary);
  height: 75vh;

  h1 {
    /* font-size: 88px; */
    margin: 72px 0 0 0;
  }

  h2 {
    /* font-size: 48px; */
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

  /* h2 {
    margin: 48px 0 48px 0;
  } */

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
    height: 34vh;
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
    margin-top: 80px;
    width: 75%;
  }

  .about-author {
    p {
      font-size: 16px;
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
      width: 90%;
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
