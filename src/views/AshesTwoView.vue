/* eslint-disable quotes, semi, comma-dangle */
<template>
  <section class="ashes-book-container">
    <div class="ashes-synopsis">
      <div class="arrow-container">
        <div>
          <a @click="open('home')"><i class="fa-solid fa-angle-left"></i> </a>
        </div>
        <div class="custom-text">
          <a @click="open('home')">Back to Home</a>
        </div>
      </div>
      <h2>ASHES OF THE CITY</h2>
      <div class="info-container">
        <div class="left-aligned-image-container">
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/ashes.jpg" alt="Ashes of the City Image">
        </div>
        <div class="text-container">
          <p>Ashes of the City is a gripping Young Adult dystopian novel that delves into the struggle for survival in a
            city shattered by disaster. When a massive earthquake devastates their urban home, a group of high school
            students is left stranded in the ruins, cut off from rescue and forced to confront a new reality where the
            old rules no longer apply.</p><br>
          <p>Maya, a responsible and compassionate leader, steps up to guide the group, clinging to her belief in unity
            and hope. But her vision is challenged by Jace, a charismatic rebel who believes in a more ruthless
            approach—one where only the strongest survive. As their differing philosophies clash, the group fractures
            into factions, with the city's remaining resources becoming the center of a dangerous power struggle.</p>
          <br>
          <p>As Maya battles to hold onto her humanity, Jace's tactics grow increasingly harsh, leading to violent
            confrontations and impossible choices. Amidst collapsing buildings, dwindling supplies, and the ever-present
            danger of aftershocks, both leaders are forced to face the cost of their decisions. In a world where trust
            is fragile and survival comes at a price, Maya must decide how far she's willing to go to protect her
            friends and what kind of leader she truly wants to be.</p>
          <div class="cta-row">
            <div class="read-btn"><a href="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/pdfs/Ashes_of_the_City.pdf"><button class="read-sample-btn white-btn">READ
                  SAMPLE</button></a></div>
            <div class="read-btn">
              <div class="dropdown">
                <button class="dropdown cta white-btn">BUY BOOK</button>
                <div class="dropdown-content">
                  <a href="https://www.amazon.com/Ashes-City-Quinton-Taylor-Garcia/dp/B0DJZF3DM3">AMAZON</a>
                  <a href="https://www.barnesandnoble.com/w/ashes-of-the-city-quinton-taylor-garcia/1146717150">BARNES &
                    NOBLE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="ashes-video-container">
    <h2>BOOK TRAILER</h2>
    <iframe width="1200" height="600" src="https://www.youtube.com/embed/xpuh84NO9e4?si=VQRV_KRrzSJRzgrm"
      title="YouTube video player" frameborder="0"
      allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </section>
  <section class="book-review-container">
    <h2>BOOK REVIEW</h2>
    <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/ashes.jpg" alt="">
    <div class="top-row-book-info">
      <h3>Ashes of the City</h3>
      <h3>by Quinton Taylor-Garcia</h3>
      <h3>Bamboo Village Books</h3>
      <h3>book review by Haley Koth from the US Review of Books</h3>
    </div>
    <p>"As she turned to address the remaining group members, Maya silently vowed to prove that compassion and
      cooperation could triumph over chaos. The path ahead was uncertain, but she was determined to lead them through
      it, one careful step at a time."</p><br>
    <p>As the world crumbles around them, a group of high-school students fight for their lives in this action-packed
      novel. Teens Maya, Jace, Riley, Benji, Tariq, and their classmates find their lives upended after an earthquake
      levels their city. Valiant Maya immediately takes charge, organizing efforts to find food and shelter and
      bolstering her friends when their confidence lags. Her leadership is challenged by headstrong Jace, whose
      increasingly bold and immoral ideas soon lead to a splintering of their group. Throughout the following days, the
      two factions clash as they struggle to survive in the strange new landscape they have found themselves in.</p>
    <div class="read-btn">
      <a href="https://www.theusreview.com/reviews-1/Ashes-of-the-City-by-Quinton-Taylor-Garcia.html"><button
          class="read-review-btn">READ FULL
          REVIEW</button></a>
    </div>
  </section>
</template>

<script>

export default {
  name: 'AshesTwoView',
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
.ashes-synopsis
.arrow-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background: none;
  padding-top: 64px;
  font-weight: bold;
  cursor: pointer;
  gap: 8px;
  a {
    color: var(--secondary);
  }
  
 
  .ashes-synopsis {
    display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/dystopian-city.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 32px 64px 96px 64px;
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

  img {
    border: 1px solid var(--quinary);
    width: 60%;
  }
}
}
</style>
