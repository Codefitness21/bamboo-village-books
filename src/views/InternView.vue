<!-- eslint-disable quotes, semi, comma-dangle -->
<template>
  <div class="intern-page-container">
    <div class="intern-title">
      <h2>Welcome Interns!</h2>
    </div>
    <section class="intern-information-container">
      <div class="intern-information">
        <div class="intern-image">
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Samone.jpg" alt="Samone">

        </div>
        <div class=intern-text>
          <div class="name">
            <h3>Samone Edwards-Tran</h3>
            <h4>Executive Intern</h4>
          </div>
          <p>From the inception of Bamboo Village Books in December 2023 until December 2024, Samone Edwards-Tran played
            a pivotal role as an Executive Intern, directly supporting CEO Quinton Taylor-Garcia in various aspects of
            the company's growth and operations. Her contributions were instrumental in establishing Bamboo Village
            Books as a trusted name in independent publishing. As an on-site marketing specialist, Samone engaged with
            readers and authors, helping to promote books at live events, book fairs, and community gatherings. She
            developed marketing strategies to enhance the company's visibility, assisted with branding efforts, and
            contributed to digital and print promotional campaigns. Her ability to connect with audiences and
            effectively communicate the mission of Bamboo Village Books strengthened the company's outreach. In addition
            to marketing, Samone provided critical book review support, evaluating manuscripts for content, coherence,
            and engagement. Her keen editorial eye helped refine storytelling elements, ensuring that Bamboo Village
            Books consistently produced high-quality publications. Her editing expertise assisted authors in polishing
            their work, aligning each book with professional publishing standards. Now, as she embarks on the next
            chapter of her journey, Samone is heading to Full Sail University to pursue a major in Communications. Her
            experience at Bamboo Village Books has provided her with a strong foundation in publishing, marketing, and
            storytelling—skills that will serve her well as she continues to refine her craft and expand her expertise
            in media and communication. Her tenure at Bamboo Village Books reflects her dedication, creativity, and
            passion for the literary and media industries. As she moves forward in her academic and professional career,
            Samone leaves behind a legacy of excellence, and the Bamboo Village Books team is excited to see the impact
            she will make in the world of communications.</p>
        </div>
      </div>
      <div class="intern-information">
        <div class="intern-image">
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Alexia.jpg" alt="Alexis">

        </div>
        <div class=intern-text>
          <div class="name">
            <h3>Alexia Mitchell</h3>
            <h4>International Marketing Intern</h4>
          </div>
          <p>Bamboo Village Books is thrilled to welcome Alexia Mitchell as our International Marketing Intern, where
            she
            will play a key role in expanding our reach into Caribbean markets. With a passion for cultural storytelling
            and global engagement, Alexia will support the marketing team in developing and executing strategies
            tailored
            to connect with readers and authors across the Caribbean region. With her keen insight into international
            marketing and her deep appreciation for diverse narratives, Alexia is poised to help Bamboo Village Books
            foster meaningful connections with Caribbean readers and authors. We are excited to see her contributions
            shape our global outreach initiatives and bring authentic voices to a wider audience.</p>
        </div>
      </div>
      <div class="intern-information">
        <div class="intern-image">
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/image_placeholder.jpg" alt="Kaleigh">

        </div>
        <div class=intern-text>
          <div class="name">
            <h3>Kaleigh Hubbartt</h3>
            <h4>Creative Media Intern</h4>
          </div>
          <p>Kaleigh Hubbartt is a creative media enthusiast with a passion for storytelling, visual design, and digital
            content creation. As the Creative Media Intern at Bamboo Village Books, she brings a fresh perspective and
            innovative ideas to enhance the publishing experience through multimedia storytelling, marketing visuals,
            and engaging digital content.
            With a background in creative media and a love for books, Kaleigh is excited to merge her artistic skills
            with the literary world. She is dedicated to crafting compelling visuals, refining branding strategies, and
            helping authors connect with their audiences in unique and meaningful ways.
            Beyond her creative work, Kaleigh is on the path to becoming a doctor, studying Human Physiology and
            Nutrition with a Pre-Med focus. She is passionate about understanding the human body and improving lives
            through science and medicine, while still nurturing her artistic side. Her ability to balance both fields
            speaks to her drive, adaptability, and diverse skill set.</p>
        </div>
      </div>
    </section>
    <section>
      <div class="bottom-line">
        <div class="interest">
          <h4>Interested in being an intern? Click here for more information.</h4>
        </div>
        <div>
          <a @click="open('form')"><button class="click">CLICK HERE</button></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'InternView',
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
.intern-page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--secondary);
}

.intern-title {
  margin: 64px 0 32px 0;
}

.intern-information {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 64px 96px 64px;

  p {
    font-size: 16px;
    text-align: left;
  }
}

.intern-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
}

.intern-image img {
  width: 80%;
}

.intern-text {
  width: 70%;
}

.name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin-bottom: 16px;

  h3 {
    margin-bottom: 8px;
  }
}

.bottom-line {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 64px;
  gap: 64px;

  h4 {
    font-size: 24px;
  }
}

@media (min-width:768px) and (max-width:1024px) {
  .intern-image {
    img {
      width: 200%;
      margin-bottom: 24px;
    }
    p {
      padding: 0;
      text-align: left;
    }

    h3 {
      font-size: 24px;
    }

    h4 {
      font-size: 16px;
      margin-bottom: 18px;
    }
  }

  .intern-information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 64px 96px 64px;
    align-items: center;
  }
}

.bottom-line {
  h4 {
    text-align: left;
  }
}

@media (max-width: 767px) {
  .intern-information {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 32px px 32px;

    img {
      margin-bottom: 24px;
      width: 72%;
    }

    p {
      text-align: left;
    }
  }

  .intern-image {
    width: 100%;
  }

  .intern-text {
    width: 100%;
  }

  h2 {
    margin-bottom: 0;
  }

  .name {
    h3 {
      font-size: 24px;
    }

    h4 {
      font-size: 20px;
      margin-bottom: 18px;
    }
  }

  .bottom-line {
    padding: 0 32px 64px 32px;
    flex-direction: column;
    gap: 0;

    h4 {
      font-size: 20px;
      text-align: left;
      margin-bottom: 24px;
    }
  }
}
</style>
