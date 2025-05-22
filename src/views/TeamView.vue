<template>
  <div class="team-page-container">
    <div class="team-title">
      <h2>Meet The Team</h2>
    </div>
    <div class="team-images">
      <div>
        <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Quinton.jpg" alt="Quinton">
        <h3>Quinton Taylor-Garcia</h3>
        <h4>Founder and CEO, Bamboo Village Books</h4>
        <p>Quinton is a disabled veteran, accomplished author, and the founder of Bamboo Village Books, an independent
          publishing house based in San Antonio, Texas. The name “Bamboo Village” draws inspiration from Quinton's
          cherished memories of visiting Bamboo Village in Trinidad, where bamboo marked his path to happiness and
          community. This resilient plant, known for its strength, flexibility, and rapid growth, reflects both the
          foundation of the company and the stories it seeks to bring to life. </p>
      </div>
      <div>
        <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Kelly.jpg" alt="Kelly">
        <h3>Kelly Hill</h3>
        <h4>Frontend Web Developer</h4>
        <p>Kelly Hill is a frontend web developer for the sports technology company, Digital Seat Media. With over six 
          years of frontend experience, Kelly uses a customer first approach when designing and developing interactive platforms.
        </p>
      </div>
      <div>
        <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Amy.jpg" alt="Amy">
        <h3>Amy Surratt</h3>
        <h4>Book Editor</h4>
        <p>Amy Surratt is an experienced editor and content analyst with a keen eye for detail and a deep passion for
          storytelling. With a background in writing, editing, and formatting guidelines and procedures for an
          investment company, she has honed her ability to craft clear, precise, and engaging content. As an avid
          reader, Amy decided to apply the skills from her day job to something she truly loves—helping authors bring
          their stories to life.
          As the book editor for Bamboo Village Books, Amy is dedicated to refining manuscripts, enhancing narratives,
          and ensuring each book meets the highest literary standards. She believes in the power of storytelling to
          connect, inspire, and transform, making her an invaluable part of the publishing team.
          When she's not polishing prose, you'll find Amy immersed in a great book, exploring new literary worlds, and
          championing independent authors on their publishing journey. </p>
      </div>
      <div>
        <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/Ashley.jpg" alt="Ashley">
        <h3>Ashley Hubbartt</h3>
        <h4>Social Media and Illustrator</h4>
        <p>Ashley Hubbartt is a dynamic creative with a unique blend of artistic talent and technical expertise. As the
          Social Media & Illustrator for Bamboo Village Books, she brings stories to life through captivating visuals
          while also managing the company's online presence with engaging and strategic content.
          By day, Ashley works in Cyber Security and System Administration, where she ensures digital environments
          remain secure and efficient. Her analytical mindset and problem-solving skills seamlessly complement her
          creative abilities, allowing her to craft compelling illustrations and manage social media with precision and
          innovation.
          Passionate about both technology and art, Ashley thrives on blending the two worlds, using digital tools to
          enhance storytelling and connect authors with their audiences. Whether designing eye-catching book
          illustrations, creating shareable content, or engaging with the online literary community, she is dedicated to
          making an impact in the publishing world.
          When she's not working in tech or bringing characters to life through illustration, Ashley enjoys reading,
          exploring creative projects, and staying ahead of trends in both cybersecurity and digital media. </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamView',
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
.team-page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--secondary);
}

.team-title {
  margin: 64px 0 32px 0;
}

.team-images {
  display: grid;
  flex-direction: row;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 64px 96px 64px;
  gap: 100px;

  h3 {
    font-size: 32px;
    margin: 8px 0 8px 0;
  }

  h4 {
    font-size: 24px;
  }

  p {
    font-size: 16px;
    text-align: left;
    padding: 16px 96px 0 96px;
  }
}

.team-images img {
  width: 50%;
}

@media (min-width:768px) and (max-width:1024px) {
  .team-images {
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
}

@media (max-width: 767px) {
  .team-title {
    margin: 64px 0 32px 0;
  }

  .team-images {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 32px 72px 32px;

    img {
      width: 72%;
    }

    h3 {
      font-size: 24px;
    }

    h4 {
      font-size: 20px;
      margin-bottom: 18px;
    }

    p {
      padding: 0;
      text-align: left;
    }
  }
}
</style>
